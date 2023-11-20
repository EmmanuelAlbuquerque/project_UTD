const db = require("../confg/db.config");
const Cliente = db.Cliente;
// Adicionando um registro na tabela
exports.createCliente = (req, res) => {
	let cliente = {};

	try {
		// capturando todos os bady e criando a constante cliente
		cliente.nome = req.body.nome;
		cliente.idade = req.body.idade;
		cliente.email = req.body.email;
		// Salvar cliente no bando de dados
		Cliente.create(cliente, {
			attributes: ["id", "nome", "idade", "email"],
		}).then((result) => {
			res.status(200).json(result);
		});
	} catch (error) {
		res.status(500).json({
			message: "Fail!",
			error: error.message,
		});
	}
};

exports.getCliente = (req, res) => {
	Cliente.findByPk(req.params.id, {
		attributes: ["id", "nome", "idade", "email"],
	})
		.then((cliente) => {
			res.status(200).json(cliente);
		})
		.catch((error) => {
			// log on console
			console.log(error);
			res.status(500).json({
				message: "Error!",
				error: error,
			});
		});
};
exports.clientes = (req, res) => {
	// BUSCAR TODOS OS REGISTROS DA TABELA
	try {
		Cliente.findAll({ attributes: ["id", "nome", "idade", "email"] }).then(
			(clientes) => {
				res.status(200).json(clientes);
			}
		);
	} catch (error) {
		// log on console
		console.log(error);
		res.status(500).json({
			message: "Error!",
			error: error,
		});
	}
};
exports.deleteCliente = async (req, res) => {
	try {
		let clienteId = req.params.id;
		let cliente = await Cliente.findByPk(clienteId);
		if (!cliente) {
			res.status(404).json({
				message: "Does Not exist a Customer with id = " + clienteId,
				error: "404",
			});
		} else {
			await cliente.destroy();
			res.status(200).json("cliente deletado com sucesso.");
		}
	} catch (error) {
		res.status(500).json({
			message:
				"Error -> Can NOT delete a customer with id = " + req.params.id,
			error: error.message,
		});
	}
};
exports.updateCliente = async (req, res) => {
	try {
		let cliente = await Cliente.findByPk(req.body.id);
		if (!cliente) {
			// return a response to client
			res.status(404).json({
				message:
					"Not Found for updating a customer with id = " + clienteId,
				error: "404",
			});
		} else {
			// update new change to database
			let updatedObject = {
				nome: req.body.nome,
				idade: req.body.idade,
				email: req.body.email,
			};
			let result = await Cliente.update(updatedObject, {
				returning: true,
				where: { id: req.body.id },
				attributes: ["id", "nome", "idade", "email"],
			});
			// return the response to client
			if (!result) {
				res.status(500).json({
					message:
						"Error -> Can not update a customer with id = " +
						req.params.id,
					error: "Can NOT Updated",
				});
			}
			res.status(200).json("Cliente alterado com sucesso.");
		}
	} catch (error) {
		res.status(500).json({
			message:
				"Error -> Can not update a customer with id = " + req.params.id,
			error: error.message,
		});
	}
};
