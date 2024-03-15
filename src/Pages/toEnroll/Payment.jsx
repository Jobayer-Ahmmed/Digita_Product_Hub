import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import MyCheckOutForm from "./MyCheckOutForm"
// use env
const myStripePromise = loadStripe(import.meta.env.VITE_payment_key)

const Payment = () => {
  return (
    <div>
      <Elements stripe={myStripePromise}>
        <MyCheckOutForm/>
      </Elements>
    </div>
  )
}

export default Payment
