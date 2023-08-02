<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Por último, el siguiente mapa conceptual destaca la relevancia fundamental de seguir protocolos de laboratorio adecuados y realizar un análisis preciso de las muestras de agua en el tratamiento de aguas residuales. El manejo adecuado de los protocolos garantiza resultados confiables y reproducibles, mientras que el análisis de muestras proporciona información valiosa sobre las propiedades y componentes del agua. Sabiendo esto y para una breve revisión de los temas vistos, puede observar el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Síntesis: Describe a través de un mapa conceptual los temas vistos en el componente formativo, indicando la importancia de seguir adecuadamente los protocolos de laboratorio al realizar un análisis de las muestras de agua residuales, el manejo adecuado de estos protocolos permite garantizar los resultados y el análisis de las muestras tiene la finalidad de obtener información relevante sobre los componentes y propiedades del agua.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
