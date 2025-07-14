import { useEffect, useState } from 'react';
import { getGamerForId } from '../../api/biblioteca.api'; // ajusta si la ruta es diferente
import { JuegosCarts } from './JuegosCarts';
import './layoutUserBiblioteca.css';

export function LayoutUserBiblioteca() {
    const [juegos, setJuegos] = useState([]);
    const user_id = localStorage.getItem('user_id');
    const [busqueda, setBusqueda] = useState("");
    const [juegosFiltrados, setJuegosFiltrados] = useState(juegos);
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);


    useEffect(() => {
        async function fetchBiblioteca() {
            try {
                const res = await getGamerForId(user_id);
                setJuegos(res.data.juegos); // res.data.juegos es el array completo
            } catch (error) {
                console.error("Error al cargar biblioteca:", error);
            }
        }

        fetchBiblioteca();
    }, [user_id]);

    useEffect(() => {
        const filtro = juegos.filter((juego) =>
            juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );
        setJuegosFiltrados(filtro);
    }, [busqueda, juegos]);

    return (
        <div className="biblioteca-container">
            <div className="box1">
                <h2 className="titulo-biblioteca">Mi Biblioteca</h2>
                <div className="inputContainer">
                    <input type="text" placeholder="Buscar juego..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)} className="buscador-input"/>
                </div>
                <div className="juegos-grid">
                {juegosFiltrados.length === 0 ? (
                    <p>No se encontraron juegos.</p>
                ):
                (
                    juegosFiltrados.map((juego) => (
                        <JuegosCarts key={juego.id} juego={juego} onClick={(j) => setJuegoSeleccionado(j)} />
                    ))
                )}
                </div>
            </div>
            <div className="box2">
            {juegoSeleccionado ? (
                
                <div className="detalle-juego">
                    <div className="imagenJuego-detalle">
                        <img src={juegoSeleccionado.imagen} alt="imagen juego" />
                    </div>
                    <div className="infoJuego-detalle">
                        <h3>{juegoSeleccionado.nombre}</h3>
                        <p><strong>Descripción: </strong><br />{juegoSeleccionado.descripcion}</p>
                        <p><strong>Fecha de Lanzamiento: </strong><br />{juegoSeleccionado.fecha_lanzamiento}</p>
                        <p><strong>Desarrollador: </strong><br />{juegoSeleccionado.desarrollador}</p>
                    </div>
                </div>
            ) : (
                <p className="mensaje-inicial">Selecciona un juego para ver los detalles</p>
            )}
            </div>
        </div>
    );
}
