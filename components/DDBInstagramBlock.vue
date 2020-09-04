<template>
    <div class="ddb-instagram">
      <div class="ddb-instagram__heading">
        <h2 class="ddb-instagram__heading__text">
          Следи за актуальными фотосессиями в Instagram
        </h2>
      </div>
      <div class="ddb-instagram__blocks">
        <div class="ddb-instagram__element">
          <img class="ddb-instagram__picture" src="images/ui-elements/instagram1.png">
          <img class="ddb-instagram__picture" src="images/ui-elements/instagram2.png">
        </div>
        <div class="ddb-instagram__element">
          <img class="ddb-instagram__picture" src="images/ui-elements/instagram3.png">
          <img class="ddb-instagram__picture" src="images/ui-elements/instagram4.png">
        </div>
        <div class="ddb-instagram__element">
          <img class="ddb-instagram__picture" src="images/ui-elements/instagram5.png">
          <img class="ddb-instagram__picture" src="images/ui-elements/instagram6.png">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DDBInstagramBlock"
    }
</script>

<style scoped lang="scss">
.ddb-instagram{
  &__element{
    display: flex;
    position: relative;
  }
  &__picture{
    position: absolute;
    width: 153px;
    height: 153px;
    object-fit: scale-down;
  }
}
</style>
