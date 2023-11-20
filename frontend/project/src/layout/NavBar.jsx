import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logImg from "../img/logoutd.png";

function NavBar() {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.listas}>
				<li>
					<img className={styles.img} src={logImg} alt="logo" />
				</li>
				<li className={styles.item}>
					<Link to="/">Home</Link>
				</li>
				<li className={styles.item}>
					<Link to="/cliente">Adicionar Cliente</Link>
				</li>
				<li className={styles.item}>
					<Link to="/cliente/view">Clientes </Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
