import { Layout } from "@/components";
import { BookCollection } from "@/models";
import { Metadata } from "next";
import BookBox from "@/components/BookBox";

export const metadata: Metadata = {
  title: "On My Bookshelf & Tsundoku Stack",
  description:
    "A personal list of books that I've read and books that have yet to be read.",
};

export default async function Bookshelves() {
  const booklist = await BookCollection.list();
  const bookshelf = booklist.filter((b) => b.read === true);

  return (
    <Layout page="bookshelf">
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

        {bookshelf.map((book) => (
          <div key={book.url}>
            <BookBox
              url={book.url}
              cover={book.coverImage}
              title={book.title}
              subtitle={book.subtitle}
              author={book.author}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
