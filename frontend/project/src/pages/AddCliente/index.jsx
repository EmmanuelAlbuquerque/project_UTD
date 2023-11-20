import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCliente } from "../../services/cliente-requests";
import styles from "./add.module.css";
function AddCliente() {
	const navigate = useNavigate();
	const [cliente, setCliente] = useState({
		nome: "",
		idade: "",
		email: "",
	});
	const handleChange = (event) => {
		const { name, value } = event.target;
		setCliente((clienteAnterior) => {
			return {
				...clienteAnterior,
				[name]: value,
			};
		});
	};

	const salvaCliente = async (event) => {
		event.preventDefault();
		console.log(cliente);
		await addCliente(cliente);
		navigate("/cliente/view");
	};
	return (
		<>
			<h1 className={styles.h1}>Adicionar Clientes</h1>
			<form className={styles.form} onSubmit={salvaCliente}>
				<label>Nome:</label>
				<input
					type="text"
					name="nome"
					value={cliente.nome}
					onChange={handleChange}
					placeholder="Digite seu nome"
				/>
				<label>Idade:</label>
				<input
					type="text"
					name="idade"
					value={cliente.idade}
					onChange={handleChange}
					placeholder="Digite sua idade"
				/>
				<label>Email:</label>
				<input
					type="text"
					name="email"
					value={cliente.email}
					onChange={handleChange}
					placeholder="Digite seu email"
				/>
				<button className={styles.btn} type="submit">
					SALVAR
				</button>
			</form>
		</>
	);
}
export default AddCliente;
