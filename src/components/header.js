import * as React from "react"
import * as styles from "../components/index.module.css";
import Logo from "../images/logo.png";
import { Link } from 'gatsby';

const Header = () => (
  <header className={styles.header}>

    <img to="/" src={Logo} alt="Quita Simples logo azul" />

    <Link to="/#vender">Por que vender?</Link>
    <Link to="/#quem-somos">Sobre nós</Link>
  </header>
)

export default Header
