import { FaComments, FaPhone, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

const ChatButtons = ({ type }) => {
  return (
    <div className="flex gap-2">
      {type === "chat" ? (
        <div className="Astro_call_video_btn_main">
          <button className="Astro_call_video_btn Astro_chat_btn">Chat</button>
        </div>
      ) : (
        <div className="Astro_call_video_btn_main">
          <button className="Astro_call_video_btn">
            <FaPhoneAlt />
          </button>
          <button className="Astro_call_video_btn">
            <FaVideo />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatButtons;
