import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Favoritos from "./pages/Favoritos/Favoritos";
import { FotosProvider } from "./context/fotosContext";

function App() {
	return (
		<div>
			<FotosProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/favoritos" element={<Favoritos />}></Route>
				</Routes>
			</FotosProvider>
		</div>
	);
}

export default App;