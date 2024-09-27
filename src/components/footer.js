import * as React from "react"
import * as styles from "../components/index.module.css";
import logoBranca from "../images/logo-branca.png"
import { Link } from 'gatsby';
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
                <Link to="/politica-de-privacidade">Política de Privacidade</Link>
                </div>
            </div>
            <div className={styles.footerMarca}>
                <span>QUITA SIMPLES INVESTIMENTOS EM DIREITOS CREDITORIOS LTDA <br/>CNPJ: 57.424.278/0001-03 | Cascavel-PR</span>
            </div>
        </div>
    </footer>
)

export default Footer