import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import * as styles from "../components/index.module.css"
import { SEO } from "../components/seo"

const NotFoundPage = () => (
  <>
    <Header />
    <main>
      <div className={styles.notFound}>
        <span className={styles.notFoundCode}>404</span>
        <h1>Página não encontrada</h1>
        <p>A página que você procura não existe ou foi movida.</p>
        <Link to="/" className={styles.ctaLink}>
          <button type="button">Voltar para a página inicial</button>
        </Link>
      </div>
    </main>
    <Footer />
  </>
)

export default NotFoundPage

export const Head = () => (
  <SEO
    title="Página não encontrada – Quita Simples"
    description="A página que você procura não foi encontrada. Volte para a página inicial da Quita Simples para explorar nossos serviços de compra de precatórios."
    pathname="/404"
  />
)
