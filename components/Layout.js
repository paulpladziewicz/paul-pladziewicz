import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}