import * as React from "react"
import * as styles from "../components/index.module.css";
import logoBranca from "../images/logo-branca.png"
const Footer = () => (
    <footer>
        <div className={styles.footerBackground}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <img
                        src={logoBranca}
                        alt="Quita Simples logo branca"
                    />
                    <p>Simplificando o pagamento <br /> dos seus precatórios.</p>
                </div>
                <div className={styles.footerPolitica}>
                    <p><a href="#">Política de Privacidade</a></p>
                    <p><a href="#">Política de Cookies</a></p>
                </div>
            </div>
        </div>

    </footer>
)

export default Footer