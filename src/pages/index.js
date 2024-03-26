// src/pages/index.js

import * as React from "react";
import imagemIlustracao from "../images/ilustracao-quita-simples.png";
import * as styles from "../components/index.module.css";
import Header from "../components/header"; // Importando o componente de cabeçalho

const IndexPage = () => {
  return (
    <>
      <Header /> {/* Usando o componente de cabeçalho */}
      <main>
        <div className={styles.div1}>
          <h2>Com a gente é tudo mais simples. Não perca mais tempo
            <br /> esperando pelo pagamento dos seus precatórios.</h2>
          <a href="#"><button>Fale conosco agora</button></a>
        </div>

        <div className={styles.div2}>
          <img
            alt="Mulher despreocupada, por que teve seu tempo salvo com a Quita Simples"
            src={imagemIlustracao}
          />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
export const Head = () => <title>Quita Simples</title>;
