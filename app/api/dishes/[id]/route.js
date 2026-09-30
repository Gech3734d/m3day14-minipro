import { NextResponse } from "next/server";
import { dishes } from "../../../../data/dishes";
export async function GET(request, { params }) {
  const { id } = await params;
  const dish = dishes.find((item) => item.id === id);
  if (!dish) return NextResponse.json({ error: { message: "Dish not found" } }, { status: 404 });
  return NextResponse.json({ data: dish });
}
