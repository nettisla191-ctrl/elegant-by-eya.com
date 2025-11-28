"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { SITE_NAME, CONTACT_PHONE } from "@/lib/site";

export default function Navbar() {
  const { items } = useCart();
  const count = items.reduce((n, it) => n + it.quantity, 0);
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          {SITE_NAME}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/products" className="hover:opacity-80">المنتجات</Link>
          <Link href="/cart" className="relative hover:opacity-80">
            السلة
            {count > 0 && (
              <span className="absolute -right-3 -top-2 rounded-full bg-foreground text-background text-xs px-2">
                {count}
              </span>
            )}
          </Link>
          <Link href="/contact" className="hover:opacity-80">اتصل بنا</Link>
        </nav>
      </div>
    </header>
  );
}
