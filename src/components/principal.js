import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../components/index.module.css";

const Principal = () => (
  <section className={styles.mainContainer}>
    <div className={styles.heroText}>
      <h1 className={styles.heroTitle}>
        Com a gente é tudo mais simples.{" "}
        <strong>Não perca mais tempo esperando</strong> pelo pagamento dos seus precatórios.
      </h1>
      <a
        className={styles.ctaLink}
        href="https://wa.me/5545984055504/?text=Ol%C3%A1%20tenho%20interesse%20de%20vender%20meu%20precat%C3%B3rio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button">Receber meu precatório</button>
      </a>
    </div>

    <div className={styles.heroImage}>
      <StaticImage
        src="../images/ilustracao-quita-simples.png"
        alt="Mulher despreocupada, por que teve seu tempo salvo com a Quita Simples"
        placeholder="blurred"
        loading="eager"
        height={400}
      />
    </div>
  </section>
)

export default Principal
