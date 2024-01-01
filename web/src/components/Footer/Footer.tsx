import Link from "next/link";
import { siteMetadata } from "@/data/siteMetadata";
import { Icon } from "@/components/Icon";

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Icon kind="x" href={siteMetadata.x} size={6} />
          <Icon kind="mail" href="/contact" size={6} />
          <Icon kind="github" href={siteMetadata.github} size={6} />
        </div>
        <div className="flex flex-col sm:flex-row mb-2 space-x-2 text-sm text-gray-500">
          <div className="text-center">{siteMetadata.author}</div>
          <div className="hidden sm:block text-center">{` • `}</div>
          <div className="text-center">{`© ${new Date().getFullYear()}`}</div>
          <div className="hidden sm:block text-center">{` • `}</div>
          <Link href="/" className="text-center">
            {siteMetadata.title}
          </Link>
        </div>
      </div>
    </footer>
  );
}
