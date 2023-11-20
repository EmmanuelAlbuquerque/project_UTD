import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<ul className={styles.social}>
				<li>
					<FaFacebook />
				</li>
				<li>
					<FaInstagram />
				</li>
				<li>
					<FaLinkedin />
				</li>
			</ul>
			<p className={styles.feito}>
				<span>Feito Por Emmanuel Albuquerque</span>
			</p>
		</footer>
	);
}

export default Footer;
