<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img.mb-5(src="@/assets/curso/temas/img-1.jpg")
    p.mb-4 Con este componente Monitoreo de aguas residuales, se busca identificar y controlar los cambios en el color, sabor y olor del acuífero, así como determinar las posibles causas de la contaminación, para realizar el proceso de monitoreo que prevenga una posible contaminación hídrica y sus consecuencias negativas para la comunidad. Además, se busca garantizar la calidad del agua y proteger el recurso hídrico, no solo para la comunidad local, sino también para aquellos que hacen uso aguas arriba y aguas abajo.
    p Lo anterior,  implica el estudio de las variables necesarias para llevar a cabo el monitoreo de aguas residuales o vertimientos incluyendo la implementación de protocolos y normas aplicables, el uso de equipos y materiales adecuados y la realización de ensayos relevantes. El proceso de monitoreo debe ser constante y preventivo, para identificar posibles fuentes de contaminación y tomar las medidas necesarias antes de que los impactos en la calidad del agua se materialicen.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
