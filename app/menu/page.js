import Link from "next/link";
import { dishes } from "../../data/dishes";
export const revalidate = 60;
export default function Menu(){return <main><h1>Our Menu</h1><div className="grid">{dishes.map(d=><article className="card" key={d.id}><h2>{d.name}</h2><p>{d.description}</p><strong>{d.price} ETB</strong><br/><Link href={`/menu/${d.id}`}>View details</Link></article>)}</div></main>}
