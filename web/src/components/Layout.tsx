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
    <div className="site-shell text-base font-iaWriterQuattro flex flex-col">
      <Header page={page} />

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
}
