import { Layout } from "@/components";
import { BookCollection } from "@/models";
import { generateSiteMetadata } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "On My Bookshelf & Tsundoku Stack",
  description:
    "A personal list of books that I've read and books that have yet to be read.",
};

export default async function Bookshelves() {
  const booklist = await BookCollection.list();

  return (
    <Layout page="bookshelves">
      <div className="prose-custom">
        <p>
          <strong>The Bookshelf</strong> is a collection of books I&apos;ve
          read, want to read, and hope to revisit.
        </p>

        <p>
          Books are a unique form of investment — they require both money to
          obtain and, more valuably, time to read. If books truly are
          investments, consider this my portfolio.
        </p>

        {/* todo 
        <p>
          <strong>The Tsundoku</strong> refers to the Japanese term that
          describes the art of acquiring books and letting them pile up for
          future reading. Here, I&apos;ve listed the books waiting patiently on
          my &quot;to-read&quot; shelf. This list will evolve as I discover new
          titles and finally crack open others.
        </p>
        */}
      </div>

      <hr />

      <div className="prose-custom mt-10">
        <h1>The Bookshelf</h1>

        {booklist.map((book) => (
          <div
            key={book.url}
            className="flex space-x-4 bg-slate-50 p-2 border border-slate-200 rounded-lg mb-4"
          >
            <div className="w-14 m-0">
              <img
                src={book.coverImage}
                alt={`book cover for ${book.title}`}
                className="!my-0 rounded-lg border border-white drop-shadow-lg"
              />
            </div>
            <div className="flex-1">
              <div>
                <Link href={book.url}>{book.title}</Link>
              </div>
              <div>By {book.author}</div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
