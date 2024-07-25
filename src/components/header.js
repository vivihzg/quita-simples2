import * as React from "react"
import * as styles from "../components/index.module.css";
import Logo from "../images/logo.png";

const Header = () => (
  <header className={styles.header}>
    <img src={Logo} alt="Quita Simples logo azul" />
    <a href="#">Por que vender?</a>
    <a href="#">Sobre nós</a>
  </header>
)

export default Header
