import ContenidoFormulario from "../Components/ContenidoFormulario";
import "./Formulario.css";

function Formulario({ formularioSeleccionado, moduloActivo, onVolver }) {
  return (
    <section className="formulario-pantalla">
      <header className="formulario-header">
        <div className="formulario-titulo">
          <span className="formulario-icono">▣</span>

          <div>
            <h1>Gerencia {moduloActivo.nombre}</h1>
            <p>{formularioSeleccionado.nombre}</p>
          </div>
        </div>

        <button type="button" className="formulario-volver" onClick={onVolver}>
          Volver
        </button>
      </header>

      <ContenidoFormulario className="FormularioBorder"
        formularioSeleccionado={formularioSeleccionado}
        moduloActivo={moduloActivo}
      />
    </section>
  );
}

export default Formulario;