import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { SITE_NAME, STORE_CATEGORY } from "@/lib/site";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-700 text-white p-8 mb-10">
        <h1 className="text-3xl font-bold">{SITE_NAME}</h1>
        <p className="mt-2 text-zinc-200">{`متجر ${STORE_CATEGORY} — اختيارات أنيقة بعناية`}</p>
        <Link href="/products" className="mt-6 inline-block rounded-full bg-white text-black px-5 py-3 text-sm">اكتشف المجموعة</Link>
      </div>
      <h2 className="text-xl font-semibold mb-6">منتجات مختارة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
