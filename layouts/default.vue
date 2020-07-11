<template>
  <div>
    <ddb-header></ddb-header>
    <nuxt/>
  </div>
</template>

<script>
  import DDBHeader from "../components/DDBHeader";
  export default {
    components: {
      'ddb-header': DDBHeader,
    }
  }
</script>

<style>
</style>

