<template>
  <section>
    <div>
<!--      <ddb-portfolio/>-->
<!--      <ddb-portfolio-main/>-->
      <ddb-portfolio-lovestory/>
      <ddb-footer/>
    </div>
  </section>
</template>

<script>
  import DDBPortfolio from "../components/DDBPortfolio";
  import DDBFooter from "../components/DDBFooter";
  import DDBPortfolioMain from "@/components/DDBPortfolioMain";
  import DDBPortfolioLoveStory from "@/components/DDBPortfolioLoveStory";

  export default {
    components: {
      'ddb-portfolio': DDBPortfolio,
      'ddb-footer' : DDBFooter,
      'ddb-portfolio-main' : DDBPortfolioMain,
      'ddb-portfolio-lovestory': DDBPortfolioLoveStory
    },
    name: "portfolio",
    mounted(){
      this.$store.commit('changeToOnePage')
    }
  }
</script>

<style scoped>

</style>
