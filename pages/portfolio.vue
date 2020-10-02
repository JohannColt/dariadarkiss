<template>
  <section>
    <div>
      <ddb-portfolio/>
      <ddb-footer/>
    </div>
  </section>
</template>

<script>
  import DDBPortfolio from "../components/DDBPortfolio";
  import DDBFooter from "../components/DDBFooter";

  export default {
    components: {
      'ddb-portfolio': DDBPortfolio,
      'ddb-footer' : DDBFooter
    },
    name: "portfolio"
  }
</script>

<style scoped>

</style>
