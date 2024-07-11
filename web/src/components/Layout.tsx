import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  page,
  children,
}: {
  page: string;
  children: React.ReactNode;
}) {
  return (
    <div className="text-base font-iaWriterQuattro flex flex-col h-screen lg:max-w-4xl lg:mx-auto">
      <Header page={page} />

      <main className="py-5 px-10 grow">{children}</main>

      <Footer />
    </div>
  );
}
