import * as React from "react"
import * as styles from "../components/index.module.css";

const Vender = () => (
    <>
        <div className={styles.cardBackground} id="vender">
            <div className={styles.cardContent}>
                <h2>Por que vender o seu precatório?</h2>
                <p className={styles.venderParagrafo}>Cansado de esperar pela justiça? Venda o seu título e receba o seu dinheiro AGORA!</p>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h3>Seu dinheiro em 24h</h3>
                        <p className={`${styles.cardParagrafo} ${styles.cardParagrafo1}`}>Entendemos que a necessidade financeira pode ser urgente, e por isso, nosso processo é otimizado para que você receba seu dinheiro em até 24 horas após a assinatura do contrato.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Suporte</h3>
                        <p className= {`${styles.cardParagrafo} ${styles.cardParagrafo2}`}>Após a compra dos precatórios, oferecemos suporte dedicado para esclarecer dúvidas e ajudar em todas as etapas. Nossa equipe está à disposição para garantir sua segurança.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
export default Vender
