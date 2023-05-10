import { Header } from "@/components/Header";
import { ReactNode } from "react";
import { Footer } from "@/components/Footer";

interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
