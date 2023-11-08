import { useContext } from "react";
import "./Home.css";
import { FotosContext } from "../../context/fotosContext";

const Home = () => {
	const { imagen_a_ver, setImagen_a_ver } = useContext(FotosContext);
	const agrega_favorito = (id) => {
		const favoritos = imagen_a_ver.map((imagen) => {
			if (imagen.id === id) {
				return { ...imagen, liked: !imagen.liked,
				};
			}
			return imagen;
		}); setImagen_a_ver(favoritos);
	};
	return (
		<div>
			<h1 className="home_titulo">Natural Pic</h1>
			<section className="home_container">
				{imagen_a_ver.map((imagen_a_mostrar, indice) => {
					return (
						<div onClick={() => agrega_favorito(imagen_a_mostrar.id)} className="render_home_container" key={indice}>
							<i className="fa-solid fa-heart corazon_icon" style={{ color: imagen_a_mostrar.liked ? "red" : "white" }}></i>
							<img className="render_imagen" src={imagen_a_mostrar.src.tiny} alt={imagen_a_mostrar.alt} />
							<p>{imagen_a_mostrar.alt}</p>
						</div>
					);
				})}
			</section>
		</div>
	);
};

export default Home;