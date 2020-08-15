import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
