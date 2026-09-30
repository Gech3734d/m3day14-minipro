"use client";
import { useActionState } from "react";
import { placeOrder } from "../actions/orders";
const initialState = { ok:false, message:"", fieldErrors:{} };
export default function CheckoutForm({ cartItems }) {
  const [state, formAction, pending] = useActionState(placeOrder, initialState);
  return <form action={formAction} className="form">
    <input type="hidden" name="items" value={JSON.stringify(cartItems)} />
    <label>Full name<input name="fullName" required />{state.fieldErrors?.fullName && <small>{state.fieldErrors.fullName[0]}</small>}</label>
    <label>Phone<input name="phone" required />{state.fieldErrors?.phone && <small>{state.fieldErrors.phone[0]}</small>}</label>
    <label>Address<textarea name="address" required />{state.fieldErrors?.address && <small>{state.fieldErrors.address[0]}</small>}</label>
    <label>Payment<select name="paymentMethod" defaultValue=""><option value="" disabled>Select payment</option><option>Cash on Delivery</option><option>Telebirr</option><option>Card</option></select>{state.fieldErrors?.paymentMethod && <small>{state.fieldErrors.paymentMethod[0]}</small>}</label>
    <button disabled={pending}>{pending ? "Placing order..." : "Place order"}</button>
    {state.message && <p aria-live="polite">{state.message}</p>}
  </form>;
}
