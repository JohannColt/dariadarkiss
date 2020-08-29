<template>
  <div class="ddb-price">
    <div class="ddb-price__container container">

      <div class="ddb-price__heading">
        <h3>Пакет услуг на твой выбор</h3>
      </div>
      <div class="ddb-price__blocks">
        <div class="ddb-price__element ddb-price__element__bronze">
          <div class="ddb-price__bronze-title ddb-price__title">
            <h3> Bronze Pack</h3>
            <button v-show="!isActiveBronze" v-on:click="isActiveBronze=true" class="ddb-price__button">
              <img src="images/ui-elements/vector.jpg">
            </button>
            <button v-show="isActiveBronze" v-on:click="isActiveBronze=false" class="ddb-price__button">
              <img src="images/ui-elements/r-vector.jpg">
            </button>
            <img v-show="isActiveBronze" src="images/ui-elements/line.jpg" class="ddb-price__title__line">
          </div>
          <div v-show="isActiveBronze" class="ddb-price__bronze-content">
            <p>1 час работы.</p>
            <p>1-2 образ.</p>
            <p>5 фото в ретуши.</p>
            <p>Все хорошие фото в цветокоррекции (~80-100 фото).</p>
            <h3>1 000 гривен</h3>
          </div>
        </div>
        <div class="ddb-price__element ddb-price__element__silver">
          <div class="ddb-price__silver-title ddb-price__title">
            <h3>Silver Pack </h3>
            <button v-show="!isActiveSilver" v-on:click="isActiveSilver=true" class="ddb-price__button">
              <img src="images/ui-elements/vector.jpg">
            </button>
            <button v-show="isActiveSilver" v-on:click="isActiveSilver=false" class="ddb-price__button">
              <img src="images/ui-elements/r-vector.jpg">
            </button>
            <img v-show="isActiveSilver" src="images/ui-elements/line.jpg" class="ddb-price__title__line">
          </div>
          <div v-show="isActiveSilver" class="ddb-price__silver-content">
            <p>1,5 часа работы.</p>
            <p>2-3 образа.</p>
            <p>10 фото в ретуши.</p>
            <p>Все хорошие фото в цветокоррекции (~100-150 фото).</p>
            <h3>1 500 гривен</h3>
          </div>
        </div>
        <div class="ddb-price__element ddb-price__element__gold">
          <div class="ddb-price__gold-title ddb-price__title">
            <h3>Gold Pack</h3>
            <button v-show="!isActiveGold" v-on:click="isActiveGold= true" class="ddb-price__button">
              <img src="images/ui-elements/vector.jpg">
            </button>
            <button v-show="isActiveGold" v-on:click="isActiveGold=false" class="ddb-price__button">
              <img src="images/ui-elements/r-vector.jpg">
            </button>
            <img v-show="isActiveGold" src="images/ui-elements/line.jpg" class="ddb-price__title__line">
          </div>
          <div v-show="isActiveGold" class="ddb-price_gold_content">
            <p>2-2,5 часа работы.</p>
            <p>3-4 образа.</p>
            <p>20 фото в ретуши.</p>
            <p>Печать лучших 10 фотографий (размер 15х21 см).</p>
            <h3>2 300 гривен</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBPriceBlock",
    data() {
      return {
        isActiveBronze: false,
        isActiveSilver: false,
        isActiveGold: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ddb-price {
    &__container {
      padding: 20px 0;
    }

    &__heading {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
      text-align: left;
    }

    &__element {

      display: flex;
      flex-direction: column;
      text-align: left;
      margin: 8px 0;
      padding: 10px 5px;
      background-color: #ffffff;

      &__bronze {
        border: 5px solid orange;
      }

      &__silver {
        border: 5px solid silver;
      }

      &__gold {
        border: 5px solid gold;
      }
    }

    &__title {
      display: flex;
      justify-content: space-between;
      position: relative;

      &__line {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 3%;
      }
    }

    &__button {
      display: flex;
      border: none;
      background: none;
    }

  }
</style>
