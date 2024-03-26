import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../components/index.module.css";
import Logo from "../images/logo.png";

const Header = () => (
  <header className={styles.header}>
    <img src={Logo} alt="Quita Simples" />
  </header>
)

export default Header
