import { Metadata } from "next";
import { allPages, Page } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { siteMetadata } from "@/data/siteMetadata";
import { generateSiteMetadata } from "@/utils";

function getPageContent(name: string): Page | undefined {
  return allPages.find((p) => p.name === name);
}

export async function generateMetadata(): Promise<Metadata | undefined> {
  const page = allPages.find((p) => p.name === "contact");
  if (!page) notFound();

  return generateSiteMetadata({
    title: page.title,
    description: page.description,
    image: siteMetadata.socialBanner,
  });
}

export default function Contact() {
  const pageContent = getPageContent("contact");
  if (!pageContent) notFound();

  const MDXPageContent = useMDXComponent(pageContent.body.code);

  return (
    <>
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact.
          </h1>
          <div className="prose-lg">
            <MDXPageContent />
          </div>
        </div>
      </div>
    </>
  );
}
