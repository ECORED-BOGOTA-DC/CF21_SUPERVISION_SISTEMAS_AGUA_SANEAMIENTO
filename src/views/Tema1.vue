<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Protocolos de laboratorio
    .d-flex.flex-wrap.align-items-center.mb-5
      img.mb-4.mb-sm-auto(src="@/assets/curso/temas/tema1/img-1.svg" style="width: 85px")
      p.col-sm.ps-sm-4.mb-0 Monitorear las aguas residuales es un proceso que involucra diversos aspectos y fases, entre las cuales se destacan los protocolos de laboratorio. Estos procedimientos deben ser  implementados con el fin de garantizar la ejecución de todas las acciones necesarias para obtener resultados en cuanto a las características de las aguas residuales, y que permitan la toma de decisiones.
    p.mb-5 A continuación, se hace una descripción de tres elementos importantes en el seguimiento y ejecución de los protocolos de laboratorio:

    .titulo-segundo.color-acento-botones
      h2#t_1_1 1.1 Normas generales de usos de laboratorios
    
    p.mb-5 Existen unas normas generales que deben ser tenidas en cuenta al momento de realizar cualquier ensayo o procedimiento dentro de un laboratorio, revíselas a continuación: 

    

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_2 1.2 Materiales para la caracterización de agua residual

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass"></style>
