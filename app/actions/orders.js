"use server";
import { revalidatePath } from "next/cache";
import { orderSchema } from "../../lib/orderSchema";
import { createOrder, cancelOwnedOrder } from "../../lib/orders";
import { requireSession } from "../../lib/auth";
export async function placeOrder(prevState, formData) {
  try {
    const session = await requireSession();
    const raw = { fullName: formData.get("fullName"), phone: formData.get("phone"), address: formData.get("address"), paymentMethod: formData.get("paymentMethod"), items: JSON.parse(formData.get("items") || "[]") };
    const result = orderSchema.safeParse(raw);
    if (!result.success) return { ok:false, message:"Please correct the form.", fieldErrors: result.error.flatten().fieldErrors };
    const order = createOrder({ ...result.data, userId: session.userId });
    revalidatePath("/menu");
    revalidatePath("/checkout");
    return { ok:true, orderId:order.id, message:"Order placed successfully." };
  } catch (error) { return { ok:false, message:error.message || "Unable to place order." }; }
}
export async function cancelOrder(orderId) {
  const session = await requireSession();
  const result = cancelOwnedOrder(orderId, session.userId);
  if (!result.ok) throw new Error(result.reason === "not_found" ? "Order not found." : "Forbidden: you do not own this order.");
  revalidatePath("/orders");
  revalidatePath("/checkout");
  return { ok:true, order:result.order };
}
