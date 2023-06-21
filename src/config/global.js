export default {
  global: {
    componenteFormativo: 'Monitoreo de aguas residuales',
    descripcionCurso:
      'La actividad más importante en aguas residuales es realizar procesos de monitoreo de los procedimientos técnicos establecidos para el tratamiento de dicha agua. En este componente, se abordan desde los protocolos de laboratorio requeridos para dicho monitoreo hasta los posibles análisis que deben ser desarrollados de acuerdo con la normatividad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Protocolos de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Normas generales de usos de laboratorios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Materiales para la caracterización de agua residual',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Equipos de laboratorio',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Análisis de muestras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Programas de monitoreo de agua residual',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Normas de calidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ensayos, protocolos y procedimientos',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Análisis de muestras',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [Ideam]. (2007). <em>Demanda bioquímica de oxígeno 5 días, Incubación y Electrometría.</em>',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1IG9iyTerV-OZFm6BiSb2eiknzr_eTlzt/view',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [Ideam]. (2007). <em>Sulfatos en agua por el método nefelométrico.</em>',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1DXe2ENHp_oM0DiJr97OuukQ9N2FL11dX/view',
    },
    {
      tema: 'Protocolos de laboratorio',
      referencia:
        'Ministerio de Desarrollo Económico. (2000). <em>Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000. Sección 2 Título E Tratamiento de aguas residuales.</em> Dirección de Agua Potable y Saneamiento Básico.',
      tipo: 'Documento',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_e_.pdf',
    },
    {
      tema: 'Protocolos de laboratorio',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2018). <em>Manual para el uso del termorreactor ECO 25.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Manual',
      link:
        'https://drive.google.com/file/d/1LiQi4wHYBak4u-AJTFdt-WFDI5hNbJbg/view',
    },
    {
      tema: 'Protocolos de laboratorio',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2017). <em>Manual para uso del equipo cabina de extracción control superior CS-EO1200.</em> Centro de Gestión Industrial [CGI].',
      tipo: 'Manual',
      link:
        'https://drive.google.com/file/d/1TnAnTBl5aKnKRhlXMftwDCnqORhJcN3C/view',
    },
    {
      tema: 'Protocolos de laboratorio',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2017). <em>Manual para uso del equipo MRC balanza de precisión BWLC 1-A2-C2.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Manual',
      link:
        'https://drive.google.com/file/d/1OxTCOISVXz0hdS1KeR2WCzZHJyoNAMh-/view',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2014). <em>Práctica de laboratorio Determinación de potenciometría.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1956-RwbKHGYV-eJTh5o2S7-HEq_Kv5lM/view',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2014). <em>Práctica de laboratorio Determinación de sólidos totales, volátiles y fijos.</em> Centro de Gestión Industrial[CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1MOTA7hai-dgavCrOmLI-FzrxhEyj5m7g/view?usp=sharing',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2014). <em>Práctica de laboratorio Procedimiento para la determinación de alcalinidad.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1HSfoZD47M34I5ASuCfGUpX6rwaOaamkl/view?usp=sharing',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2014). <em>Procedimiento para la determinación de cloruros en agua.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1uMElBxpFGFYyI4r5iMIm09XeR0j2cIUX/view?usp=sharing',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2014). <em>Instructivo para la determinación de dureza total.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1svpyC8Yt7Nl15AuA6Myfh_kTob5Q2T6h/view?usp=sharing',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2014). <em>Procedimiento para la determinación de oxígeno disuelto.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1qPphpj4faPjfAgXFUvNGkUp5P0YDf07_/view?usp=sharing',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2014). <em>Determinación de la demanda química de oxígeno Método espectrofotométrico, reflujo cerrado.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1sVB5gBlogSSEmEfMuujBITpjFBd8V7vv/view?usp=sharing',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. (2014). <em>Instructivo para el ensayo de test de jarras.</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1TrMQ7MbGXhu6yZ1kzs2kgDbcxvdY9ku7/view?usp=sharing',
    },
    {
      tema: 'Análisis de muestras',
      referencia:
        'Servicio Nacional de Aprendizaje [SENA].  (2020). <em>Práctica de laboratorio. Determinación de coliformes y e.coli  en aguas residuales mediante  tubos de fermentación (nmp).</em> Centro de Gestión Industrial [CGI]. ',
      tipo: 'Práctica de laboratorio',
      link:
        'https://drive.google.com/file/d/1KfeBXbPTDmNU7uC4YsOPGnFAYQh6aRcg/view?usp=sharing',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'examen del agua, agua residual o lodos efectuado por un laboratorio (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Bacteria',
      significado:
        'grupo de organismos microscópicos unicelulares, rígidos, carentes de clorofila, que desempeñan una serie de procesos de tratamiento que incluyen oxidación biológica, fermentaciones, digestión, nitrificación y desnitrificación (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Biodegradación',
      significado:
        'degradación de la materia orgánica por acción de microorganismos sobre el suelo, aire, cuerpos de agua receptores o procesos de tratamiento de aguas residuales (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Coliformes',
      significado:
        'bacterias gramnegativas, de forma alargada, capaces de fermentar lactosa con producción de gas a la temperatura de 35 o 37 ºC (coliformes totales). Aquellas que tienen las mismas propiedades a la temperatura de 44 o 44.5 ºC se denominan coliformes fecales. Se utilizan como indicadores de contaminación biológica (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Demanda Bioquímica de Oxígeno (DBO) o Demanda de oxígeno',
      significado:
        'cantidad de oxígeno usado en la estabilización de la materia orgánica carbonácea y nitrogenada por acción de los microorganismos, en condiciones de tiempo y temperatura especificados (generalmente cinco días y 20 ºC). Mide indirectamente el contenido de materia orgánica biodegradable (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Demanda Química de Oxígeno (DQO)',
      significado:
        'medida de la cantidad de oxígeno requerido para oxidación química de la materia orgánica del agua residual, usando como oxidantes sales inorgánicas de permanganato o dicromato en un ambiente ácido y a altas temperaturas (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Oxígeno disuelto',
      significado:
        'concentración de oxígeno medida en un líquido por debajo de la saturación. Normalmente se expresa en mg/l (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Potencial de Hidrógeno (pH)',
      significado:
        'logaritmo, con signo negativo, de la concentración de iones hidrógeno, en moles por litro (Ministerio de Desarrollo Económico, 2000).',
    },
    {
      termino: 'Vertimiento puntual directo al recurso hídrico',
      significado:
        'es aquel vertimiento realizado en un punto fijo y directamente al recurso hídrico. (Decreto 1076 de 2015 Titulo 9, Capítulo 7.)',
    },
    {
      termino: 'Vertimiento puntual indirecto al recurso hídrico',
      significado:
        'es aquel vertimiento que se realiza desde un punto fijo a través de un canal natural o artificial o de cualquier medio de conducción o transporte a un cuerpo de agua superficial. (Decreto 1076 de 2015 Título 9, Capítulo 7).',
    },
  ],
  referencias: [
    {
      referencia:
        'Hach. (2017). <em>Manual del usuario Medidor portátil HQd.</em>',
      link: 'https://es.hach.com/asset-get.download.jsa?id=25593608939',
    },
    {
      referencia: 'Hach. (2017). Manual del usuario 2100Q y 2100Qis.',
      link: 'https://www.hach.com/asset-get.download.jsa?id=7648381377',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2000). <em>Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000. Sección 2 Título E Tratamiento de aguas residuales.</em> Dirección de Agua Potable y Saneamiento Básico',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_e_.pdf ',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente (2002). <em>Guía ambiental formulación de planes de pretratamiento de efluentes industriales.</em>',
      link: 'http://hdl.handle.net/20.500.12324/18912',
    },
    {
      referencia:
        'Resolución 0631 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los parámetros y los valores límites máximos permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones. Marzo 17 de 2015. D.O. No. 49.486.',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Resolucion-631-2015.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. 2014. <em>Práctica de laboratorio determinación de sólidos totales, volátiles y fijos.</em> Centro de Gestión Industrial [CGI].',
      link:
        'https://drive.google.com/file/d/1MOTA7hai-dgavCrOmLI-FzrxhEyj5m7g/view?usp=sharing',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. 2014. <em>Práctica de laboratorio determinación de alcalinidad.</em> Centro de Gestión Industrial [CGI]. ',
      link:
        'https://drive.google.com/file/d/1HSfoZD47M34I5ASuCfGUpX6rwaOaamkl/view?usp=sharing',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. 2014. <em>Determinación de cloruros.</em> Centro de Gestión Industrial [CGI]. ',
      link:
        'https://drive.google.com/file/d/1uMElBxpFGFYyI4r5iMIm09XeR0j2cIUX/view?usp=sharing',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. 2014. <em>Determinación de dureza total.</em> Centro de Gestión Industrial [CGI]. ',
      link:
        'https://drive.google.com/file/d/1svpyC8Yt7Nl15AuA6Myfh_kTob5Q2T6h/view?usp=sharing',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. 2007. <em>Sulfatos en agua por el método nefelométrico.</em>',
      link:
        'https://drive.google.com/file/d/1DXe2ENHp_oM0DiJr97OuukQ9N2FL11dX/view?usp=sharing',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. 2014. <em>Determinación de oxígeno disuelto.</em> Centro de Gestión Industrial [CGI]. ',
      link:
        'https://drive.google.com/file/d/1qPphpj4faPjfAgXFUvNGkUp5P0YDf07_/view?usp=sharing',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. 2014. <em>Determinación de la demanda química de oxígeno método espectrofotométrico, reflujo cerrado.</em> Centro de Gestión Industrial [CGI]. ',
      link:
        'https://drive.google.com/file/d/1sVB5gBlogSSEmEfMuujBITpjFBd8V7vv/view?usp=sharing',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales [IDEAM]. 2007. <em>Demanda bioquímica de oxígeno 5 días.</em>',
      link:
        'https://drive.google.com/file/d/1IG9iyTerV-OZFm6BiSb2eiknzr_eTlzt/view?usp=sharing',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA]. 2014. <em>Instructivo para la determinación del ensayo test de jarras.</em> Centro de Gestión Industrial [CGI]. ',
      link:
        'https://drive.google.com/file/d/1TrMQ7MbGXhu6yZ1kzs2kgDbcxvdY9ku7/view?usp=sharing',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje [SENA].  2020. <em>Práctica de laboratorio determinación de coliformes y e.coli  en aguas residuales mediante tubos de fermentación (NMP).</em> Centro de Gestión Industrial [CGI]. ',
      link:
        'https://drive.google.com/file/d/1KfeBXbPTDmNU7uC4YsOPGnFAYQh6aRcg/view?usp=sharing',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesor Metodológico',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Liliana Victoria Morales Guadrón',
          cargo: 'Responsable Línea de Producción Distrito Capital',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Jesús Ricardo Arias Munévar',
          cargo: 'Instructora ambiental',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sergio Arturo Medina Castillo',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Adriana Lozano Zapata',
          cargo: 'Correctora de Estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora metodológica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Encargado Equipo Diseño Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
