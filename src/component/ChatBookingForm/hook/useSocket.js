import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const useSocket = ({ queueId, userId, autoConnect }) => {
  const socketRef = useRef(null);
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs((prev) => [...prev, msg]);

  useEffect(() => {
    if (!autoConnect || !queueId || !userId) return;

    // Connect to /request namespace
    socketRef.current = io("http://localhost:4000/request");

    socketRef.current.on("connect", () =>
      addLog(`Connected as User. Socket ID: ${socketRef.current.id}`)
    );
    socketRef.current.on("disconnect", () => addLog("Disconnected"));
    socketRef.current.on("userJoined", (data) =>
      addLog(`userJoined: ${JSON.stringify(data)}`)
    );
    socketRef.current.on("queueAccepted", (data) =>
      addLog(`queueAccepted: ${JSON.stringify(data)}`)
    );
    socketRef.current.on("error", (err) =>
      addLog(`Error: ${JSON.stringify(err)}`)
    );

    // Automatically join the queue
    socketRef.current.emit("joinQueue", {
      queueId,
      userId,
      role: "user",
    });
    addLog(
      `Sent joinQueue: ${JSON.stringify({ queueId, userId, role: "user" })}`
    );

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, [queueId, userId, autoConnect]);

  return { logs };
};
