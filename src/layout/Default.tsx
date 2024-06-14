import Header from "@/common/Header";
import Footer from "@/common/Footer";

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;