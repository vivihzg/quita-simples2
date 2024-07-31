import * as React from "react"
import * as styles from "../components/index.module.css";
import fotoCasal from "../images/fotoCasal.jpg";

const Sobre = () => (
    <>
        <div className={styles.sobreContainer} id="quem-somos">
            <div className={styles.sobreTexto}>
                <h2>Por que confiar no <br />Quita Simples?</h2>
                <p>O Quita Simples é uma empresa <br /> especializado na <strong>compra de precatórios.</strong> <br /> Oferecemos uma <strong>solução rápida e prática</strong> <br /> para aqueles que não querem esperar anos <br /> para ter acesso ao seu dinheiro.</p>
                <a href="#"><button>Vender meu precatório</button></a>
            </div>
            <img
                alt="Casal feliz"
                src={fotoCasal}
            />
        </div>
    </>
)
export default Sobre