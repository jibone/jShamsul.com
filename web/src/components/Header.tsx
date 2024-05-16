import Link from "next/link";
import { Nav } from "@/components";

export default function Header({ page }: { page: string }) {
  return (
    <header className="pt-20 pb-10 px-10 flex-none">
      <div className="text-black font-semibold">jShamsul.com</div>
      <Nav page={page} />
    </header>
  );
}
