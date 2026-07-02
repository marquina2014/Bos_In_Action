import hero from "../assets/hero.png";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-contenido">
        <div className="home-texto">
          <h1>Bienvenido</h1>
          <p>Selecciona una gerencia desde el menú lateral para continuar.</p>
        </div>

        <div className="home-imagen-contenedor">
          <img src={hero} alt="Pantalla de inicio" className="home-imagen" />
        </div>
      </div>
    </section>
  );
}

export default Home;