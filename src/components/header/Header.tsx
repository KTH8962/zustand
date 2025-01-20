import { NavLink } from "react-router-dom"
import styles from "./header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <h1>Zustand</h1>
      <nav>
        <NavLink
          to="/count"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          카운트
        </NavLink>
        <NavLink
          to="/counts"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          카운트2
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          유저
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
