import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto relative">
      <Navbar />
      {children}
      <MobileMenu />
      <Footer />
    </div>
  );
}