<template>
  <div class="ddb-instagram">
    <div class="ddb-instagram__container container">
      <div class="ddb-instagram__heading">
        <h2 class="ddb-instagram__heading__text">
          Следи за актуальными <br> фотосессиями <br> в Instagram
        </h2>
      </div>
      <div class="ddb-instagram__blocks">
        <div class="ddb-instagram__element">
          <div class="ddb-instagram__square">
            <img class="ddb-instagram__picture" src="images/ui-elements/instagram1.png">
          </div>
          <div class="ddb-instagram__square">
            <img class="ddb-instagram__picture" src="images/ui-elements/instagram2.png">
          </div>
        </div>
        <div class="ddb-instagram__element">
          <div class="ddb-instagram__square">
            <img class="ddb-instagram__picture" src="images/ui-elements/instagram3.png">
          </div>
          <div class="ddb-instagram__square">
            <img class="ddb-instagram__picture" src="images/ui-elements/instagram4.png">
          </div>
        </div>
        <div class="ddb-instagram__element">
          <div class="ddb-instagram__square">
            <img class="ddb-instagram__picture" src="images/ui-elements/instagram5.png">
          </div>
          <div class="ddb-instagram__square">
            <img class="ddb-instagram__picture" src="images/ui-elements/instagram6.png">
          </div>
        </div>
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
  .ddb-instagram {

    &__heading {
      padding-left: 24px;
      text-align: left;

      &__text {
        margin: 0;
      }
    }

    &__blocks {
      padding: 24px;
    }

    &__element {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
    }
    &__square{
      height: 153px;
      width: 153px;
      position: relative;
    }

    &__picture {
      left: 0;
      top: 0;
      position: absolute;
      width: 153px;
      height: 153px;
    }
  }
</style>
