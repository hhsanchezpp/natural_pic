import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"

export const FotosContext = createContext()

const FotosProvider  = ({children}) => {
    const link_de_la_Api = "https://api.pexels.com/v1/search?query=people&per_page=20";
	const [imagen_a_ver, setImagen_a_ver] = useState([]);
	const llamadoApi = async () => {
		try {
			const recuperacion = await fetch(link_de_la_Api, {headers: {Authorization: "1LIRoZLvJmpuviex5AHOqGG3Agmonf2amzcUMxwmHKKGUS6uKM0RFnQT",},});
			const lainfo = await recuperacion.json();
			setImagen_a_ver(lainfo.photos);
		} catch (error) { console.error("Error en el consumo de la API"); }
	};

	useEffect(() => { llamadoApi(); }, []);

    const lainfo = { imagen_a_ver, setImagen_a_ver }

    return ( <FotosContext.Provider value={lainfo}>{children}</FotosContext.Provider> )
}
FotosProvider.propTypes = { children: PropTypes.array.isRequired }

export default FotosContext
export {FotosProvider} 