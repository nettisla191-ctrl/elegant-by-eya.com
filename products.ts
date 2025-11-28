import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "eleg-001",
    name: "فستان سهرة فاخر",
    description: "تصميم أنيق مع قماش عالي الجودة يناسب المناسبات.",
    price: 799,
    image: "https://images.unsplash.com/photo-1520978791371-5f7f1c39c6ed?q=80&w=1200&auto=format&fit=crop",
    tags: ["فستان", "سهرة"],
  },
  {
    id: "eleg-002",
    name: "حقيبة جلد كلاسيكية",
    description: "حقيبة جلد طبيعية بتفاصيل معدنية فاخرة.",
    price: 499,
    image: "https://images.unsplash.com/photo-1534699283722-2482f2e36f03?q=80&w=1200&auto=format&fit=crop",
    tags: ["حقيبة", "جلد"],
  },
  {
    id: "eleg-003",
    name: "حذاء بكعب متوسط",
    description: "راحة وأناقة بتصميم يناسب يومك الكامل.",
    price: 349,
    image: "https://images.unsplash.com/photo-1597764690680-8ade9a03e8ea?q=80&w=1200&auto=format&fit=crop",
    tags: ["حذاء", "كعب"],
  },
  {
    id: "eleg-004",
    name: "معطف صوفي طويل",
    description: "دفء وفخامة بألوان هادئة تناسب الشتاء.",
    price: 899,
    image: "https://images.unsplash.com/photo-1548883354-88b6957b8a3b?q=80&w=1200&auto=format&fit=crop",
    tags: ["معطف", "شتوي"],
  },
];
