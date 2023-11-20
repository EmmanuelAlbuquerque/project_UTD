import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCliente, getCliente } from "../../services/cliente-requests";
import style from "./edit.module.css";

function EditCliente() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [cliente, setCliente] = useState({
		id: "",
		nome: "",
		idade: "",
		email: "",
	});
	useEffect(() => {
		buscaCliente(id);
	}, []);
	const buscaCliente = async (id) => {
		const clienteDados = await (await getCliente(id)).data;
		console.log(clienteDados);
		setCliente(clienteDados);
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setCliente((clienteAnterior) => {
			return {
				...clienteAnterior,
				[name]: value,
			};
		});
	};

	const editarCliente = async (event) => {
		event.preventDefault();
		console.log(cliente);
		await editCliente(cliente);
		navigate("/cliente/view");
	};
	return (
		<>
			<h1 className={style.h1}>Editar Cliente</h1>
			<form className={style.form} onSubmit={editarCliente}>
				<label>Id:</label>
				<input
					type="text"
					name="id"
					value={cliente.id}
					onChange={handleChange}
					readOnly
				/>

				<label>Nome:</label>
				<input
					type="text"
					name="nome"
					value={cliente.nome}
					onChange={handleChange}
				/>
				<label>Idade:</label>
				<input
					type="text"
					name="idade"
					value={cliente.idade}
					onChange={handleChange}
				/>
				<label>Email:</label>
				<input
					type="text"
					name="email"
					value={cliente.email}
					onChange={handleChange}
				/>
				<button className={style.btn} type="submit">
					atualizar cliente
				</button>
			</form>
		</>
	);
}
export default EditCliente;
