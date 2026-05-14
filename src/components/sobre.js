import * as React from "react"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Sobre = () => (
  <section className={styles.sobreContainer} id="quem-somos">
    <div className={styles.sobreTexto}>
      <h2>Por que confiar no Quita Simples?</h2>
      <p>
        O Quita Simples é uma empresa especializada na <strong>compra de precatórios</strong>. Oferecemos uma <strong>solução rápida e prática</strong> para aqueles que não querem esperar anos para ter acesso ao seu dinheiro.
      </p>
      <a
        className={styles.ctaLink}
        href="https://wa.me/5545984055504/?text=Ol%C3%A1%20tenho%20interesse%20de%20vender%20meu%20precat%C3%B3rio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button">Vender meu precatório</button>
      </a>
    </div>
    <div className={styles.sobreImagem}>
      <StaticImage
        src="../images/fotoCasal.jpg"
        alt="Casal feliz após vender precatório com Quita Simples"
        placeholder="blurred"
        loading="lazy"
        width={500}
      />
    </div>
  </section>
)

export default Sobre
