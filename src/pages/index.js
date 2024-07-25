import * as React from "react";
import Header from "../components/header";
import Vender from "../components/vender";
import Principal from "../components/principal";
import Sobre from "../components/sobre";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
      <Header />
      <Principal />
      <Vender />
      <Sobre />
      <Footer />
    </>
  );
};

export default IndexPage;
export const Head = () => <title>Quita Simples – Simplificando o pagamento dos seus precatórios.</title>;
