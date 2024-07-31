import * as React from "react"
import * as styles from "../components/index.module.css";
import Logo from "../images/logo.png";
import { Link } from 'gatsby';

const Header = () => (
  <header className={styles.header}>

    <Link to="/">
      <img src={Logo} alt="Quita Simples logo azul" />
    </Link>

    <div className={styles.headerLink}>
      <Link to="/#vender">Por que vender?</Link>
      <Link to="/#quem-somos">Sobre nós</Link>
    </div>
  </header>
)

export default Header
