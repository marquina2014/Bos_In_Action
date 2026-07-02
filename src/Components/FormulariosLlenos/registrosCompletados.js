export const formulariosCompletadosOpciones = [
  {
    id: "MOP_L1",
    nombre: "Registro MOP",
  },
  {
    id: "MIP_L1",
    nombre: "Registro MIP",
  },
  {
    id: "Inspeccion_Lugares_Trabajo_Activo",
    nombre: "Inspección de lugares de trabajo activo",
  },
  {
    id: "Registro_5S",
    nombre: "Registro 5S",
  },
  {
    id: "Sesion_1_a_1",
    nombre: "Sesión 1 a 1",
  },
  {
    id: "Inicio_Trabajo_Seguro",
    nombre: "Inicio Trabajo Seguro",
  },
  {
    id: "RDP",
    nombre: "Resolución de Problemas",
  },
  {
    id: "Identificacion_Oportunidades",
    nombre: "Identificación de Oportunidades",
  },
];

export const columnasPorFormulario = {
  MOP_L1: [
    { campo: "fechaRegistro", titulo: "Fecha de Registro" },
    { campo: "fotografia", titulo: "Fotografía" },
    { campo: "realizadoPor", titulo: "Realizado por" },
    { campo: "estatus", titulo: "Estatus" },
  ],

  MIP_L1: [
    { campo: "fechaRegistro", titulo: "Fecha de Registro" },
    { campo: "fotografia", titulo: "Fotografía" },
    { campo: "realizadoPor", titulo: "Realizado por" },
    { campo: "estatus", titulo: "Estatus" },
  ],

  Inspeccion_Lugares_Trabajo_Activo: [
    { campo: "fechaRegistro", titulo: "Fecha de Registro" },
    { campo: "aplicaRol", titulo: "Aplica Rol" },
    { campo: "superintendencia", titulo: "Superintendencia" },
    { campo: "condicionObservada", titulo: "Condición Observada" },
    { campo: "realizadoPor", titulo: "Realizado por" },
    { campo: "estatus", titulo: "Estatus" },
  ],

  Registro_5S: [
    { campo: "fechaEvaluacion", titulo: "Fecha Evaluación" },
    { campo: "superintendencia", titulo: "Superintendencia" },
    { campo: "puntaje", titulo: "Puntaje 5S" },
    { campo: "realizadoPor", titulo: "Realizado por" },
    { campo: "estatus", titulo: "Estatus" },
  ],

  Sesion_1_a_1: [
    { campo: "fechaSesion", titulo: "Fecha Sesión" },
    { campo: "codigoSapCoachee", titulo: "Código SAP Coachee" },
    { campo: "realizadoPor", titulo: "Realizado por" },
    { campo: "estatus", titulo: "Estatus" },
  ],

  Inicio_Trabajo_Seguro: [
    { campo: "fechaRegistro", titulo: "Fecha de Registro" },
    { campo: "aplicaRol", titulo: "Aplica Rol" },
    { campo: "tipoDocumento", titulo: "Tipo Documento" },
    { campo: "documentoAdjunto", titulo: "Documento Adjunto" },
    { campo: "realizadoPor", titulo: "Realizado por" },
    { campo: "estatus", titulo: "Estatus" },
  ],

  RDP: [
    { campo: "nombreRdp", titulo: "Nombre RDP" },
    { campo: "lider", titulo: "Líder" },
    { campo: "nivel", titulo: "Nivel" },
    { campo: "superintendencia", titulo: "Superintendencia" },
    { campo: "fechaRdp", titulo: "Fecha RDP" },
    { campo: "dimension", titulo: "Dimensión" },
    { campo: "estatus", titulo: "Estatus" },
  ],

  Identificacion_Oportunidades: [
    { campo: "fechaRegistro", titulo: "Fecha de Registro" },
    { campo: "superintendencia", titulo: "Superintendencia" },
    { campo: "oportunidadIdentificada", titulo: "Oportunidad Identificada" },
    { campo: "tipoDesperdicio", titulo: "Tipo Desperdicio" },
    { campo: "realizadoPor", titulo: "Realizado por" },
    { campo: "estatus", titulo: "Estatus" },
  ],
};

export const registrosCompletados = {
  MOP_L1: [
    {
      id: 1,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-01",
      fotografia: "fotografia_mop_001.jpg",
      realizadoPor: "Luis Marquina",
    },
    {
      id: 2,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-02",
      fotografia: "fotografia_mop_002.jpg",
      realizadoPor: "María González",
    },
    {
      id: 3,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-03",
      fotografia: "fotografia_mop_003.jpg",
      realizadoPor: "Carlos Pérez",
    },
  ],

  MIP_L1: [
    {
      id: 1,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-01",
      fotografia: "fotografia_mip_001.jpg",
      realizadoPor: "Luis Marquina",
    },
    {
      id: 2,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-02",
      fotografia: "fotografia_mip_002.jpg",
      realizadoPor: "María González",
    },
    {
      id: 3,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-03",
      fotografia: "fotografia_mip_003.jpg",
      realizadoPor: "Carlos Pérez",
    },
  ],

  Inspeccion_Lugares_Trabajo_Activo: [
    {
      id: 1,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-01",
      aplicaRol: "Sí",
      superintendencia: "Palas y Perforadoras",
      condicionObservada: "Baranda sin tarjeta de inspección visible.",
      realizadoPor: "Luis Marquina",
    },
    {
      id: 2,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-02",
      aplicaRol: "Sí",
      superintendencia: "Palas y Perforadoras",
      condicionObservada: "Zona de tránsito con material acumulado.",
      realizadoPor: "María González",
    },
    {
      id: 3,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-03",
      aplicaRol: "No",
      superintendencia: "Perforadoras",
      condicionObservada: "Se requiere demarcación de área operacional.",
      realizadoPor: "Carlos Pérez",
    },
  ],

  Registro_5S: [
    {
      id: 1,
      gerencia: "GMESM",
      fechaEvaluacion: "2026-07-01",
      superintendencia: "Palas y Perforadoras",
      puntaje: "4.3",
      realizadoPor: "Luis Marquina",
    },
    {
      id: 2,
      gerencia: "GMESM",
      fechaEvaluacion: "2026-07-02",
      superintendencia: "Palas y Perforadoras",
      puntaje: "4.7",
      realizadoPor: "María González",
    },
    {
      id: 3,
      gerencia: "GMESM",
      fechaEvaluacion: "2026-07-03",
      superintendencia: "Perforadoras",
      puntaje: "3.9",
      realizadoPor: "Carlos Pérez",
    },
  ],

  Sesion_1_a_1: [
    {
      id: 1,
      gerencia: "GMESM",
      fechaSesion: "2026-07-01",
      codigoSapCoachee: "SAP00125",
      realizadoPor: "Luis Marquina",
    },
    {
      id: 2,
      gerencia: "GMESM",
      fechaSesion: "2026-07-02",
      codigoSapCoachee: "SAP00136",
      realizadoPor: "María González",
    },
    {
      id: 3,
      gerencia: "GMESM",
      fechaSesion: "2026-07-03",
      codigoSapCoachee: "SAP00148",
      realizadoPor: "Carlos Pérez",
    },
  ],

  Inicio_Trabajo_Seguro: [
    {
      id: 1,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-01",
      aplicaRol: "Sí",
      tipoDocumento: "DAS",
      documentoAdjunto: "das_turno_a.pdf",
      realizadoPor: "Luis Marquina",
    },
    {
      id: 2,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-02",
      aplicaRol: "Sí",
      tipoDocumento: "Charla de Seguridad",
      documentoAdjunto: "charla_seguridad.pdf",
      realizadoPor: "María González",
    },
    {
      id: 3,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-03",
      aplicaRol: "No",
      tipoDocumento: "IS",
      documentoAdjunto: "inicio_seguro.xlsx",
      realizadoPor: "Carlos Pérez",
    },
  ],

  RDP: [
    {
      id: 1,
      gerencia: "GMESM",
      nombreRdp: "Desviación en control operacional",
      lider: "Luis Marquina",
      nivel: "L2",
      superintendencia: "Palas y Perforadoras",
      fechaRdp: "2026-07-01",
      dimension: "Seguridad",
    },
    {
      id: 2,
      gerencia: "GMESM",
      nombreRdp: "Retraso en ejecución de actividad crítica",
      lider: "María González",
      nivel: "L3",
      superintendencia: "Palas y Perforadoras",
      fechaRdp: "2026-07-02",
      dimension: "Producción",
    },
    {
      id: 3,
      gerencia: "GMESM",
      nombreRdp: "Oportunidad en gestión de repuestos",
      lider: "Carlos Pérez",
      nivel: "L4",
      superintendencia: "Perforadoras",
      fechaRdp: "2026-07-03",
      dimension: "Costos",
    },
  ],

  Identificacion_Oportunidades: [
    {
      id: 1,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-01",
      superintendencia: "Palas y Perforadoras",
      oportunidadIdentificada: "Reducir tiempo de espera en cambio de turno.",
      tipoDesperdicio: "Espera",
      realizadoPor: "Luis Marquina",
    },
    {
      id: 2,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-02",
      superintendencia: "Palas y Perforadoras",
      oportunidadIdentificada: "Eliminar traslado innecesario de herramientas.",
      tipoDesperdicio: "Movimiento",
      realizadoPor: "María González",
    },
    {
      id: 3,
      gerencia: "GMESM",
      fechaRegistro: "2026-07-03",
      superintendencia: "Perforadoras",
      oportunidadIdentificada: "Disminuir inventario sin uso en bodega.",
      tipoDesperdicio: "Inventario",
      realizadoPor: "Carlos Pérez",
    },
  ],
};