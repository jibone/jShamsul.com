import Link from "next/link";

interface Props {
  href: string;
  textLabel: string;
  ariaLabel?: string;
}

export default function PalestineLink({ href, textLabel, ariaLabel }: Props) {
  return (
    <Link
      href={href}
      className="triangle-link flex font-medium text-gray-900 border-b-4 border-white hover:border-green-600"
      aria-label={ariaLabel}
    >
      <div className="triangle flex-none"></div>
      {textLabel}
    </Link>
  );
}
