<template>
<div>
  <ddb-portfolio-lovestory/>
  <ddb-footer/>
</div>
</template>

<script>
import DDBFooter from "../components/DDBFooter";
import DDBPortfolioLoveStory from "@/components/DDBPortfolioLoveStory";

export default {
name: "portfolio-love",
  components: {
    'ddb-footer' : DDBFooter,
    'ddb-portfolio-lovestory': DDBPortfolioLoveStory
  },
  mounted(){
    this.$store.commit('changeToOnePage')
  }
}
</script>

<style scoped>

</style>
