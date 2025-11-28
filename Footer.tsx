import { SITE_NAME, CONTACT_PHONE, STORE_ADDRESS, ADMIN } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE_NAME}</p>
        <p>هاتف الطلب: <a className="underline" href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a></p>
        <p>العنوان: {STORE_ADDRESS}</p>
        <p>المسؤول: {ADMIN.name} — {ADMIN.notes}</p>
      </div>
    </footer>
  );
}
