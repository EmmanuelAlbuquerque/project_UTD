import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClientes, removeCliente } from "../../services/cliente-requests";
import { FaTrash, FaEdit } from "react-icons/fa";
import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import styles from "./view.module.css";

function ViewCliente() {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		carregaClientes();
	}, []);

	const carregaClientes = async () => {
		const clientesResponse = await getClientes();
		setClientes(await clientesResponse.data);
	};

	const deleteCliente = async (id) => {
		await removeCliente(id);
		carregaClientes();
	};

	return (
		<>
			<h1 className={styles.h1}>Tabela de Clientes </h1>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Idade</th>
						<th>Email</th>
						<th>Ação</th>
					</tr>
				</thead>
				<tbody>
					{clientes.map((cliente) => (
						<tr key={cliente.id}>
							<td data-label="Id">{cliente.id}</td>
							<td data-label="Nome">{cliente.nome}</td>
							<td data-label="Idade">{cliente.idade}</td>
							<td data-label="Endereco">{cliente.email}</td>
							<td className={styles.btn}>
								<Link
									to={`../edit/${encodeURIComponent(
										cliente.id
									)}`}>
									<button>
										<FaUserEdit className={styles.edit} />
									</button>
								</Link>
								<button
									onClick={() => deleteCliente(cliente.id)}>
									<FaTrashAlt className={styles.trash} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
export default ViewCliente;
