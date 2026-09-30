import { cookies } from "next/headers";
import CheckoutForm from "../components/CheckoutForm";
export const dynamic = "force-dynamic";
export default async function Checkout(){await cookies(); const cartItems=[{dishId:"1",quantity:1},{dishId:"3",quantity:1}]; return <main><h1>Checkout</h1><CheckoutForm cartItems={cartItems}/></main>}
