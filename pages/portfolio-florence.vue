<template>
<div>
<ddb-portfolio-florence-love/>
</div>
</template>

<script>
import DDBFooter from "../components/DDBFooter";
import DDBFlorenceLove from "@/components/DDBFlorenceLove";
import DDBPortfolioMain from "@/components/DDBPortfolioMain";
export default {
  components: {
    'ddb-footer' : DDBFooter,
    'ddb-portfolio-main' : DDBPortfolioMain,
    'ddb-portfolio-florence-love': DDBFlorenceLove
  },
name: "portfolio-florence",
  mounted(){
    this.$store.commit('changeToOnePage')
  }
}
</script>

<style scoped>

</style>
