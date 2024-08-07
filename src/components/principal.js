import * as React from "react";
import imagemIlustracao from "../images/ilustracao-quita-simples.png";
import * as styles from "../components/index.module.css";

const Principal = () => (
    <>
        <div className={styles.mainContainer}>
            <div className={styles.div1}>
                <h2>Com a gente é tudo mais <br /> simples. <strong>Não perca mais tempo <br />
                    esperando </strong>pelo pagamento dos <br /> seus precatórios.</h2>
                <a href="#"><button>Receber meu precatório</button></a>
            </div>

            <div className={styles.div2}>
                <img
                    alt="Mulher despreocupada, por que teve seu tempo salvo com a Quita Simples"
                    src={imagemIlustracao}
                />
            </div>
        </div>
    </>
)

export default Principal