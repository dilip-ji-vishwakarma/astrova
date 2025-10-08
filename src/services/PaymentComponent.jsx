import React, { useState } from "react";
import { useRazorpay } from "react-razorpay";
import { apiServiceWithSession } from "./apiServiceWithSession";
import { toast } from "sonner";

const PaymentComponent = ({ data, amount }) => {
  const { error, isLoading, Razorpay } = useRazorpay();
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const fullName = `${data.firstName} ${data.lastName}`;

  const handlePayment = async () => {
    try {
      const amountInPaisa = Number(amount) * 100;

      const response = await apiServiceWithSession(
        "/api/create-order",
        "POST",
        {
          amount: amountInPaisa,
          userId: data.userId,
        }
      );

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

          // Start showing processing message
          setPaymentProcessing(true);

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

            setPaymentProcessing(false); // stop loader

            if (saveResponse.success) {
              toast.success(saveResponse.message);
              window.location.reload();
            } else {
              toast.error(saveResponse.message);
            }
          } catch (err) {
            setPaymentProcessing(false);
            console.error("Error saving payment:", err);
            toast.error("Failed to process payment. Please contact support.");
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
      toast.error("Unable to initiate payment. Try again later.");
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
    <div>
        <button
          className="px-4 py-2 rounded-lg bg-white text-indigo-600 font-semibold shadow-sm hover:bg-gray-100"
          onClick={handlePayment}
          disabled={paymentProcessing}
        >
          {paymentProcessing ? "Payment Processing..." : "Add Money"}
        </button>
    </div>
  );
};

export default PaymentComponent;
