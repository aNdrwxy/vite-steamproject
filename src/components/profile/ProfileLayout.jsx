import { useEffect, useRef, useState } from "react";
import './ProfileLayout.css';

export function ProfileLayout({profile}){

    const descripcionRef = useRef(null);
    const [showVerMas, setShowVerMas] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const descripcion = descripcionRef.current;
        if (descripcion && descripcion.innerText.length > 360) {
            setShowVerMas(true);
        }
    }, [profile.descripcion]);

    const abrirModal = () => {
        setModalOpen(true);
    };

    const cerrarModal = () => {
    setModalOpen(false);
    };




    return (
        <div>
            <div className="backgroundProfile" style={{ backgroundImage: `url(${profile.background})` }}></div>
            <div className="contenedorProfile">
                <img className="imgProfile" src={profile.avatar} />
                <img className="marcobox1" src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/322330/46461aaea39b18a4a3da2e6d3cf253006f2d6193.png"/>
                <div className="profileInfo">
                    <h5>{profile.nombre_perfil} <span>({profile.edad})</span></h5>
                    <span>{profile.sexo}</span>
                    <p id="descripcion" ref={descripcionRef}>{profile.descripcion}</p>
                    {showVerMas && (
                        <button className="verMasBtn" id="verMasBtn" onClick={abrirModal}>Ver más</button>  
                    )}
                </div>
            </div>
            
            {modalOpen && (
                <div className="modalOverlay" id="modalDescripcion">
                    <div className="modalContent">
                        <p id="modalTexto">{profile.descripcion}</p>
                        <button className="closeModal" onClick={cerrarModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}