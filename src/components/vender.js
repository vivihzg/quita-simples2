import * as React from "react"
import * as styles from "../components/index.module.css"

const Vender = () => (
  <section className={styles.cardBackground} id="vender">
    <div className={styles.cardContent}>
      <h2>Por que vender o seu precatório?</h2>
      <p className={styles.venderParagrafo}>
        Cansado de esperar pela justiça? Venda o seu título e receba o seu dinheiro AGORA!
      </p>

      <div className={styles.cardContainer}>
        <article className={styles.card}>
          <div className={styles.cardIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h3>Seu dinheiro em 24h</h3>
          <p className={styles.cardParagrafo}>
            Entendemos que a necessidade financeira pode ser urgente, e por isso, nosso processo é otimizado para que você receba seu dinheiro em até 24 horas após a assinatura do contrato.
          </p>
        </article>

        <article className={styles.card}>
          <div className={styles.cardIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 4 5v6c0 5 3.5 9.4 8 11 4.5-1.6 8-6 8-11V5l-8-3z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <h3>Suporte dedicado</h3>
          <p className={styles.cardParagrafo}>
            Após a compra dos precatórios, oferecemos suporte dedicado para esclarecer dúvidas e ajudar em todas as etapas. Nossa equipe está à disposição para garantir sua segurança.
          </p>
        </article>
      </div>
    </div>
  </section>
)

export default Vender
