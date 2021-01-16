<template>
<div class="ddb-portfolio-pick">
  <div>
    <img class="ddb-portfolio-pick__image" src="/images/portfolio/1.jpg">
  </div>
  <div>
    <img class="ddb-portfolio-pick__image" src="/images/portfolio/2.jpg">
  </div>
  <div>
    <img class="ddb-portfolio-pick__image" src="/images/portfolio/3.jpg">
  </div>
</div>
</template>

<script>
export default {
name: "DDBPortfolioPick"
}
</script>

<style lang="scss" scoped>
.ddb-portfolio-pick{
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__image{
    object-fit: cover;
    width: 267px;
    height: 267px;
    border: 6px white solid;
  }
}
</style>
