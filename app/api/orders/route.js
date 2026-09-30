import { NextResponse } from "next/server";
import { orderSchema } from "../../../lib/orderSchema";
import { createOrder } from "../../../lib/orders";
import { requireSession } from "../../../lib/auth";
export async function POST(request) {
  try {
    const session = await requireSession();
    const result = orderSchema.safeParse(await request.json());
    if (!result.success) return NextResponse.json({ error: { message: "Validation failed", fieldErrors: result.error.flatten().fieldErrors } }, { status: 422 });
    const order = createOrder({ ...result.data, userId: session.userId });
    return NextResponse.json({ data: order }, { status: 201 });
  } catch (error) { return NextResponse.json({ error: { message: error.message || "Internal server error" } }, { status: 500 }); }
}
