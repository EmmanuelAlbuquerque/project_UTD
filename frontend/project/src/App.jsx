import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/index";
import Cliente from "./pages/Cliente/index";
import AddCliente from "./pages/AddCliente/index";
import EditCliente from "./pages/EditCliente/index";
import ViewCliente from "./pages/ViewCliente/index";
import NoMatch from "./pages/NoMatch/index";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="cliente" element={<Cliente />}>
					<Route index element={<AddCliente />} />
					<Route path="edit/:id" element={<EditCliente />} />
					<Route path="view" element={<ViewCliente />} />
				</Route>
				<Route path="*" element={<NoMatch />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
