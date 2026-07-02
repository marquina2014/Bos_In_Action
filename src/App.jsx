import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

import Menu from "./Components/Menu";
import Home from "./Screens/Home";
import Formulario from "./Screens/Formulario";
import GestionUsuario from "./Screens/GestionUsuario";
import Opciones from "./Components/Opciones";
import Botonera from "./Components/Botonera";
import FormulariosCompletados from "./Components/FormulariosLlenos/FormulariosCompletados";
import "./App.css";
import AppHeader from "./Components/AppHeader";

const pantallasModulo = {
  GMESM: {
    id: "gmesm",
    nombre: "GMESM",
    titulo: "Módulo GMESM",
    tipo: "app",
  },
  GMEM: {
    id: "gmem",
    nombre: "GMEM",
    titulo: "Módulo GMEM",
    tipo: "app",
  },
  GPM: {
    id: "gpm",
    nombre: "GPM",
    titulo: "Módulo GPM",
    tipo: "app",
  },
  GPMDA: {
    id: "gpmda",
    nombre: "GPMDA",
    titulo: "Módulo GPMDA",
    tipo: "app",
  },
};

const seccionesPorUrl = {
  Registro_Actividad: {
    id: "registro-actividad",
    nombre: "Registro de Actividad",
    url: "Registro_Actividad",
  },
  Formulario_Completado: {
    id: "formularios-completados",
    nombre: "Formularios Completados",
    url: "Formulario_Completado",
  },
  Cierre_Acciones: {
    id: "cierre-acciones",
    nombre: "Cierre de Acciones",
    url: "Cierre_Acciones",
  },
};

const seccionesPorId = {
  "registro-actividad": seccionesPorUrl.Registro_Actividad,
  "formularios-completados": seccionesPorUrl.Formulario_Completado,
  "cierre-acciones": seccionesPorUrl.Cierre_Acciones,
};

const formulariosPorUrl = {
  MOP_L1: {
    id: "registro-mop",
    nombre: "Registro MOP",
    ruta: "registro-mop",
    url: "MOP_L1",
  },
  MIP_L1: {
    id: "registro-mip",
    nombre: "Registro MIP",
    ruta: "registro-mip",
    url: "MIP_L1",
  },
  Inspeccion_Lugares_Trabajo_Activo: {
    id: "inspeccion-lugares-trabajo-activo",
    nombre: "Inspección de lugares de trabajo activo",
    ruta: "inspeccion-lugares-trabajo-activo",
    url: "Inspeccion_Lugares_Trabajo_Activo",
  },
  Registro_5S: {
    id: "registro-5s",
    nombre: "Registro 5S",
    ruta: "registro-5s",
    url: "Registro_5S",
  },
  Sesion_1_a_1: {
    id: "sesion-1-a-1",
    nombre: "Sesión 1 a 1",
    ruta: "sesion-1-a-1",
    url: "Sesion_1_a_1",
  },
  Inicio_Trabajo_Seguro: {
    id: "inicio-trabajo-seguro",
    nombre: "Inicio Trabajo Seguro",
    ruta: "inicio-trabajo-seguro",
    url: "Inicio_Trabajo_Seguro",
  },
  RDP: {
    id: "resolucion-de-problemas",
    nombre: "Resolución de Problemas",
    ruta: "resolucion-de-problemas",
    url: "RDP",
  },
  Identificacion_Oportunidades: {
    id: "identificacion-de-oportunidades",
    nombre: "Identificación de Oportunidades",
    ruta: "identificacion-de-oportunidades",
    url: "Identificacion_Oportunidades",
  },
};

function RedireccionGerencia() {
  const { gerencia } = useParams();
  const gerenciaKey = gerencia?.toUpperCase();

  if (!pantallasModulo[gerenciaKey]) {
    return <Navigate to="/Home" replace />;
  }

  return <Navigate to={`/${gerenciaKey}/Registro_Actividad`} replace />;
}

function PantallaModulo() {
  const navigate = useNavigate();
  const { gerencia, seccion } = useParams();

  const gerenciaKey = gerencia?.toUpperCase();
  const pantalla = pantallasModulo[gerenciaKey];
  const seccionActual = seccionesPorUrl[seccion];

  if (!pantalla) {
    return <Navigate to="/Home" replace />;
  }

  if (!seccionActual) {
    return <Navigate to={`/${pantalla.nombre}/Registro_Actividad`} replace />;
  }

  const cambiarSeccion = (idSeccion) => {
    const nuevaSeccion = seccionesPorId[idSeccion];

    if (!nuevaSeccion) return;

    navigate(`/${pantalla.nombre}/${nuevaSeccion.url}`);
  };

  if (
    seccionActual.id === "formularios-completados" ||
    seccionActual.id === "cierre-acciones"
  ) {
    return (
      <FormulariosCompletados
        moduloActivo={pantalla}
        seccionActual={seccionActual}
      />
    );
  }

  return (
    <section className="panel-principal">
      <div className="titulo-modulo">
        <span className="pin">📌</span>
        <h1>{pantalla.titulo}</h1>
      </div>

      <p className="subtitulo">
        Pantalla Principal de Gerencia {pantalla.nombre}
      </p>

      <Opciones
        opcionActiva={seccionActual.id}
        setOpcionActiva={cambiarSeccion}
      />

      <Botonera
        opcionActiva={seccionActual.id}
        moduloActivo={pantalla}
        seccionUrl={seccionActual.url}
      />
    </section>
  );
}

function FormularioPorRuta() {
  const navigate = useNavigate();
  const { gerencia, seccion, formularioUrl } = useParams();

  const gerenciaKey = gerencia?.toUpperCase();
  const pantalla = pantallasModulo[gerenciaKey];
  const seccionActual = seccionesPorUrl[seccion];
  const formularioSeleccionado = formulariosPorUrl[formularioUrl];

  if (!pantalla) {
    return <Navigate to="/Home" replace />;
  }

  if (!seccionActual) {
    return <Navigate to={`/${pantalla.nombre}/Registro_Actividad`} replace />;
  }

  if (
    seccionActual.id === "formularios-completados" ||
    seccionActual.id === "cierre-acciones"
  ) {
    return (
      <FormulariosCompletados
        moduloActivo={pantalla}
        seccionActual={seccionActual}
      />
    );
  }

  if (!formularioSeleccionado) {
    return <Navigate to={`/${pantalla.nombre}/${seccionActual.url}`} replace />;
  }

  return (
    <Formulario
      formularioSeleccionado={formularioSeleccionado}
      moduloActivo={pantalla}
      onVolver={() => navigate(`/${pantalla.nombre}/${seccionActual.url}`)}
    />
  );
}

function App() {
  return (
    <div className="app">
      <Menu />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />

          <Route path="/Home" element={<Home />} />

          <Route path="/Gestion_Usuario" element={<GestionUsuario />} />

          <Route path="/:gerencia" element={<RedireccionGerencia />} />

          <Route path="/:gerencia/:seccion" element={<PantallaModulo />} />

          <Route
            path="/:gerencia/:seccion/:formularioUrl"
            element={<FormularioPorRuta />}
          />

          <Route path="*" element={<Navigate to="/Home" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;