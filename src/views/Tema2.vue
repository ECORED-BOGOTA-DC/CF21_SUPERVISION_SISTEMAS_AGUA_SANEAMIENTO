<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Análisis de muestras
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema2/img-1.svg" style="width: 85px")
      p.col-sm.ps-sm-4.mb-0 Comprobar que los tratamientos seleccionados para el agua residual son los correctos y están siendo eficientes en comparación con lo exigido por la normatividad legal vigente es una actividad que debe ser desarrollada periódicamente, con el fin de garantizar que se cumple con los parámetros establecidos y así no tener impactos negativos sobre el medio ambiente, la salud, o económicos por causa de multas y sanciones por incumplimiento.

    p.mb-5 A continuación, se hace una descripción de tres elementos importantes en el seguimiento y ejecución de los protocolos de laboratorio:

    .titulo-segundo.color-acento-botones
      h2#t_2_1 2.1 Programas de monitoreo de agua residual
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-lg-auto.col-lg-4.mx-auto(src='@/assets/curso/temas/tema2/img-2.png' alt='Texto que describa la imagen' style="max-width: 400px")
      p.mb-0.col-lg-8.ps-md-4 Para asegurar el cumplimiento de las normas, es necesario disponer de un programa de control basado en la toma y análisis de muestras aleatorias. Se considera apropiado establecer una frecuencia diferencial de las visitas de control por parte de la autoridad ambiental y una exigencia a las industrias de reportes de la calidad de los vertimientos de acuerdo con la carga contaminante.
        br
        br
        |Los muestreos se hacen con mayor frecuencia en las industrias prioritarias, y al azar en las de poco interés. De este modo, se optimiza el uso de los recursos técnicos y humanos disponibles para el control. En cualquier caso, para la realización de caracterizaciones industriales, se deben seguir los procedimientos establecidos por el Instituto de Hidrología, Meteorología y Estudios Ambientales (Ideam) para identificación, manejo de muestras y realización de muestreos. Es importante verificar que los laboratorios que realizan las caracterizaciones estén debidamente acreditados ante esa institución. 

    p.mb-5 Dentro de las etapas para definir o llevar a cabo un programa de monitoreo de agua residual, se encuentran las que se muestran en la siguiente figura:

    .titulo-sexto.color-acento-contenido.d-block
      h5 Figura 6
      span.mb-0 Etapas de monitoreo de agua residual
    .col-lg-10.col-xl-8.mx-auto
      .p-3.p-lg-5.mb-1(style="background-color: #DBEFFC")
        img.mx-auto(src="@/assets/curso/temas/tema2/img-3.svg" style="width: 505px")
      p.px-3.py-2.mb-5(style="background-color: #EFEFEF") <b>Nota.</b> Tomado de Hach (2017, p. 12).

    p.mb-5 En el contexto de la implementación de un programa de monitoreo de agua residual, se requiere seguir un conjunto de etapas clave para su definición y ejecución adecuada. A continuación, se menciona cada una de ellas.

    .titulo-edit.mb-5
      h3 Características del punto de muestreo.
    
    .row.justify-content-center.mb-5
      .col-lg-8.ps-lg-4
        p Los muestreos de aguas residuales pueden darse en la cuenca hidrográfica, una vez se ha vertido en la misma, en las cajas de inspección (también llamadas cajas de aforo y muestreo), que suelen estar ubicadas antes y después de las Plantas de Tratamiento de Agua Residual (PTAR).
          br
          br
          |Lo más importante es, en lo posible, que se realice la toma de la muestra del agua residual antes de un tratamiento y después del mismo, para corroborar que el sistema propuesto está siendo eficiente en su funcionamiento. Se invita a ver el siguiente video donde exploraremos las características de la separación de líneas de agua, así como la caja de aforo y muestreo:
      .col-lg-4
        img.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-4.png" style="width: 400px")

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .titulo-edit.mb-5
      h3 Tipos de muestras
    
    PasosA.color-acento-contenido.col-lg-10.col-xl-8.mx-auto.mb-5(tipo="n")
      .row
        .col-md-8.mb-4.mb-md-0.order-2.order-md-1
          h5 Muestra simple:
          p Representa la composición del agua en un tiempo y lugar específicos, asumiendo que la composición se mantiene constante en el tiempo y no hay cambios en la concentración espacial. Se utiliza para determinar las características de descargas instantáneas, identificar la fuente y evaluar los posibles efectos en los procesos de tratamiento.
        .col-md-4.order-1.order-md-2.mb-4.mb-md-auto
          figure
            img.mx-auto(src='@/assets/curso/temas/tema2/img-5.png' alt='Muestra simple' style="max-width: 190px")

      .row
        .col-md-4.mb-4.mb-md-0
          figure
            img.mx-auto(src='@/assets/curso/temas/tema2/img-6.png' alt='Muestra compuesta' style="max-width: 190px")
        .col-md-8
          h5 Muestra compuesta:
          p es una mezcla de muestras instantáneas recolectadas en el mismo punto en diferentes momentos, sin considerar el caudal. Se miden parámetros como DBO5, sólidos suspendidos, DQO, fósforo, aceites, grasas y nitrógeno total Kjeldahl. Se utiliza una metodología de aforo, como molinetes, métodos volumétricos, vertederos o equipos electrónicos de aforo.
      
      .row
        .col-md-8.mb-4.mb-md-0.order-2.order-md-1
          h5 Muestra integrada:
          p implica analizar múltiples muestras instantáneas o simples tomadas simultáneamente en diferentes puntos, considerando proporcionalmente los caudales. Se utiliza para caracterizar el caudal de un río y para tratamientos combinados de diversas corrientes de aguas residuales.
        .col-md-4.order-1.order-md-2.mb-4.mb-md-auto
          figure
            img.mx-auto(src='@/assets/curso/temas/tema2/img-7.png' alt='Muestra integrada' style="max-width: 190px")

    .titulo-edit.mb-5
      h3 Cadena de custodia
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema2/img-1.svg" style="width: 85px")
      p.col-sm.ps-sm-4.mb-0 Hace referencia al seguimiento que se le debe hacer a la muestra desde el alistamiento del material y la toma de la muestra hasta el análisis y reporte de datos. De acuerdo con el Ministerio de Desarrollo Económico (2000), en su documento Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000. Título - E Tratamiento de aguas residuales, los procedimientos de cadena de custodia que deben ser definidos y tenidos en cuenta son:

    .d-flex.flex-wrap.flex-xl-nowrap.mb-5.align-items-center
      img.mb-4.mb-xl-auto.mx-auto.position-relative(src="@/assets/curso/temas/tema2/img-8.png" style="width: 400px")
      .tarjeta-decorador-2.col-xl
        .col-lg-10.mx-auto
          p.mb-4.fw-bold Procedimientos de cadena de custodia 
          .d-flex.flex-wrap 
            .col-lg-6
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check
                  | Rótulos de muestras.
                li.d-flex
                  i.fas.fa-check
                  | Sellos de muestras.
                li.d-flex
                  i.fas.fa-check
                  | Libro de registro de muestras.
                li.d-flex
                  i.fas.fa-check
                  | Registro de la carta de custodia.
            .col-lg-6
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check
                  | Hoja de remisión de muestras.
                li.d-flex
                  i.fas.fa-check
                  | Transporte de las muestras al laboratorio.
                li.d-flex
                  i.fas.fa-check
                  | Recepción y registro de muestras.
                li.d-flex
                  i.fas.fa-check
                  | Análisis de las muestras.

    p.mb-5 Para conocer al detalle cada procedimiento de la cadena de custodia, lo invitamos a leer el documento “Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000”, que se encuentra en el material complementario. Encontrará una descripción detallada de los procesos en el E.2.3.3 Cadena de custodia, páginas 19 a 23.

    .titulo-edit.mb-5
      h3 Métodos de muestreo

    p.mb-5 Después de definir el tipo de muestra requerido y los parámetros de cadena de custodia, se debe buscar el método para el muestreo que sea adecuado para la caracterización del agua residual; para ello, se presenta una tabla resumen de los métodos: 

    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.text-center Método de muestreo
            th.text-center Descripción
            th.text-center Recipientes para las muestras
            th.text-center Número de muestras
            th.text-center Cantidad
        tbody
          tr
            td.text-center.fw-bold Muestreo manual
            td.text-center El que no se realiza con equipos. Puede ser muy costoso y demorado para muestreos a gran escala.
            td.text-center(rowspan="2") El tipo de recipiente usado para tomar la muestra es de vital importancia, porque pueden existir intercambios iónicos con las paredes del recipiente o producir una adsorción sobre estas. Los recipientes, por lo general, están hechos de plástico y de vidrio, teniendo cada uno un uso específico.
            td.text-center(rowspan="2") Una sola muestra puede ser insuficiente cuando se desea un cierto nivel de confianza. Se debe basar en estadística aplicada para disminuir el error.
            td.text-center(rowspan="2") Deben recogerse dos litros de muestra para la mayoría de los análisis fisicoquímicos.  No debe utilizarse la misma muestra para ensayos químicos, bacteriológicos o microscópicos, debido a que los métodos de muestreo y manipulación son diferentes.
          tr
            td.text-center.fw-bold Muestreo automático
            td.text-center Usa muestreadores automáticos, pueden eliminar los errores humanos y reducir los costos, proveer un mayor número de muestreos y su uso se incrementa día a día.

    .titulo-edit.mb-5
      h3 Preservación de la muestra
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-lg-auto.col-lg-4.mx-auto(src='@/assets/curso/temas/tema2/img-9.png' alt='Texto que describa la imagen' style="max-width: 400px")
      .col-lg-8.ps-md-4
        p De acuerdo con el Ministerio de Desarrollo Económico (2000), en su documento Reglamento técnico del sector de Agua potable y Saneamiento básico RAS - 2000. Título - E Tratamiento de aguas residuales,
        .cajon.color-primario.p-4.mb-3(style="background-color: #FFECD5")
          p.mb-0.fw-bold(data-aos="fade-left") <em>“las muestras obtenidas en campo deben constituirse en una representación precisa del material del que se está haciendo el muestreo; por tal razón, deben ser obtenidas, conservadas, transportadas y almacenadas de manera que, cuando lleguen al laboratorio, todavía sean representativas del material existente en el campo” (p. 24).</em>
        p.mb-0 El objeto de la preservación es retardar los cambios químicos y biológicos que inevitablemente se dan después de recolectada la muestra, y así minimizar el potencial de volatilización o biodegradación entre el muestreo y el análisis de la muestra, retardar la acción biológica, retardar la hidrólisis de compuestos y complejos químicos, y retardar la volatilización de los constituyentes. 

    p.mb-5 Dentro de los métodos de preservación se encuentran:

    .d-flex.flex-wrap.mb-5
      .p-2.p-md-0.col-12.col-sm-6.col-md-4.col-xl.d-flex
        .decorador.decorador-1
          p.mb-0 Control de pH.
      .p-2.p-md-0.col-12.col-sm-6.col-md-4.col-xl.d-flex
        .decorador.decorador-2
          p.mb-0 Adición de reactivos.
      .p-2.p-md-0.col-12.col-sm-6.col-md-4.col-xl.d-flex
        .decorador.decorador-1
          p.mb-0 Uso de envases opacos o de color ámbar. 
      .p-2.p-md-0.col-12.col-sm-6.col-md-4.col-xl.d-flex
        .decorador.decorador-2
          p.mb-0 Refrigeración.
      .p-2.p-md-0.col-12.col-sm-6.col-md-4.col-xl.d-flex
        .decorador.decorador-1
          p.mb-0 Filtración.
      .p-2.p-md-0.col-12.col-sm-6.col-md-4.col-xl.d-flex
        .decorador.decorador-2.decorador-last
          p.mb-0 Congelamiento.

    Separador

    .titulo-segundo.color-acento-botones
      h2#t_2_2 2.2 Normas de calidad
    
    p.mb-5 Existen diferentes normas de calidad que deben ser tenidas en cuenta en el desarrollo de las acciones de monitoreo de aguas residuales, dentro de las cuales se pueden resaltar:

    ImagenInfografica.color-primario.info-edit-1
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-10.jpg' alt='')

      .tarjeta.tarjeta-info-edit.color-primario.p-4.px-md-5(x="9%" y="70%" numero="1")
        img.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/if-1.jpg' alt='' style="max-width: 142px")
        span.number-card 1
        .content-card.col-lg.ps-lg-4
          .h5.mb-2 (NTC) 6151 (2015)
          p La Norma Técnica Colombiana (NTC) 6151 (2015), generada por el Instituto Colombiano de Normas Técnicas (Icontec), la cual es una guía para la planificación de muestreo de agua con objeto de análisis microbiológico, brindando directrices desde los recipientes para muestras hasta el procedimiento de muestreo y transporte.
      .tarjeta.tarjeta-info-edit.color-primario.p-4.px-md-5(x="26%" y="70%" numero="2")
        img.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/if-2.jpg' alt='' style="max-width: 142px")
        span.number-card 2
        .content-card.col-lg.ps-lg-4
          .h5.mb-2 (NTC) 5667-1 (2010)
          p La Norma Técnica Colombiana (NTC) 5667-1 (2010), norma de calidad de agua, que brinda las directrices para el diseño de programas y técnicas de muestreo.
      .tarjeta.tarjeta-info-edit.color-primario.p-4.px-md-5(x="40%" y="70%" numero="3")
        img.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/if-3.jpg' alt='' style="max-width: 142px")
        span.number-card 3
        .content-card.col-lg.ps-lg-4
          .h5.mb-2 (NTC) 5667-3 (2004)
          p La Norma Técnica Colombiana (NTC) 5667-3 (2004), norma de calidad de agua, que brinda directrices para la preservación y el manejo de las muestras.
      .tarjeta.tarjeta-info-edit.color-primario.p-4.px-md-5(x="60%" y="70%" numero="4")
        img.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/if-4.jpg' alt='' style="max-width: 142px")
        span.number-card 4
        .content-card.col-lg.ps-lg-4
          .h5.mb-2 (NTC) 5667-3 (2000)
          p La Norma Técnica Colombiana (NTC) 5667-3 (2000), norma de calidad de agua, que brinda directrices para el ensayo biológico de muestras, en especial, para procesos de investigación donde se quiera determinar ensayos de toxicidad o biodegradación. 
      .tarjeta.tarjeta-info-edit.color-primario.p-4.px-md-5(x="77%" y="70%" numero="5")
        img.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/if-5.jpg' alt='' style="max-width: 142px")
        span.number-card 5
        .content-card.col-lg.ps-lg-4
          .h5.mb-2 (NTC) 5667- 13 (1998)
          p La Norma Técnica Colombiana (NTC) 5667- 13 (1998), norma de calidad de agua, la cual es una guía para el muestreo de lodos en aguas residuales y plantas de tratamiento de aguas.
      .tarjeta.tarjeta-info-edit.color-primario.p-4.px-md-5(x="94%" y="70%" numero="6")
        img.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema2/if-6.jpg' alt='' style="max-width: 142px")
        span.number-card 6
        .content-card.col-lg.ps-lg-4
          .h5.mb-2 (NTC) 5667- 13 (1995)
          p La Norma Técnica Colombiana (NTC) 5667- 13 (1995), norma de calidad de agua, que contiene detalles sobre muestreo de agua residual doméstica e industrial.

    Separador

    .titulo-segundo.color-acento-botones
      h2#t_2_3 2.3 Ensayos, protocolos y procedimientos
    
    p.mb-5 Teniendo en cuenta el tipo de parámetro a analizar, se deben contemplar los protocolos y procedimientos adecuados para tal fin; para ello, en la siguiente tabla, se presentan de manera resumida los parámetros que se deben considerar para analizar la muestra:


    .tabla-a.color-acento-contenido.mb-5
      table.table-little.col-lg-10.col-xl-6.mx-auto
        caption <b>Nota.</b> Tomada de Ministerio de Desarrollo Económico (2000, p.25).
        thead
          tr
            th.text-center Parámetro
            th.text-center Bajo
            th.text-center Medio
            th.text-center Medio alto
            th.text-center Alto
        tbody
          tr
            td Oxígeno disuelto
            td.text-center X
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td DBO5
            td.text-center 
            td.text-center
            td.text-center
            td.text-center
          tr
            td.text-center Soluble
            td.text-center X
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td.text-center.fw-bold Total
            td.text-center X 
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td SS
            td.text-center 
            td.text-center
            td.text-center
            td.text-center
          tr
            td SST
            td.text-center X 
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td SSV
            td.text-center X 
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td DQO
            td.text-center 
            td.text-center
            td.text-center
            td.text-center
          tr
            td.text-center Soluble
            td.text-center X
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td.text-center.fw-bold Total
            td.text-center X 
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td NITRÓGENO
            td.text-center 
            td.text-center
            td.text-center
            td.text-center
          tr
            td Total
            td.text-center X 
            td.text-center X
            td.text-center
            td.text-center
          tr
            td Orgánico
            td.text-center 
            td.text-center
            td.text-center
            td.text-center X
          tr
            td.text-center Soluble
            td.text-center 
            td.text-center
            td.text-center
            td.text-center X
          tr
            td.text-center Particulado
            td.text-center 
            td.text-center
            td.text-center
            td.text-center
          tr
            td Amoniacal
            td.text-center 
            td.text-center
            td.text-center
            td.text-center X
          tr
            td.text-center Soluble
            td.text-center 
            td.text-center
            td.text-center
            td.text-center X
          tr
            td.text-center Particulado
            td.text-center 
            td.text-center
            td.text-center
            td.text-center X
          tr
            td Nitrito
            td.text-center 
            td.text-center
            td.text-center
            td.text-center X
          tr
            td Nitratos
            td.text-center 
            td.text-center
            td.text-center
            td.text-center
          tr
            td FOSFORO TOTAL
            td.text-center 
            td.text-center
            td.text-center
            td.text-center
          tr
            td.text-center Soluble
            td.text-center X 
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td.text-center Particulado
            td.text-center X 
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td CLORUROS
            td.text-center 
            td.text-center
            td.text-center X
            td.text-center X
          tr
            td ALCALINIDAD
            td.text-center 
            td.text-center
            td.text-center
            td.text-center X
          tr
            td ACEITES Y GRASAS
            td.text-center 
            td.text-center
            td.text-center X
            td.text-center X
          tr
            td COLIFORMES
            td.text-center 
            td.text-center
            td.text-center
            td.text-center
          tr
            td.text-center Fecales
            td.text-center 
            td.text-center
            td.text-center X
            td.text-center X
          tr
            td.text-center.fw-bold Totales
            td.text-center 
            td.text-center
            td.text-center X
            td.text-center X
          tr
            td PH
            td.text-center X 
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td ACIDEZ
            td.text-center X 
            td.text-center X
            td.text-center X
            td.text-center X
          tr
            td DETERGENTES
            td.text-center 
            td.text-center
            td.text-center X
            td.text-center X
    p.mb-5 Teniendo en cuenta el tipo de parámetro a analizar, se deben contemplar los protocolos y procedimientos adecuados para tal fin; para ello, en la siguiente tabla, se presentan de manera resumida los parámetros que se deben considerar para analizar la muestra:

    




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
.tarjeta-decorador-2
  background-color: #FFE2C0
  border-top-right-radius: 81px
  margin-left: -3rem
  padding: 1rem 0
  @media (max-width: 1200px)
    margin-left: 0
    width: 100%
    border-top-left-radius: 81px
  @media (max-width: 991px)
    border-top-right-radius: 40px
    border-top-left-radius: 40px
    padding: 2rem
.decorador
  min-height: 90px
  display: flex
  align-items: center
  justify-content: center
  padding: 0 1rem
  width: 100%
  position: relative
  p
    font-size: 18px
    font-weight: bold
    text-align: center
  &-1
    background-color: #3076B6
    p
      color: white
  &-2
    background-color: #FFA031
  &::after
    content: ''
    position: absolute
    width: 100px
    height: 14px
    background-color: white
    transform: rotate(-75deg) translateX(-87%)
    top: 0
    right: -67px
    z-index: 1
  &::before
    content: ''
    position: absolute
    width: 100px
    height: 14px
    background-color: white
    transform: rotate(75deg) translateX(-87%)
    bottom: 0
    right: -67px
    z-index: 1
  &-last
    &::before, &::after
      display: none
  @media (max-width: 1200px)
    &::before, &::after
      display: none
.info-edit-1
  .img-infografica__content
    .img-infografica__item
      width: 40px
      .img-infografica__item__dot
        &::before
          background-color: #008B8A
          border: 5px solid white
          z-index: 1
          opacity: 1
        &::after
          background-color: #008B8A
      .img-infografica__item__numero
        color: white
        font-size: 24px
        z-index: 2
    .img-infografica__card
      width: 662px
  .tarjeta-info-edit
    display: flex
    flex-wrap: wrap
    position: relative
    overflow: hidden
    .number-card
      position: absolute
      top: 0
      left: 0
      width: 37px
      height: 43px
      display: flex
      justify-content: center
      align-items: center
      font-weight: bold
      font-size: 24px
      color: white
      background-color: #3076B6
      box-shadow: 0 0 3px 4px #00000010
  @media (max-width: 991px)
    .img-infografica__content
      .img-infografica__card
        width: 300px
.table-little
  thead tr th
    &:first-child
      width: 45%
  tbody tr td
    &:first-child
      width: 45%
</style>
