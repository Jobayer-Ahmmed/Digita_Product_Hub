
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios/useAxios";
import { Context } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyCheckOutForm = () => {
  const {store} = useContext(Context)
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState("");
  const navigate = useNavigate()
  const rootAxios = useAxios()

  const resetCardForm = () => {
    if (elements) {
      const cardNumberElement = elements.getElement(CardNumberElement);
      const cardExpiryElement = elements.getElement(CardExpiryElement);
      const cardCvcElement = elements.getElement(CardCvcElement);
      if (cardNumberElement && cardExpiryElement && cardCvcElement) {
        cardNumberElement.clear();
        cardExpiryElement.clear();
        cardCvcElement.clear();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return;
    }



    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
    });

    if (error) {
      console.log("payment error : ", error);
      setErr(error.message);
    } else {
      console.log("payment method : ", paymentMethod);
      setErr("");
      resetCardForm() 

      rootAxios.post("/course/enrollment", store)  
      .then(res=>console.log(res))

      Swal.fire({
        title: "Congratulation! Enrollment Successful",
        icon: "success"
      });

      navigate("/")

    }
  };

  return (
    <div className="w-80 md:w-[450px] mx-auto  p-10">
      <div className="my-20 border-2 shadow-xl rounded-lg p-10 text-xl">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Card Number</label>
            <CardNumberElement className="px-4 py-2 mt-2 my-5 border-2" />
          </div>
          <div>
            <label>Expiration Date</label>
            <CardExpiryElement  className="px-4 py-2 mt-2 my-5 border-2" />
          </div>
          <div>
            <label>CVC</label>
            <CardCvcElement  className="px-4 py-2 mt-2 my-5 border-2" />
          </div>
          <button className="mt-10 btn bg-cyan-800 text-white"
          type="submit" 
          disabled={!stripe}>
            Confirm Enroll
          </button>
        </form>
        <p>{err}</p>
      </div>
    </div>
  );
};

export default MyCheckOutForm;

