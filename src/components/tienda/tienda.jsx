import "./tienda.css";

export function Tienda() {
    return (<div>
        <main className="contenido">
            <aside className="sidebar">
                <h3>Tus etiquetas</h3>
                <ul>
                    <li><a href="#">Supervivencia</a></li>
                    <li><a href="#">Multijugador</a></li>
                    <li><a href="#">Terror</a></li>
                </ul>

                <h3>Recomendado</h3>
                <ul>
                    <li><a href="#">Por tus compras</a></li>
                    <li><a href="#">Por tu lista de deseados</a></li>
                </ul>

                <h3>Explorar categorías</h3>
                <ul>
                    <li><a href="#">Lo más vendido</a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Gratis para jugar</a></li>
                    <li><a href="#">Acceso anticipado</a></li>
                </ul>

                <h3>Géneros</h3>
                <ul>
                    <li><a href="#">Acción</a></li>
                    <li><a href="#">Aventura</a></li>
                    <li><a href="#">Indie</a></li>
                    <li><a href="#">Carreras</a></li>
                    <li><a href="#">Estrategia</a></li>
                </ul>
            </aside>

            <section className="principal">
                <div className="barraBlue">
                    <div>
                        <button>Lista de deseados</button>
                    </div>
                    <div className="barblue">
                        <button className="botonesBarra">Tu tienda</button>
                        <button className="botonesBarra">Nuevo y destacable</button>
                        <button className="botonesBarra">Categorias</button>
                        <button className="botonesBarra">Tienda de puntos</button>
                        <button className="botonesBarra">Noticias</button>
                        <button className="botonesBarra">Laboratorio</button>
                        <input type="text" />
                    </div>
                </div>
                <section className="banner">
                    <img src="/portada left.webp" alt="Grounded 2" />
                    <div className="banner-text">
                        <h1>LEFT 4 DEAD</h1>
                        <p>!OFERTA DISPONIBLE AHORA¡</p>
                    </div>
                </section>


                <section className="destacados">
                    <h2>DESTACADOS Y RECOMENDADOS</h2>
                    <div className="carousel">
                        <button className="arrow">&#10094;</button>
                        <div className="carousel-content">
                            <div className="banerCarousel">
                                <img id="main-carousel-img" src="/peak.jpg" />
                                <div>

                                </div>
                            </div>
                            <div className="miniaturas">
                                <img src="/dota2.jpg" />
                                <img src="/full guys.jpg" />
                                <img src="/stumble guys.webp" />
                            </div>
                        </div>
                        <button className="arrow">&#10095;</button>
                    </div>
                </section>

                <section className="ofertas">
                    <h2>DESCUENTOS Y EVENTOS</h2>
                    <div className="ofertas-grid">
                        <div className="oferta"><img src="/explory story.jpeg" />
                            <div className="precio"><span className="descuento">-40%</span><span className="nuevo">S/.31.80</span></div>
                        </div>
                        <div className="oferta"><img src="/lords.jpg" />
                            <div className="precio"><span className="descuento">-50%</span><span className="nuevo">S/.24.99</span></div>
                        </div>
                        <div className="oferta"><img src="/darkbydaylight.jpg" />
                            <div className="precio"><span className="descuento">-60%</span><span className="nuevo">S/.20.00</span></div>
                        </div>
                        <div className="oferta"><img src="/cyberpunk.avif" />
                            <div className="precio"><span className="descuento">-35%</span><span className="nuevo">S/.99.90</span></div>
                        </div>
                        <div className="oferta"><img src="/terraria.jpeg" />
                            <div className="precio"><span className="descuento">-60%</span><span className="nuevo">S/.59.90</span></div>
                        </div>
                        <div className="oferta"><img src="/rematch.avif" />
                            <div className="precio"><span className="descuento">-10%</span><span className="nuevo">S/.59.90</span></div>
                        </div>
                        <div className="oferta"><img src="/pubg.jpeg" />
                            <div className="precio"><span className="descuento">-15%</span><span className="nuevo">S/.29.90</span></div>
                        </div>
                        <div className="oferta"><img src="/apexlegend.avif" />
                            <div className="precio"><span className="descuento">-45%</span><span className="nuevo">S/.59.90</span></div>
                        </div>
                        <div className="oferta"><img src="/rocketL.avif" />
                            <div className="precio"><span className="descuento">-65%</span><span className="nuevo">S/.19.90</span></div>
                        </div>
                        <div className="oferta"><img src="/rust.jpg" />
                            <div className="precio"><span className="descuento">-05%</span><span className="nuevo">S/.79.90</span></div>
                        </div>
                        <div className="oferta"><img src="/cuphead.avif" />
                            <div className="precio"><span className="descuento">-30%</span><span className="nuevo">S/.59.90</span></div>
                        </div>
                        <div className="oferta"><img src="/hollow.avif" />
                            <div className="precio"><span className="descuento">-80%</span><span className="nuevo">S/.17.00</span></div>
                        </div>
                        <div className="oferta"><img src="/Party Animals.jpg" />
                            <div className="precio"><span className="descuento">-80%</span><span className="nuevo">S/.10.00</span></div>
                        </div>
                        <div className="oferta"><img src="/callofduty.avif" />
                            <div className="precio"><span className="descuento">-05%</span><span className="nuevo">S/.79.90</span></div>
                        </div>
                        <div className="oferta"><img src="/gtasanandreas.jpeg" />
                            <div className="precio"><span className="descuento">-20%</span><span className="nuevo">S/.60.00</span></div>
                        </div>
                    </div>
                </section>

                <section className="populares">
                    <h2>POPULAR ENTRE TUS AMIGOS</h2>
                    <div className="populares-grid">
                        <div className="juego"><img src="/supermarket.jpg" />
                            <p>SuperMarket Togheter</p>
                        </div>
                        <div className="juego"><img src="/darkbydaylight.jpg" />
                            <p>Dead by Daylight</p>
                        </div>
                        <div className="juego"><img src="/gtav.jpg" />
                            <p>GTA V</p>
                        </div>
                        <div className="juego"><img src="/Lossless Scaling.jpg" />
                            <p>Lossless Scaling</p>
                        </div>
                        <div className="juego"><img src="/dayoftheshelll.jpg" />
                            <p>day of the shell</p>
                        </div>

                    </div>
                </section>



            </section>
        </main>
        <footer className="footer">
            <p>&copy; 2025 Valve Corporation. Este es un clon visual con fines educativos.</p>
        </footer>
    </div>)

}