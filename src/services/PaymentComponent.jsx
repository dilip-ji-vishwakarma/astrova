import React from "react";
import { useRazorpay } from "react-razorpay";
import { apiServiceWithSession } from "./apiServiceWithSession";
import { toast } from "sonner";

const PaymentComponent = ({ data, amount }) => {
  const { error, isLoading, Razorpay } = useRazorpay();
  const fullName = `${data.firstName} ${data.lastName}`;

  const handlePayment = async () => {
    try {
        const amountInPaisa = Number(amount) * 100;
      const response = await apiServiceWithSession("/api/create-order", "POST", {
        amount: amountInPaisa,
        userId: data.userId,
      });

      const { order_id } = await response;
      const options = {
        key: "rzp_test_RPOdHBbaULaS3K",
        amount: amountInPaisa,
        currency: "INR",
        name: "Astrova",
        description: "Wallet Recharge",
        order_id: order_id,
        handler: async function (rzpResponse) {
          console.log("Payment successful:", rzpResponse);
          const payload = {
            userId: data.id,
            amount: amount,
            provider: "razorpay",
            txnId: rzpResponse.razorpay_payment_id,
            orderId: rzpResponse.razorpay_order_id,
            signature: rzpResponse.razorpay_signature,
            paymentFor: "walletRecharge",
          };

          try {
            const saveResponse = await apiServiceWithSession(
              "/payment",
              "POST",
              payload
            );
            window.location.reload();
            if (saveResponse.success) {
              toast.success(saveResponse.message);
            } else {
              toast.success(saveResponse.message);
            }
          } catch (err) {
            console.error("Error saving payment:", err);
          }
        },
        prefill: {
          name: fullName,
          email: data.email,
          contact: data.phone,
        },
        theme: { color: "#3399CC" },
      };

      if (Razorpay) {
        const rzp = new Razorpay(options);
        rzp.open();
      }
    } catch (err) {
      console.error("Payment initiation failed:", err);
    }
  };

  if (isLoading)
    return (
      <span
        className="spinner-border spinner-border-sm me-2"
        role="status"
        aria-hidden="true"
      ></span>
    );
  if (error) return <div>Error loading Razorpay: {error.message}</div>;

  return (
    <button
      className="px-4 py-2 rounded-lg bg-white text-indigo-600 font-semibold shadow-sm hover:bg-gray-100"
      onClick={handlePayment}
    >
      Add Money
    </button>
  );
};

export default PaymentComponent;
