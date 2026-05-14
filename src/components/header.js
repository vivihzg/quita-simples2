import * as React from "react"
import { useState } from "react"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/" className={styles.headerLogo} onClick={close} aria-label="Quita Simples - página inicial">
          <StaticImage
            src="../images/logo.png"
            alt="Quita Simples logo azul"
            placeholder="blurred"
            loading="eager"
            height={50}
          />
        </Link>

        <button
          type="button"
          className={styles.headerToggle}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(v => !v)}
        >
          <span className={`${styles.headerToggleBar} ${open ? styles.headerToggleBarOpen : ""}`} />
          <span className={`${styles.headerToggleBar} ${open ? styles.headerToggleBarOpen : ""}`} />
          <span className={`${styles.headerToggleBar} ${open ? styles.headerToggleBarOpen : ""}`} />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.headerNav} ${open ? styles.headerNavOpen : ""}`}
          aria-label="Navegação principal"
        >
          <Link to="/" onClick={close} activeClassName={styles.headerLinkActive}>Início</Link>
          <Link to="/#vender" onClick={close}>Por que vender?</Link>
          <Link to="/#quem-somos" onClick={close}>Sobre nós</Link>
          <Link to="/blog/" onClick={close} partiallyActive activeClassName={styles.headerLinkActive}>Blog</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
