<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Protocolos de laboratorio
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema1/img-1.svg" style="width: 85px" data-aos="fade-right")
      p.col-sm.ps-sm-4.mb-0(data-aos="fade-left") Monitorear las aguas residuales es un proceso que involucra diversos aspectos y fases, entre las cuales se destacan los protocolos de laboratorio. Estos procedimientos deben ser  implementados con el fin de garantizar la ejecución de todas las acciones necesarias para obtener resultados en cuanto a las características de las aguas residuales, y que permitan la toma de decisiones.
    p.mb-5(data-aos="fade-right") A continuación, se hace una descripción de tres elementos importantes en el seguimiento y ejecución de los protocolos de laboratorio:

    .titulo-segundo.color-acento-botones
      h2#t_1_1 1.1 Normas generales de usos de laboratorios
    
    p.mb-5(data-aos="fade-right") Existen unas normas generales que deben ser tenidas en cuenta al momento de realizar cualquier ensayo o procedimiento dentro de un laboratorio, revíselas a continuación: 

    .tarjeta.p-4(style="background-color: #DFEAF3")
      SlyderA(tipo="b")
        .row.justify-content-center.my-lg-4.col-lg-11.mx-auto.align-items-start
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1(data-aos="fade-right")
            h3 Inducción a la seguridad en los laboratorios
            p Reconocer y comprender las normas de seguridad en un laboratorio es crucial debido a los riesgos asociados con sustancias químicas y equipos. Aunque las normas varían según el laboratorio, es fundamental conocer las instalaciones y la ubicación de dispositivos de seguridad como salidas de emergencia, rutas de evacuación, extintores, botiquines de primeros auxilios, duchas de emergencia y fuentes de lavaojos. Estos conceptos son mínimos para actuar adecuadamente y responder a situaciones de emergencia en cualquier espacio de trabajo.

          .order-1.order-lg-2.mb-4.mb-lg-auto.col-lg-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/sla-1.png' alt='Texto que describa la imagen' style="max-width: 505px" data-aos="fade-left")
        
        .row.justify-content-center.my-lg-4.col-lg-11.mx-auto.align-items-start
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h3 Uso de elementos de protección personal
            p Es obligatorio que todas las personas que trabajen en el laboratorio usen elementos de protección personal. Estos incluyen bata blanca, gafas de seguridad, guantes de nitrilo o neopreno, tapabocas y cofia. La bata debe ser de algodón, dril o gabardina, de color blanco, con mangas largas y cierre de botones. El uso de estos elementos garantiza la seguridad durante las actividades en el laboratorio y la toma de muestras.

          .order-1.order-lg-2.mb-4.mb-lg-auto.col-lg-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/sla-2.png' alt='Texto que describa la imagen' style="max-width: 505px")
        
        .row.justify-content-center.my-lg-4.col-lg-11.mx-auto.align-items-start
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h3 Normas de protección personal
            ul
              li.d-flex
                span.decorador-li
                p <b>Protección de los ojos:</b>  requiere el uso constante de gafas de seguridad, incluso cuando no se realicen prácticas. Evitar el uso de lentes de contacto.
              li.d-flex
                span.decorador-li
                p <b>Protección de las manos:</b> obligatorio usar guantes adecuados y limpios al manipular sustancias corrosivas, irritantes o tóxicas.
              li.d-flex
                span.decorador-li
                p <b>Protección de las vías respiratorias:</b> cuando se manipulen compuestos volátiles, tóxicos o irritantes, se deben utilizar equipos de protección respiratoria homologados.
              li.d-flex
                span.decorador-li
                p <b>Protección del cuerpo:</b> se recomienda recoger el cabello largo y usar cofia. Ingresar al laboratorio con ropa larga, zapatos cerrados y bajos, y medias adecuadas. No se deben llevar joyas, prendas sueltas o elementos que representen riesgos durante la práctica.

          .order-1.order-lg-2.mb-4.mb-lg-auto.col-lg-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/sla-3.png' alt='Texto que describa la imagen' style="max-width: 505px")
        
        .row.justify-content-center.my-lg-4.col-lg-11.mx-auto.align-items-start
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h3 Solicitud de materiales y reactivos
            p La preparación de los ensayos de laboratorio es una fase importante y debe hacerse de manera previa a la solicitud de materiales y reactivos. Se recomienda que el usuario verifique el procedimiento interno del laboratorio que utilizará y siga los pasos correspondientes para asegurarse de tener todo preparado antes de iniciar los ensayos o prácticas.

          .order-1.order-lg-2.mb-4.mb-lg-auto.col-lg-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/sla-4.png' alt='Texto que describa la imagen' style="max-width: 505px")
        
        .row.justify-content-center.my-lg-4.col-lg-11.mx-auto.align-items-start
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h3 Solicitud de equipos e instrumentos de análisis
            p Al igual que los materiales y reactivos, la solicitud de equipos e instrumentos de análisis debe hacerse con anterioridad, con el fin de realizar los procedimientos de calibración y verificación de funcionamiento de los mismos.

          .order-1.order-lg-2.mb-4.mb-lg-auto.col-lg-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/sla-5.png' alt='Texto que describa la imagen' style="max-width: 505px")
        
        .row.justify-content-center.my-lg-4.col-lg-11.mx-auto.align-items-start
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h3 Manejo y disposición de los residuos químicos generados
            p Se deben recolectar y clasificar los residuos químicos generados en el laboratorio, utilizando vasos de precipitados identificados. Al finalizar, se depositan en contenedores adecuados. Los residuos deben ser transportados en neveras cerradas y considerando su compatibilidad. Los residuos sólidos deben ir en contenedores con bolsa roja. En caso de material cortopunzante roto, se debe informar al técnico de laboratorio. El manejo de los residuos químicos varía, por lo que se recomienda consultar el procedimiento específico del laboratorio.

          .order-1.order-lg-2.mb-4.mb-lg-auto.col-lg-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/sla-6.png' alt='Texto que describa la imagen' style="max-width: 505px")
        
        .row.justify-content-center.my-lg-4.col-lg-11.mx-auto.align-items-start
          .col-lg-6.mb-4.mb-md-0.order-2.order-lg-1
            h3 Manejo de muestras
            p Cuando se requiera dejar muestras en la estufa, mufla o desecador, estas deben estar debidamente identificadas. Asimismo, se recomienda informar el propósito de dejar las muestras en el laboratorio y la duración estimada de su permanencia.

          .order-1.order-lg-2.mb-4.mb-lg-auto.col-lg-6
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/sla-7.png' alt='Texto que describa la imagen' style="max-width: 505px")

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_2 1.2 Materiales para la caracterización de agua residual

    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-lg-auto.col-lg-4.mx-auto(src='@/assets/curso/temas/tema1/img-2.png' alt='Texto que describa la imagen' style="max-width: 400px" data-aos="fade-right")
      p.mb-0.col-lg-8.ps-md-4(data-aos="fade-left") Para realizar la medición de los parámetros fisicoquímicos y biológicos de las aguas residuales, es necesario contar con una serie de materiales que permitan la operación dentro del laboratorio. Existen diferentes clasificaciones, sin embargo, la más utilizada es de acuerdo con el material de fabricación. 
        br
        br
        |Cuando se tienen materiales de laboratorio, se busca que estos sean inertes, para que no afecten las mediciones obtenidas a partir de los métodos estandarizados, al tiempo que sean resistentes, para que tengan una vida útil prolongada. A continuación, se estudian algunos de los materiales más utilizados.
    
    .titulo-edit.mb-5(data-aos="fade-left")
      h3 Materiales de vidrio
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema1/img-3.svg" style="width: 85px" data-aos="fade-right")
      p.col-sm.ps-sm-4.mb-0(data-aos="fade-left") Son muy utilizados debido a que tienen una buena resistencia a la temperatura; adicionalmente, se pueden obtener formas, a partir de la fundición, práctica usada en el desarrollo de los laboratorios; pueden tener desprendimientos laterales, se pueden unir piezas de vidrio mediante la fundición, su transparencia permite observar el interior, entre otras ventajas. Algunos de los más comunes son:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-4.png' style="max-width: 191px" alt='Vaso de precipitado')
        h4.text-center Vaso de precipitado
        p.text-center Es un depósito cilíndrico que se usa principalmente para calentar, disolver y preparar sustancias. En este material también se pueden trasvasar y medir volúmenes de forma básica, ya que normalmente cuenta con líneas que indican los mililitros que contiene.
      
      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-5.png' style="max-width: 191px" alt='Tubo de ensayo')
        h4.text-center Tubo de ensayo
        p.text-center Es un tubo cilíndrico pequeño, que tiene un extremo abierto y el otro cerrado, la parte cerrada se encuentra redondeada; se le conoce como tubo de ensayo debido a que en él se hacen las reacciones químicas a pequeña escala para determinar comportamientos; se puede utilizar tanto para líquidos como para sólidos.
      
      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-6.png' style="max-width: 191px" alt='Matraz aforado')
        h4.text-center Matraz aforado
        p.text-center Es un material diseñado para medir volúmenes con gran precisión, su base es plana y tiene un cuello estrecho; cuando los líquidos ingresan al matraz y alcanzan el nivel del cuello, este estrechamiento permite tomar con mejor precisión la medida del volumen.

      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-7.png' style="max-width: 191px" alt='Vidrio de reloj')
        h4.text-center Vidrio de reloj
        p.text-center Es un vidrio en forma de reloj, con curvatura cóncava, que se utiliza normalmente para pesar sustancias sólidas; también, en algunos casos, es utilizado para tapar muestras de forma no hermética, simplemente para evitar que le caiga polvo o alguna otra impureza.

      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-8
            img.mx-auto(src='@/assets/curso/temas/tema1/img-8.png' style="max-width: 191px" alt='Probeta')
        h4.text-center Probeta
        p.text-center Es un material cilíndrico, con medidas a lo largo de su cuerpo que permite observar el volumen del líquido contenido en él; en la parte inferior, es cerrado, con base plana, y en la parte superior, es abierto, con un pico que permite la transferencia fácil y rápida de los líquidos que allí se encuentran.

    .titulo-edit.mb-5(data-aos="fade-left")
      h3 Materiales de plástico

    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema1/img-9.svg" style="width: 85px" data-aos="fade-right")
      p.col-sm.ps-sm-4.mb-0(data-aos="fade-left") El plástico es un material ideal para la fabricación de material de laboratorio por su alta capacidad de resistencia a la corrosividad, en él se pueden hacer soluciones, tanto ácidas como básicas, sin que se altere su forma ni su calidad. Adicionalmente, el plástico tiene un peso ligero, lo que permite que sea transportado con mayor facilidad y una mejor resistencia frente a los impactos comparado con el vidrio, lo que minimiza el gasto por material roto dentro del laboratorio.

    p.mb-5(data-aos="fade-right") En general, la mayoría de los materiales que se fabrican en vidrio también se obtienen en plástico, por las propiedades antes mencionadas. Otros que se pueden encontrar en el laboratorio se estudiarán a continuación.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-6.col-xl-4.mb-4.mb-xl-0(style="max-width: 400px")
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="min-height: 380px; background-color: #C0D5E9")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta.p-4.p-xl-5
              img.mb-4(src="@/assets/curso/temas/tema1/img-10_sub.svg" style="width: 52px")
              h3.mb-3 Pipeta
              p Es un tubo cilíndrico graduado con punta cónica para medir volúmenes precisos. Se utiliza generando vacío mediante succión para que los líquidos entren en ella y sean medidos con precisión.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-10.png')})`}")

      .col-md-6.col-xl-4.mb-4.mb-xl-0(style="max-width: 400px")
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="min-height: 380px; background-color: #C0D5E9")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-11.png')})`}")
            .tarjeta.p-4.p-xl-5
              img.mb-4(src="@/assets/curso/temas/tema1/img-11_sub.svg" style="width: 52px")
              h3.mb-3 Jeringas
              p Son tubos cilíndricos con un émbolo que permite la generación de vacío para la succión de líquido y la posterior eyección.

      .col-md-6.col-xl-4.mb-4.mb-sm-0(style="max-width: 400px")
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="min-height: 380px; background-color: #C0D5E9")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-12.png')})`}")
            .tarjeta.p-4.p-xl-5
              img.mb-4(src="@/assets/curso/temas/tema1/img-12_sub.svg" style="width: 52px")
              h3.mb-3 Jarras
              p Son recipientes que permiten contener mayores volúmenes de líquidos, cuentan con base plana y un pico en la parte superior que permite el trasvase con mayor facilidad.

    .titulo-edit.mb-5(data-aos="fade-left")
      h3 Materiales de porcelana
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema1/img-13.svg" style="width: 85px" data-aos="fade-right")
      p.col-sm.ps-sm-4.mb-0(data-aos="fade-left") La porcelana es un tipo de material que encuentra una amplia aplicación en las prácticas de determinación de parámetros fisicoquímicos que requieren resistencia a altas temperaturas (superiores a 500 °C). Su excepcional resistencia térmica la convierte en una opción preferida cuando se necesitan soportar condiciones extremas. A continuación, se examinarán algunos de los materiales de porcelana más utilizados en este contexto.

    .row.mb-5
      .col-12.col-lg.mb-4(data-aos="fade-right")
        .tarjeta.p-4.color-primario
          .row.justify-content-center.mb-4.mb-md-5
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema1/img-14.png' style="max-width: 146px" alt='Vaso de precipitado')
          h3 Crisol:
          p Es un contenedor cóncavo, normalmente utilizado para la determinación de análisis gravimétricos, muy resistente a altas temperaturas; en este material, se pueden fundir, mezclar o calcinar diferentes compuestos.
      
      .col-12.col-lg.mb-4(data-aos="fade-left")
        .tarjeta.p-4.color-acento-contenido
          .row.justify-content-center.mb-4.mb-md-5
            .col-8
              img.mx-auto(src='@/assets/curso/temas/tema1/img-15.png' style="max-width: 146px" alt='Vaso de precipitado')
          h3 Morteros: 
          p son contenedores cóncavos con base plana, diseñados para moler y triturar, cuentan con gran resistencia mecánica, por lo que se pueden pulverizar sólidos sobre él sin la preocupación de una ruptura.

    .titulo-edit.mb-5(data-aos="fade-left")
      h3 Materiales de metal
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema1/img-16.svg" style="width: 85px" data-aos="fade-right")
      p.col-sm.ps-sm-4.mb-0(data-aos="fade-left") En el entorno del laboratorio, el metal se destaca como un material ampliamente utilizado debido a su resistencia y durabilidad, es un material utilizado en las herramientas que se encuentran en el laboratorio. Algunas de las piezas principales que se pueden encontrar se estudiarán a continuación.
    
    .row.justify-content-center
      .col-lg-4
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-17.png" style="width: 400px" data-aos="fade-right")
      .col-lg-8.ps-lg-4
        .tarjeta.p-4.row.align-items-center.mb-4(style="background-color: #FFE2C0" data-aos="fade-left")
          .col-md.order-2.order-md-1
            h3 Pinza
            p.mb-0 Herramienta de dos piezas metálicas, unidas entre sí por un tornillo que permite la graduación de la distancia entre ellas, se utiliza para sujetar diferentes materiales de acuerdo con las necesidades de la práctica.
          img.mb-4.my-md-auto.order-1.order-md-2(src="@/assets/curso/temas/tema1/img-18.svg" style="width: 85px")

        .tarjeta.p-4.row.align-items-center(style="background-color: #FFE2C0" data-aos="fade-left")
          .col-md.order-2.order-md-1
            h3 Soporte universal
            p.mb-0 Es una herramienta que permite sujetar diferentes montajes de materiales y accesorios para la realización de ensayos fisicoquímicos, está compuesto por una base de hierro pesada y de forma rectangular, que da soporte, y una varilla vertical que sirve como columna de los montajes; de esta varilla, se sujetan pinzas, nueces y otros accesorios.
          img.mb-4.my-md-auto.order-1.order-md-2(src="@/assets/curso/temas/tema1/img-19.svg" style="width: 85px")

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_3 1.3 Equipos de laboratorio

    p.mb-5(data-aos="fade-right") La determinación de los parámetros fisicoquímicos establecidos en la Resolución 0631 de 2015, exige el uso de equipos de laboratorio especializados en técnicas de medición. A continuación, se estudiará algunos de los más utilizados.

    .titulo-edit.mb-5(data-aos="fade-left")
      h3 Multiparámetros
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema1/img-20.svg" style="width: 85px" data-aos="fade-right")
      p.col-sm.ps-sm-4.mb-0(data-aos="fade-left") Los medidores portátiles, o multiparámetros, son equipos que se usan con sondas digitales para medir diversos parámetros en agua. El medidor reconoce el tipo de sonda que se le conecta. Los datos se pueden guardar y transferir a una impresora, PC o dispositivo de almacenamiento USB. Entre los parámetros más comunes que suelen medir a través de las sondas de multiparámetros, se encuentran el pH, la conductividad, la temperatura y el oxígeno disuelto.

    .row.justify-content-center.p-4.py-lg-5.mb-5(style="background-color: #FFECD5")
      .col-lg-4
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-21.svg" style="width: 400px" data-aos="fade-right")
      .col-lg-8.ps-lg-4
        p.mb-4(data-aos="fade-right") Los medidores del multiparámetro tienen dos (2) conectores de sonda, con las siguientes características:
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Reconocimiento automático de sonda, incluyendo número de serie.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Datos de calibración almacenados en la sonda.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Métodos para el cumplimiento normativo y las buenas prácticas de laboratorio.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Opciones de seguridad.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Registro de datos en tiempo real mediante conexión USB.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Almacenamiento de datos internos de 500 resultados.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Conectividad USB con PC, impresora, dispositivo de almacenamiento interno, teclado.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | ID de muestra e ID de operador para la trazabilidad de los datos.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Alimentación con pilas alcalinas AA o de hidruro metálico de níquel recargables o adaptador de CA.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Apagado automático ajustable para una mayor duración de las pilas.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | IP67 (sumergible a 1 metro, durante 30 minutos, excluyendo la carcasa de las pilas. Compartimento de las pilas sumergible a 0,6 metros durante 15 segundos).

    .row.justify-content-center.mb-5
      .col-lg-8.pe-lg-4.order-2.order-lg-1
        p(data-aos="fade-right") Para conectar las sondas al multiparámetro, de acuerdo con la medición que se quiere realizar, se debe asegurar que la pantalla muestre la fecha y hora actuales. Se debe verificar que el multiparámetro esté encendido y funcionando correctamente. En caso de que esté apagado, es recomendable encenderlo y esperar a que se inicialice.
          br
          br
          |Se debe observar la pantalla del multiparámetro para asegurarse de que muestra la fecha y hora correctas. En caso de que no sea así, se recomienda consultar el manual del dispositivo para ajustar la configuración de fecha y hora.
        .cajon.color-acento-contenido.p-4.px-lg-5
          p.mb-0(data-aos="fade-left") <em><b>Nota:</b></em> El sello de tiempo de las sondas se fija cuando se conecta por primera vez al medidor. Este sello de tiempo hace posible registrar la historia de la sonda y el tiempo en que se hacen mediciones.
      .col-lg-4.order-1.order-lg-2
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-22.png" style="width: 400px" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") La siguiente figura destaca tres elementos clave: <b>el puerto de conexión de la sonda (número 1), el puerto del adaptador USB/CC (número 2) y el puerto de conexión de la sonda (número 3).</b> Estos puertos permiten una conexión rápida y sencilla de las sondas correspondientes al multiparámetro: ver figura 1

    .titulo-sexto.color-acento-contenido.d-block
      h5 Figura 1
      span.mb-0 Conexión de sondas en multiparámetro
    .p-3.mb-1(style="background-color: #DBEFFC")
      .row.col-xl-10.mx-auto.align-items-center
        .col-lg-4.mb-4.my-lg-auto
          .decorador-img-1(data-aos="fade-right")
            p.mb-0 <b>1.</b> Puerto de conexión de la sonda (sólo HQ40d).
          .decorador-img-1(data-aos="fade-right")
            p.mb-0 <b>2.</b> Puerto del adaptador USB/CC.
          .decorador-img-1(data-aos="fade-right")
            p.mb-0 <b>3.</b> Puerto de conexión de la sonda.
        .col-lg-8.ps-lg-4
          img.mb-4.mb-lg-auto.mx-auto.mx-lg-0(src="@/assets/curso/temas/tema1/img-23.svg" style="width: 570px" data-aos="fade-left")
    p.px-3.py-2.mb-5(style="background-color: #EFEFEF") <b>Nota.</b> Tomado de Hach (2017, p. 12).

    p.mb-5(data-aos="fade-right") El teclado del multiparámetro es una herramienta fundamental que permite una interacción fácil y eficiente con el dispositivo. A continuación, se presenta una breve descripción de las diferentes teclas y funciones que ofrece:

    .titulo-sexto.color-acento-contenido.d-block
      h5 Figura 2
      span.mb-0 Teclas del multiparámetro.
    .p-3.p-lg-4.mb-1(style="background-color: #DBEFFC")
      .row.align-items-center
        .col-lg-6.mb-4.mb-lg-auto
          table.tabla-edit
            tr
              td(data-aos="fade-right") <b>1 ON/OFF:</b> encendido o apagado del medidor.
            tr
              td(data-aos="fade-right") <b>2 ID DE USUARIO:</b> datos asociados con una persona.
            tr
              td(data-aos="fade-right") <b>3 ILUMINACIÓN:</b> iluminación de la pantalla de visualización.
            tr
              td(data-aos="fade-right") <b>4 ID MUESTRA MANUAL:</b> datos asociados con una ubicación de muestra.
            tr
              td(data-aos="fade-right") <b>5 TECLA AZUL/IZQUIERDA:</b> selección de opciones de menú.
            tr
              td(data-aos="fade-right") <b>6 TECLAS ARRIBA y ABAJO:</b> desplazamiento por los menús, introducción de números y letras o cambio de la pantalla de visualización de lecturas.
            tr
              td(data-aos="fade-right") <b>7 TECLA VERDE/DERECHA:</b> selección de opciones de menú.
            tr
              td(data-aos="fade-right") <b>8 REGISTRO DE DATOS:</b> para abrir o transferir datos almacenados.
            tr
              td(data-aos="fade-right") <b>9 OPCIONES DEL MEDIDOR:</b> cambio de la configuración, ejecución de comprobaciones estándar, visualización de información del medidor.
        .col-lg-6.ps-lg-4
          img.mb-4.mb-lg-auto.mx-auto.mx-lg-0(src="@/assets/curso/temas/tema1/img-24.svg" style="width: 523px" data-aos="fade-left")
    p.px-3.py-2.mb-5(style="background-color: #EFEFEF") <b>Nota.</b> Tomado de Hach (2017, p. 9).

    p.mb-5(data-aos="fade-right") Una vez las sondas están correctamente conectadas, la pantalla del medidor muestra la última concentración medida, unidades, temperatura, el estado de calibración, ID del operador, ID de la muestra, la fecha y la hora, como se muestra en la figura 3: 

    .titulo-sexto.color-acento-contenido.d-block
      h5 Figura 3
      span.mb-0 Pantalla multiparámetros
    .p-3.mb-1(style="background-color: #DBEFFC")
      .row.align-items-center.col-xl-10.mx-auto
        .col-lg-5.mb-4.mb-lg-auto
          table.tabla-edit
            tr
              td.fw-bold(data-aos="fade-right") 1 Indicador del estado de calibración.
            tr
              td.fw-bold(data-aos="fade-right") 2 Tipo de sonda IntelliCAL e indicador de puerto.
            tr
              td.fw-bold(data-aos="fade-right") 3 Unidad de medición principal.
            tr
              td.fw-bold(data-aos="fade-right") 4 Estado de la batería o fuente de alimentación.
            tr
              td.fw-bold(data-aos="fade-right") 5 Temperatura de la muestra (ºC o ºF).
            tr
              td.fw-bold(data-aos="fade-right") 6 Unidad de medición secundaria.
            tr
              td.fw-bold(data-aos="fade-right") 7 Unidades terciarias (para algunas sondas).
            tr
              td.fw-bold(data-aos="fade-right") 8 Hora.
            tr
              td.fw-bold(data-aos="fade-right") 9 Fecha.
            tr
              td.fw-bold(data-aos="fade-right") 10 Ícono de tamaño de la pantalla.
            tr
              td.fw-bold(data-aos="fade-right") 11 Identificación de muestra y operador.
            tr
              td.fw-bold(data-aos="fade-right") 12 Indicador de estabilidad o bloqueo de pantalla.
        .col-lg-7.px-0
          img.mb-4.mb-lg-auto.mx-auto.mx-lg-0(src="@/assets/curso/temas/tema1/img-25.svg" style="width: 610px" data-aos="fade-left")
    p.px-3.py-2.mb-5(style="background-color: #EFEFEF") <b>Nota.</b> Tomada de Hach (2017, p.10).

    p.mb-5(data-aos="fade-right") Cada sonda requiere de una calibración específica; por ejemplo, el pH se hace mediante una curva de calibración con soluciones buffer de referencia a 4, 7 y 10; la sonda de oxígeno disuelto se calibra con una muestra de agua agitada; y la sonda de conductividad se hace con una solución estándar de cloruro de potasio.

    .titulo-edit.mb-5(data-aos="fade-left")
      h3 Test de jarras

    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema1/img-26.svg" style="width: 85px" data-aos="fade-right")
      p.col-sm.ps-sm-4.mb-0(data-aos="fade-left") Este equipo sirve para la determinación de los agentes floculantes para lograr la sedimentación, en el diseño de mezclas para el tratamiento de agua potable, evaluación de la eficiencia, un absorbente sobre agentes tóxicos, para optimizar la adición de coagulantes y polielectrolitos para el tratamiento de aguas residuales y potables, es ideal para dosificación de mezclas y excelente para pruebas de campo por su poco peso.

    .row.justify-content-center.mb-5
      .col-lg-4
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-27.png" style="width: 400px" data-aos="fade-right")
      .col-lg-8.ps-lg-3
        p.mb-4 El test de jarras es un equipo que ofrece una serie de características y funcionalidades destacadas. A continuación, se detallan sus principales aspectos:
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Control de velocidad tipo P.I.D lazo cerrado.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Transmisión de movimiento por piñón, igual velocidad en todas las aspas.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Programación manual y automática de muy fácil operación, de baja a alta velocidad y viceversa.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Visualización de velocidad en LCD, control digital por teclado.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Nivel de presión +- 1 r.p.m.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Ciclo de trabajo programable (0-99 minutos, 59 seg) y alarma de terminación ciclo.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Lámpara fluorescente de 60 watts.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Altura libre para vaso de prueba 22 cm.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Aspas de acero inoxidable, altura fácil de graduar.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Estructura construida en poliestireno de 1⁄4, lo que le permite tener alta resistencia mecánica y térmica.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Línea de voltaje 120 AC, fusible de 1,5 amp.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | Excelente para pruebas de campo por su poco peso de tan solo 9 kg.
          li.d-flex
            i.fas.fa-check(data-aos="fade-right")
            | No contiene partes que se puedan oxidar, ideal para ambientes cálidos y húmedos.
          
    .row.justify-content-center.mb-5(style="background-color: #FFECD5; margin: 0 -3rem; padding: 0 2.5rem")
      .col-lg-8.pt-lg-4.order-2.order-lg-1(data-aos="fade-right")
        p.fw-bold.mb-4 Para operar el test de jarras, es importante tener en cuenta las siguientes recomendaciones:
        p La máquina funciona con corriente eléctrica. La operación incorrecta podría provocar una descarga eléctrica, electrocución o una explosión.

        p El equipo está diseñado para funcionar con fuentes de alimentación de 115V / 60Hz. La conexión de otras fuentes de alimentación puede dañar la máquina. Es importante asegurarse de que la fuente de alimentación disponible coincida con los requisitos del dispositivo. Los motores no están protegidos contra explosiones.

        p Siempre es necesario revisar el cableado eléctrico, las conexiones sueltas y verificar que el cableado no esté pellizcado o deshilachado.

        p Al utilizar la máquina, es recomendable un enchufe de tres clavijas, que garantice la correcta conexión a tierra. Además, es importante asegurarse de que el cable se encuentre donde nadie pueda tropezar o enredarse.

        p Siempre es necesario desconectar y bloquear la fuente de alimentación antes de realizar el mantenimiento y las reparaciones.

        p Al operar o reparar esta máquina, es importante utilizar gafas de seguridad como medida de protección.
      .col-lg-4.order-1.order-lg-2
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-28.svg" style="width: 400px" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") Estas medidas de seguridad deben seguirse rigurosamente para garantizar la integridad del operador y prevenir posibles accidentes durante la operación, mantenimiento o reparación de la máquina. A continuación, se invita a ver el siguiente vídeo. 

    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-edit.mb-5(data-aos="fade-left")
      h3 Turbidímetro
    
    .row.justify-content-center.mb-5
      .col-lg-4
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-29.png" style="width: 400px" data-aos="fade-right")
      .col-lg-8.ps-lg-4(data-aos="fade-left")
        p Es un equipo que se caracteriza por su capacidad de realizar mediciones turbidimétricas utilizando la relación entre una señal primaria nefelométrica de luz dispersa (90°) y la señal de luz dispersa transmitida; para llevar a cabo la transmisión de la luz, utiliza una lámpara de filamento de tungsteno que permite obtener una longitud de onda de 860 nm.

        p El rango de medición normal es entre 0 y 1000 NTU; sin embargo, cuando hay aguas residuales que exceden los 1000 NTU, se pueden hacer las diluciones que sean necesarias para que el valor final esté dentro del rango de medición del equipo; cuando el equipo entrega el resultado, este valor se deberá multiplicar por el número en el cual se hizo la dilución.

        p Con el fin de garantizar una medición precisa, se recomienda operar el equipo entre 0 a 50 °C y en una humedad relativa entre 0 y 90 %. Temperaturas mayores o una humedad relativa mayor pueden afectar la atmósfera en la cual el haz de luz se desplaza y generar error en la medición final de la turbidez.
    

    p.mb-5(data-aos="fade-right") Los turbidímetros normalmente cuentan con una pantalla donde se entrega información relacionada con el equipo y con las mediciones realizadas, y un teclado que cuenta con las descripciones de las siguientes teclas: ver figura 4.


    .titulo-sexto.color-acento-contenido.d-block
      h5 Figura 4
      span.mb-0 Esquema turbidímetro
    .p-3.p-lg-4.mb-1(style="background-color: #DBEFFC")
      .row.align-items-center.col-xxl-10.mx-auto
        .col-lg-6.ps-lg-4
          img.mb-4.mb-lg-auto.mx-auto.mx-lg-0(src="@/assets/curso/temas/tema1/img-30.jpg" style="width: 523px" data-aos="fade-right")
        .col-lg-6.mb-4.mb-lg-auto
          table.tabla-edit.tabla-edit-1
            tr
              td(data-aos="fade-right") 1
              td(data-aos="fade-left") <b>Tecla de CONFIGURACIONES:</b> selecciona las opciones del menú para configurar el medidor.
            tr
              td(data-aos="fade-right") 2
              td(data-aos="fade-left") <b>Tecla CALIBRACIÓN:</b> muestra la pantalla de calibración, inicia la calibración, selecciona las opciones de calibración.
            tr
              td(data-aos="fade-right") 3
              td(data-aos="fade-left") <b>Tecla ABAJO:</b> se desplaza por los menús, ingresa números y letras.
            tr
              td(data-aos="fade-right") 4
              td(data-aos="fade-left") <b>Tecla IZQUIERDA (contextual):</b> accede a la verificación de calibración, cancela o sale de la pantalla del menú actual y pasa a la pantalla del menú anterior.
            tr
              td(data-aos="fade-right") 5
              td(data-aos="fade-left") <b>Tecla ARRIBA:</b> se desplaza por los menús, ingresa números y letras.
            tr
              td(data-aos="fade-right") 6
              td(data-aos="fade-left") <b>Tecla DERECHA (contextual):</b> lee la muestra de turbidez, selecciona o confirma opciones, abre/salta a los submenús.
            tr
              td(data-aos="fade-right") 7
              td(data-aos="fade-left") <b>Tecla GESTIÓN DE DATOS:</b> visualiza, borra o transfiere los datos guardados.
    p.px-3.py-2.mb-5(style="background-color: #EFEFEF") <b>Nota.</b> Tomada de Hach (2017, p.8).

    p.mb-5(data-aos="fade-right") La pantalla de medición muestra la turbidez, unidad, estado de calibración, fecha y hora, ID del usuario (si se configuró) y el ID de la muestra (si se configuró). ver figura 5

    .titulo-sexto.color-acento-contenido.d-block
      h5 Figura 5
      span.mb-0 Pantalla turbidímetro
    .p-3.p-lg-4.mb-1(style="background-color: #DBEFFC")
      .row.align-items-center
        .col-lg-5.ps-lg-4
          img.mb-4.mb-lg-auto.mx-auto.mx-lg-0(src="@/assets/curso/temas/tema1/img-31.svg" style="width: 505px" data-aos="fade-right")
        .col-lg-6.mb-4.mb-lg-auto
          table.tabla-edit
            tr
              td(data-aos="fade-right") <b>1</b> Identificación del usuario.
              td(data-aos="fade-left") <b>9</b> NTU (Unidades nefelométricas de turbidez) o FNU (Unidades de turbidez de formazina).
            tr
              td(data-aos="fade-right") <b>2</b> Identificación de la muestra.
              td(data-aos="fade-left") <b>10 Modo de medición:</b> rapidly.
                br
                Settling Turbidity (ícono de blanco).
            tr
              td(data-aos="fade-right") <b>3</b> Indicador de estabilidad o bloqueo de pantalla.
              td(data-aos="fade-left") <b>11 Modo de medición:</b> promedio de señal (ícono de X-barra).
            tr
              td(data-aos="fade-right") <b>4</b> Indicador del estado de calibración. (Calibración OK= correcta).
              td(data-aos="fade-left") <b>12</b> Tiempo.
            tr
              td(data-aos="fade-right") <b>5</b> Indicador del estado de calibración. (Calibración?= incorrecta).
              td(data-aos="fade-left") <b>13</b> Fecha.
            tr
              td(data-aos="fade-right") <b>6</b> Parámetro.
              td(data-aos="fade-left") <b>14 Medición (contextual:</b> OK, Seleccionar).
            tr
              td(data-aos="fade-right") <b>7</b> Ícono de alimentación de CA.
              td(data-aos="fade-left") <b>15</b> Opciones (contextual).
            tr
              td(data-aos="fade-right") <b>8</b> Ícono de batería.
              td(data-aos="fade-left") <b>16</b> Calibración de verificación.
    p.px-3.py-2.mb-5(style="background-color: #EFEFEF") <b>Nota.</b> Tomada de Hach (2017, p.9).

    .cajon.color-acento-contenido.p-4.col-lg-10.col-xl-8.mx-auto.mb-5
      p.mb-0(data-aos="fade-left") Es importante que el usuario comprenda que la turbidez se refiere a la cantidad de partículas suspendidas en un líquido, lo cual afecta su transparencia y claridad visual. El turbidímetro es un dispositivo especialmente diseñado para medir esta turbidez y proporcionar resultados cuantitativos.

    p.mb-5(data-aos="fade-right") A continuación, se describirá el procedimiento básico para llevar a cabo una medición de turbidez:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/temas/tema1/slf-1.svg' style="max-width: 239px" alt='Muestra')
        h4.text-center Muestra
        p.text-center Colocar una muestra representativa en un recipiente limpio. Llenar una cubeta de muestra hasta la línea (aproximadamente 15 ml). Asegurarse de manipular la cubeta por su parte superior. Tapar la cubeta.
      
      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/temas/tema1/slf-2.svg' style="max-width: 239px" alt='Limpieza de cubeta')
        h4.text-center Limpieza de cubeta
        p.text-center Limpiar la cubeta con un paño suave, sin pelusas, para eliminar las gotas de agua y huellas de dedos.
      
      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/temas/tema1/slf-3.svg' style="max-width: 239px" alt='Lubricación cubeta')
        h4.text-center Lubricación cubeta
        p.text-center Aplicar una película delgada de aceite de silicona. Limpiar con un paño suave para obtener una película homogénea en toda la superficie.

      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/temas/tema1/slf-4.svg' style="max-width: 239px" alt='Botón de encendido y apagado')
        h4.text-center Botón de encendido y apagado
        p.text-center Pulsar el botón Encendido para encender el medidor. Colocar el instrumento sobre una superficie plana y resistente. Nota: no sostener el instrumento en las manos mientras toma las mediciones.

      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/temas/tema1/slf-5.svg' style="max-width: 239px" alt='Ubicación correcta de la cubeta')
        h4.text-center Ubicación correcta de la cubeta
        p.text-center Invertir la cubeta suavemente y luego insertarla en el compartimento de la cubeta, de manera que el diamante o marca de orientación quede alineado con la marca de orientación en relieve en el frente del compartimento de la cubeta. Colocar la tapa. 
      
      .tarjeta.p-4(style="background-color: #FFE2C0")
        .row.justify-content-center.mb-3
          .col-10
            img(src='@/assets/curso/temas/tema1/slf-6.svg' style="max-width: 239px" alt='Tecla de medición')
        h4.text-center Tecla de medición
        p.text-center Pulsar la tecla medición. La pantalla muestra un mensaje que dice que está estabilizando y luego la turbidez en NTU (FNU). El resultado se muestra y se guarda automáticamente.

    .row.justify-content-center.mb-5
      .col-lg-8.ps-lg-4(data-aos="fade-right")
        p La calibración del equipo se realiza a partir de muestras con una turbidez determinada, se hace una correlación lineal entre la medición obtenida y la medición esperada; si el coeficiente de correlación es superior a 0,99, se puede trabajar con el equipo.

        p Para una mayor precisión, se debe utilizar la misma cubeta de muestra o cuatro cubetas de muestras emparejadas para todas las lecturas durante la calibración.

        p La cubeta de muestra debe ser insertada en su compartimento, de manera que la marca de orientación o el diamante coincida con la marca de orientación en relieve en la parte frontal del compartimento de la cubeta. A continuación, se presenta el siguiente recurso para consultar la calibración del turbidímetro con los estándares StablCal y obtener resultados precisos:
      .col-lg-4
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-32.png" style="width: 400px" data-aos="fade-left")
    
    .row.mb-5
      .col-md-6.col-xl-4.p-2.p-xl-2.d-flex.justify-content-center
        .tarjeta.tarjeta-edit-01(data-aos="fade-right")
          span.number-card 1
          .img-border
            img(src="@/assets/curso/temas/tema1/img-c-1.svg" style="width: 95px")
          p.mb-0.text-center Pulse la tecla CALIBRACIÓN para entrar al modo de Calibración, siga las instrucciones en la pantalla. Nota: Invierta suavemente cada estándar antes de insertarlo.

      .col-md-6.col-xl-4.p-2.p-xl-2.d-flex.justify-content-center
        .tarjeta.tarjeta-edit-01(data-aos="zoom-in")
          span.number-card 2
          .img-border
            img(src="@/assets/curso/temas/tema1/img-c-2.svg" style="width: 95px")
          p.mb-0.text-center Inserte el estándar para 20 NTU y coloque la tapa. Nota: el estándar a ser insertado aparece en el display en un recuadro.
      .col-md-6.col-xl-4.p-2.p-xl-2.d-flex.justify-content-center
        .tarjeta.tarjeta-edit-01(data-aos="fade-left")
          span.number-card 3
          .img-border
            img(src="@/assets/curso/temas/tema1/img-c-3.svg" style="width: 95px")
          p.mb-0.text-center Pulse Medición, la pantalla muestra Estabilizando y luego muestra el resultado.

      .col-md-6.col-xl-4.p-2.p-xl-2.d-flex.justify-content-center
        .tarjeta.tarjeta-edit-01(data-aos="fade-right")
          span.number-card 4
          .img-border
            img(src="@/assets/curso/temas/tema1/img-c-4.svg" style="width: 95px")
          p.mb-0.text-center Repita los pasos 2 y 3 con el estándar para 100 NTU y 800 NTU. Nota: pulse “hecho” para completar una calibración de 2 puntos.
      
      .col-md-6.col-xl-4.p-2.p-xl-2.d-flex.justify-content-center
        .tarjeta.tarjeta-edit-01(data-aos="zoom-in")
          span.number-card 5
          .img-border
            img(src="@/assets/curso/temas/tema1/img-c-5.svg" style="width: 95px")
          p.mb-0.text-center Pulse “Hecho” para revisar los detalles de la calibración.
      
      .col-md-6.col-xl-4.p-2.p-xl-2.d-flex.justify-content-center
        .tarjeta.tarjeta-edit-01(data-aos="fade-left")
          span.number-card 6
          .img-border
            img(src="@/assets/curso/temas/tema1/img-c-6.svg" style="width: 95px")
          p.mb-0.text-center Pulse “Guardar” para guardar los resultados. Después de terminar la calibración, el medidor automáticamente pasa al modo “Verificar cal”.


    .tarjeta.d-flex.col-xxl-10.mx-auto.p-4.py-xl-0.ps-xl-0.position-relative(style="background: linear-gradient(0deg, rgba(77,177,240,1) 0%, rgba(48,118,182,1) 100%);")
      img.position-absolute.d-none.d-xl-flex(src="@/assets/curso/temas/tema1/img-33.png" style="width: 238px; left: -1.5rem; bottom: 0" data-aos="fade-right")
      .col-xl-9.ms-xl-auto.py-xl-5(data-aos="fade-left")
        p.fw-bold.text-white Con el fin de conocer más equipos utilizados en el laboratorio para la determinación de parámetros en aguas residuales, se invita a consultar:
        ul.mb-0
          li.d-flex.flex-wrap.flex-md-nowrap
            .d-flex.pe-xl-4
              span.decorador-li
              p Servicio Nacional de Aprendizaje [SENA]. 2018. <b>Manual para el uso del termo reactor ECO 25.</b> Centro de Gestión Industrial [CGI].
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/ME17_TERMOREACTOR--FORMATO-SENA.pdf')" target="_blank" style="min-width: ")
                span.pe-3 Descargar
                img(src="@/assets/curso/temas/img-2.svg" style="max-width: 15px")
          
          li.d-flex.flex-wrap.flex-md-nowrap
            .d-flex.pe-xl-4
              span.decorador-li
              p Servicio Nacional de Aprendizaje [SENA]. 2017. <b>Manual para uso del equipo cabina de extracción control superior CS-EO1200.</b> Centro de Gestión Industrial [CGI].
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/ME04_CABINA_EXTRACCION_CONTROL_SUPERIOR_EC_1200_S_FORMATO_SENA.pdf')" target="_blank" style="min-width: ")
                span.pe-3 Descargar
                img(src="@/assets/curso/temas/img-2.svg" style="max-width: 15px")
          
          li.d-flex.flex-wrap.flex-md-nowrap
            .d-flex.pe-xl-4
              span.decorador-li
              p Servicio Nacional de Aprendizaje [SENA]. 2017. <b>Manual para uso del equipo MRC balanza de precisión BWLC 1-A2-C2.</b> Centro de Gestión Industrial [CGI].
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/ME03_MRC_BALANZA_PRECISION_BWLC_1-A2-C2_FORMATO_SENA.pdf')" target="_blank" style="min-width: ")
                span.pe-3 Descargar
                img(src="@/assets/curso/temas/img-2.svg" style="max-width: 15px")






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.decorador-img-1
  display: flex
  align-items: center
  padding: .5rem 1.5rem
  background-color: #FFA031
  border-radius: 100px
  min-height: 61px
  margin-bottom: 1rem
.tabla-edit
  background-color: #F3F9FF
  tr td
    border: 1px solid #707070
    padding: .5rem 1rem
    background-color: #F3F9FF
  &-1
    tr td:first-child
      width: 32px
      background-color: #3076B6
      color: white
      font-size: 24px
      text-align: center
      padding: 0
      font-weight: bold
.tarjeta-edit-01
  max-width: 400px
  padding: 2rem 2.5rem
  background-color: #D5E3F0
  overflow: hidden
  position: relative
  transition: all .2s ease-in-out
  cursor: default
  .number-card
    position: absolute
    top: 0
    left: 0
    width: 53px
    height: 58px
    display: flex
    justify-content: center
    align-items: center
    font-weight: bold
    font-size: 24px
    color: white
    background-color: #008B8A
  .img-border
    position: relative
    margin-bottom: 1.5rem
    max-width: 95px
    margin-right: auto
    margin-left: auto
    img
      margin-right: auto
      margin-left: auto
      border: 10px solid #FFA031
      transition: all .1s ease-in-out
    &::after
      content: ''
      position: absolute
      min-width: 30px
      min-height: 30px
      background-color: #3076B6
      border-radius: 50%
      top: 10px
      left: -15px
      transition: all .1s linear
    &::before
      content: ''
      position: absolute
      min-width: 11px
      min-height: 11px
      background-color: #008B8A
      border-radius: 50%
      top: 67px
      right: 5px
      transition: all .1s linear
  &:hover
    background-color: #FFA031
    .img-border
      img
        border-color: #3076B6
      &::before, &::after
        background-color: #4DB1F0
</style>
