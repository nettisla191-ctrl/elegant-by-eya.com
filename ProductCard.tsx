import Image from "next/image";
import type { Product } from "@/lib/types";
import { useCart } from "@/lib/cart";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">{product.price} د.م</span>
          <button
            onClick={() => add(product)}
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm hover:opacity-90"
          >
            إضافة للسلة
          </button>
        </div>
      </div>
    </div>
  );
}
