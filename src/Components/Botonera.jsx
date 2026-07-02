import { useNavigate } from "react-router-dom";
import "./Botonera.css";

const formularios = [
  {
    id: "registro-mop",
    nombre: "Registro MOP",
    ruta: "registro-mop",
    url: "MOP_L1",
  },
  {
    id: "registro-mip",
    nombre: "Registro MIP",
    ruta: "registro-mip",
    url: "MIP_L1",
  },
  {
    id: "inspeccion-lugares-trabajo-activo",
    nombre: "Inspección de lugares de trabajo activo",
    ruta: "inspeccion-lugares-trabajo-activo",
    url: "Inspeccion_Lugares_Trabajo_Activo",
  },
  {
    id: "registro-5s",
    nombre: "Registro 5S",
    ruta: "registro-5s",
    url: "Registro_5S",
  },
  {
    id: "sesion-1-a-1",
    nombre: "Sesión 1 a 1",
    ruta: "sesion-1-a-1",
    url: "Sesion_1_a_1",
  },
  {
    id: "inicio-trabajo-seguro",
    nombre: "Inicio Trabajo Seguro",
    ruta: "inicio-trabajo-seguro",
    url: "Inicio_Trabajo_Seguro",
  },
  {
    id: "resolucion-de-problemas",
    nombre: "Resolución de Problemas",
    ruta: "resolucion-de-problemas",
    url: "RDP",
  },
  {
    id: "identificacion-de-oportunidades",
    nombre: "Identificación de Oportunidades",
    ruta: "identificacion-de-oportunidades",
    url: "Identificacion_Oportunidades",
  },
];

function Botonera({ moduloActivo, seccionUrl }) {
  const navigate = useNavigate();

  const seleccionarFormulario = (formulario) => {
    if (!moduloActivo?.nombre || !seccionUrl || !formulario.url) return;

    navigate(`/${moduloActivo.nombre}/${seccionUrl}/${formulario.url}`);
  };

  return (
    <section className="botonera">
      {formularios.map((formulario) => (
        <button
          key={formulario.id}
          type="button"
          className="botonera-boton"
          onClick={() => seleccionarFormulario(formulario)}
        >
          {formulario.nombre}
        </button>
      ))}
    </section>
  );
}

export default Botonera;