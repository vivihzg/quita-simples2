import * as React from "react";
import imagemIlustracao from "../images/ilustracao-quita-simples.png";
import * as styles from "../components/index.module.css";

const Principal = () => (
    <main>
        <div className={styles.mainContainer}>
            <div className={styles.div1}>
                <h2>Com a gente é tudo mais simples. <strong>Não perca mais tempo
                    esperando </strong>pelo pagamento dos seus precatórios.</h2>
                <a href="#"><button>Fale conosco agora</button></a>
            </div>

            <div className={styles.div2}>
                <img
                    alt="Mulher despreocupada, por que teve seu tempo salvo com a Quita Simples"
                    src={imagemIlustracao}
                />
            </div>
        </div>
    </main>
)

export default Principal