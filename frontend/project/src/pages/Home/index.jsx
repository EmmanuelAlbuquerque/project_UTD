import style from "./Home.module.css";
import logEmp from "../../img/logEmp.png";

function Home() {
	return (
		<section className={style.home}>
			<h1>Bem-Vindo a sua tabela de Clientes!</h1>
			<p>
				<span>UTD - UNIVERSIDADE DO TRABALHO DIGITAL</span>
			</p>

			<img src={logEmp} alt="imagem " />
		</section>
	);
}
export default Home;
