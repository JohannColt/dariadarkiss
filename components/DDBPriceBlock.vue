<template>
  <div class="ddb-price">
    <div class="ddb-price__container container">

      <div class="ddb-price__heading">
        <h3>Пакет услуг на твой выбор</h3>
      </div>
      <div class="ddb-price__blocks">
        <div class="ddb-price__element__bronze">
          <div class="ddb-price__element">
            <div class="ddb-price__bronze-title ddb-price__title" v-on:click="setIsActiveBronze">
              <h3> Bronze Pack</h3>
              <button v-show="!isActiveBronze" class="ddb-price__button">
                <img src="images/ui-elements/vector.jpg">
              </button>
              <button v-show="isActiveBronze" class="ddb-price__button">
                <img src="images/ui-elements/r-vector.jpg">
              </button>
            </div>
            <transition name="ddb-animation">
              <div v-show="isActiveBronze" class="ddb-price__content">
                <div class="ddb-price__content__line">
                  <p>1 час работы.</p>
                  <p>1-2 образ.</p>
                  <p>5 фото в ретуши.</p>
                  <p>Все хорошие фото в цветокоррекции (~80-100 фото).</p>
                  <h3>1 000 гривен</h3>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="ddb-price__element__silver">
          <div class="ddb-price__element">
            <div class="ddb-price__silver-title ddb-price__title" v-on:click="setIsActiveSilver">
              <h3>Silver Pack </h3>
              <button v-show="!isActiveSilver" class="ddb-price__button">
                <img src="images/ui-elements/vector.jpg">
              </button>
              <button v-show="isActiveSilver" class="ddb-price__button">
                <img src="images/ui-elements/r-vector.jpg">
              </button>
            </div>
            <transition name="ddb-animation">
              <div v-show="isActiveSilver" class="ddb-price__content">
                <div class="ddb-price__content__line">
                  <p>1,5 часа работы.</p>
                  <p>2-3 образа.</p>
                  <p>10 фото в ретуши.</p>
                  <p>Все хорошие фото в цветокоррекции (~100-150 фото).</p>
                  <h3>1 500 гривен</h3>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="ddb-price__element__gold">
          <div class="ddb-price__element">
            <div class="ddb-price__gold-title ddb-price__title" v-on:click="setIsActiveGold">
              <h3>Gold Pack</h3>
              <button v-show="!isActiveGold" class="ddb-price__button">
                <img src="images/ui-elements/vector.jpg">
              </button>
              <button v-show="isActiveGold" class="ddb-price__button">
                <img src="images/ui-elements/r-vector.jpg">
              </button>
            </div>
            <transition name="ddb-animation">
              <div v-show="isActiveGold" class="ddb-price__content">
                <div class="ddb-price__content__line">
                  <p>2-2,5 часа работы.</p>
                  <p>3-4 образа.</p>
                  <p>20 фото в ретуши.</p>
                  <p>Печать лучших 10 фотографий (размер 15х21 см).</p>
                  <h3>2 300 гривен</h3>
                </div>
              </div>
            </transition>
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
        isActiveBronze: true,
        isActiveSilver: false,
        isActiveGold: false
      }
    },
    methods:{
      setIsActiveBronze(){
        if(window.innerWidth<1200){
          this.isActiveBronze=!isActiveBronze;
        }
      },
      setIsActiveSilver(){
        if(window.innerWidth<1200){
          this.isActiveSilver=!isActiveSilver;
        }
      },
      setIsActiveGold(){
        if(window.innerWidth<1200){
          this.isActiveGold= !isActiveGold;
        }
      }
    },
    mounted(){
      if(window.innerWidth>=1200){
        this.isActiveBronze = true;
        this.isActiveSilver = true;
        this.isActiveGold = true;
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
      z-index: 3;
      padding-left: 24px;
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
      background-color: #ffffff;

      &__bronze {
        margin: 8px 0;
        padding: 5px;
        background: linear-gradient(180deg, rgba(173, 138, 86, 0.24) 0%, rgba(106, 56, 5, 0.24) 100%);
      }

      &__silver {
        margin: 8px 0;
        padding: 5px;
        background: linear-gradient(180deg, rgba(215, 215, 215, 0.24) 0%, rgba(180, 180, 180, 0.24) 100%);
      }

      &__gold {
        margin: 8px 0;
        padding: 5px;
        background: linear-gradient(180deg, rgba(201, 176, 55, 0.24) 0%, rgba(175, 149, 0, 0.24) 100%);
      }
    }

    &__title {
      padding-left: 24px;
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
      z-index: 2;

    }

    &__button {
      padding-right: 24px;
      display: flex;
      border: none;
      background: none;
    }

    &__content {
      display: flex;
      position: relative;
      justify-content: center;
      z-index: 1;

      &__line {
        width: 90%;
        border-top: 2px solid rgba(0, 0, 0, 0.1);
      }
    }
  }

  @keyframes ddb-animation {
    0% {
      transform: translateY(-64px);
    }
    100% {
      transform: translateY(0);
    }
  }


  .ddb-animation-enter-active {
    animation: ddb-animation 0.6s;
  }

  .ddb-animation-leave-active {
    animation: ddb-animation 0.6s reverse;
  }

  @include for-extra-large{
    .ddb-price{
      display: flex;
      justify-content: center;
      align-items: center;
      &__container{
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      &__heading{
        padding-left: 0;
      }
      &__blocks{
        width: 100%;
        display: flex;
      }
      &__button{
        display: none;
      }
      &__element{
        width: 409px;
        height: 374px;
        display: flex;
        flex-direction: column;
        &__bronze{
          margin:  0 8px;
        }
        &__silver{
          margin: 0 8px;
        }
        &__gold{
          margin: 0 8px;
        }
      }
      &__content{
        padding-left: 27px;
        &__line{
          width: 100%;
          border: 0;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
</style>
