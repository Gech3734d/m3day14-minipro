import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes } from "../../../data/dishes";
export function generateStaticParams(){return dishes.map(d=>({id:d.id}));}
export default async function DishDetails({params}){const {id}=await params; const dish=dishes.find(d=>d.id===id); if(!dish) notFound(); return <main><Link href="/menu">← Back</Link><article className="card"><h1>{dish.name}</h1><p>{dish.description}</p><h2>{dish.price} ETB</h2></article></main>}
