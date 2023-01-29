import { Header } from "../components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
