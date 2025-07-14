import './JuegosCarts.css';

export function JuegosCarts({ juego, onClick }) {
    return (
        <div onClick={() => onClick(juego)} style={{ cursor: "pointer" }}>
            <div className="juego-card">
                <div className="juego-img-container">
                    <img className="juego-imagen" src={juego.imagen} alt="imagen" />
                    <div className="overlay">
                        <div className="juego-info">
                            <h3 className='textnamegame'>{juego.nombre}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
