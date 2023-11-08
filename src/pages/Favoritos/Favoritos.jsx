import { useContext } from "react";
import FotosContext from "../../context/fotosContext";
import "./Favoritos.css"
const Favoritos = () => {
    const {imagen_a_ver} = useContext(FotosContext)
    console.log(imagen_a_ver.filter((imagen_a_mostrar)=> imagen_a_mostrar.liked))
	return (
	<div>
		<h1 className="favoritos_titulo">Natural Pic</h1>
			<div className="home_container">
				{
				imagen_a_ver.filter((imagen_a_mostrar)=> imagen_a_mostrar.liked).map((imagen_a_mostrar, indice) => {
					return (
						<div className="render_home_container" key={indice}>
							<i className="fa-solid fa-heart corazon_icon" style={{color:"red"}}></i>
								<img className="render_imagen" src={imagen_a_mostrar.src.tiny} alt={imagen_a_mostrar.alt} />
							<p>{imagen_a_mostrar.alt}</p>
						</div>
					);
				})
				}
			</div>
	</div>
	);
}
export default Favoritos