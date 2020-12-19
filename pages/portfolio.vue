<template>
  <section>
    <div>
      <ddb-portfolio-main/>
<!--      <ddb-portfolio-florence-love/>-->
      <ddb-footer/>
    </div>
  </section>
</template>

<script>
  import DDBFooter from "../components/DDBFooter";
  import DDBPortfolioMain from "@/components/DDBPortfolioMain";
  import DDBFlorenceLove from "@/components/DDBFlorenceLove";

  export default {
    components: {
      'ddb-footer' : DDBFooter,
      'ddb-portfolio-main' : DDBPortfolioMain,
      'ddb-portfolio-florence-love': DDBFlorenceLove
    },
    name: "portfolio",
    mounted(){
      this.$store.commit('changeToOnePage')
    }
  }
</script>

<style scoped>

</style>
