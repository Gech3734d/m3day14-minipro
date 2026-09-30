import "./globals.css";
import Link from "next/link";
export default function RootLayout({children}){return <html lang="en"><body><header><Link href="/">Addis Eats</Link> <nav><Link href="/menu">Menu</Link> | <Link href="/checkout">Checkout</Link></nav></header>{children}<footer>Addis Eats © 2026</footer></body></html>}
