<template>
  <div class="ddb-price" id="ddb-price">
    <div class="ddb-price__container container">
      <div class="ddb-price__heading">
        <h2 class="ddb-price__heading__text">Пакет услуг на твой выбор</h2>
      </div>
      <div class="ddb-price__blocks">
        <div class="ddb-price__element__bronze">
          <div class="ddb-price__element">
            <div class="ddb-price__bronze-title ddb-price__title" v-on:click="setIsActiveBronze">
              <h3 class="ddb-price__title__text"> Bronze Pack</h3>
              <button v-show="!isActiveBronze" class="ddb-price__button">
                <img src="images/ui-elements/vector.jpg">
              </button>
              <button v-show="isActiveBronze" class="ddb-price__button">
                <img src="images/ui-elements/r-vector.jpg">
              </button>
            </div>
            <transition name="ddb-animation">
              <div v-show="isActiveBronze" class="ddb-price__content">
                <div class="ddb-price__content__line"></div>
                <p class="ddb-price__text">1 час работы.</p>
                <p class="ddb-price__text">1-2 образ.</p>
                <p class="ddb-price__text">5 фото в ретуши.</p>
                <p class="ddb-price__text">Все хорошие фото в цветокоррекции<br/> (~80-100 фото).</p>
                <h3 class="ddb-price__last">1 000 гривен</h3>
              </div>
            </transition>
          </div>
        </div>
        <div class="ddb-price__element__silver">
          <div class="ddb-price__element">
            <div class="ddb-price__silver-title ddb-price__title" v-on:click="setIsActiveSilver">
              <h3 class="ddb-price__title__text">Silver Pack </h3>
              <button v-show="!isActiveSilver" class="ddb-price__button">
                <img src="images/ui-elements/vector.jpg">
              </button>
              <button v-show="isActiveSilver" class="ddb-price__button">
                <img src="images/ui-elements/r-vector.jpg">
              </button>
            </div>
            <transition name="ddb-animation">
              <div v-show="isActiveSilver" class="ddb-price__content">
                <div class="ddb-price__content__line"></div>
                <p class="ddb-price__text">1,5 часа работы.</p>
                <p class="ddb-price__text">2-3 образа.</p>
                <p class="ddb-price__text">10 фото в ретуши.</p>
                <p class="ddb-price__text">Все хорошие фото в цветокоррекции<br/> (~100-150 фото).</p>
                <h3 class="ddb-price__last">1 500 гривен</h3>
              </div>
            </transition>
          </div>
        </div>
        <div class="ddb-price__element__gold">
          <div class="ddb-price__element">
            <div class="ddb-price__gold-title ddb-price__title" v-on:click="setIsActiveGold">
              <h3 class="ddb-price__title__text">Gold Pack</h3>
              <button v-show="!isActiveGold" class="ddb-price__button">
                <img src="images/ui-elements/vector.jpg">
              </button>
              <button v-show="isActiveGold" class="ddb-price__button">
                <img src="images/ui-elements/r-vector.jpg">
              </button>
            </div>
            <transition name="ddb-animation">
              <div v-show="isActiveGold" class="ddb-price__content">
                <div class="ddb-price__content__line"></div>
                <p class="ddb-price__text">2-2,5 часа работы.</p>
                <p class="ddb-price__text">3-4 образа.</p>
                <p class="ddb-price__text">20 фото в ретуши.</p>
                <p class="ddb-price__text">Печать лучших <br class="ddb-price__br"> 10 фотографий<br/> (размер 15х21 см).</p>
                <h3 class="ddb-price__last">2 300 гривен</h3>
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
    methods: {
      setIsActiveBronze() {
        if (window.innerWidth < 1024) {
          this.isActiveBronze = !this.isActiveBronze;
        }
      },
      setIsActiveSilver() {
        if (window.innerWidth < 1024) {
          this.isActiveSilver = !this.isActiveSilver;
        }
      },
      setIsActiveGold() {
        if (window.innerWidth < 1024) {
          this.isActiveGold = !this.isActiveGold;
        }
      }
    },
    mounted() {
      if (window.innerWidth >= 1024) {
        this.isActiveBronze = true;
        this.isActiveSilver = true;
        this.isActiveGold = true;
      } else {
        this.isActiveBronze = true;
        this.isActiveSilver = false;
        this.isActiveGold = false;
      }
    }
  }
</script>

<style lang="scss" scoped>

  .ddb-price {
    display: flex;
    justify-content: center;
    &__container {
      padding: 20px 0;
    }

    &__heading {
      padding-left: 19px;
      text-align: left;

      &__text {
        margin: 24px 0;
      }

    }

    &__element {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      text-align: left;
      background-color: #ffffff;
      font-weight: normal;
      font-size: 14px;
      line-height: 30px;

      &__bronze {
        box-shadow: 0 0 31.7802px rgba(63, 45, 45, 0.08);
        margin: 8px 0;
        padding: 5px;
        background: linear-gradient(180deg, rgba(173, 138, 86, 0.24) 0%, rgba(106, 56, 5, 0.24) 100%);
      }

      &__silver {
        box-shadow: 0 0 31.7802px rgba(63, 45, 45, 0.08);
        margin: 8px 0;
        padding: 5px;
        background: linear-gradient(180deg, rgba(215, 215, 215, 0.24) 0%, rgba(180, 180, 180, 0.24) 100%);
      }

      &__gold {
        box-shadow: 0 0 31.7802px rgba(63, 45, 45, 0.08);
        margin: 8px 0;
        padding: 5px;
        background: linear-gradient(180deg, rgba(201, 176, 55, 0.24) 0%, rgba(175, 149, 0, 0.24) 100%);
      }
    }

    &__title {
      background: white;
      padding-left: 19px;
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
      z-index: 2;
      &__text {
        margin-top: 23px;
        margin-bottom: 23px;
      }
    }

    &__button {
      padding-right: 19px;
      display: flex;
      border: none;
      background: none;
    }

    &__content {
      padding-left: 20px;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: center;
      font-weight: normal;
      font-size: 16px;
      line-height: 32px;
      z-index: 1;

      &__line {
        position: absolute;
        top: 0;
        left: 5%;
        width: 90%;
        border-top: 2px solid rgba(0, 0, 0, 0.1);
      }
    }

    &__text {
      margin: 10px 0;
    }

    &__last {
      margin-top: 22px;
      margin-bottom: 35px;
    }
    &__br{
      display: none;
    }
  }

  @include for-large{
    .ddb-price {
      display: flex;
      justify-content: center;
      align-items: center;

      &__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 104px;
        padding-bottom: 0;
      }

      &__heading {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        padding-left: 0;

        &__text {
          margin: 0 0 24px;
        }
      }

      &__blocks {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      &__title {
        padding-left: 20px;

        &__text {
          margin-top: 10px;
          margin-bottom: 6px;
        }
      }

      &__button {
        display: none;
      }

      &__element {
        display: flex;
        flex-direction: column;

        &__bronze {
          padding: 12px;
          margin-top: 0;
          margin-right: 8px;
          width: 100%;
          min-width: 300px;
          max-width: 341px;
        }

        &__silver {
          padding: 12px;
          margin: 0 8px;
          width: 100%;
          min-width: 300px;
          max-width: 341px;
        }

        &__gold {
          padding: 12px;
          margin-top: 0;
          margin-left: 8px;
          width: 100%;
          min-width: 300px;
          max-width: 341px;
        }
      }

      &__content {
        padding-left: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 32px;

        &__line {
          padding-top: 10px;
          width: 100%;
          border: 0;
          display: flex;
          flex-direction: column;
        }
      }

      &__text {
        margin-top: 5px;
        margin-bottom: 0;
      }

      &__last {
        margin-top: 6px;
        margin-bottom: 10px;
      }
      &__br{
        display: flex;
      }
    }
  }

  @include for-extra-large {
    .ddb-price {
      display: flex;
      justify-content: center;
      align-items: center;

      &__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 104px;
        padding-bottom: 0;
      }

      &__heading {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        padding-left: 0;

        &__text {
          margin: 0 0 24px;
        }
      }

      &__blocks {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      &__title {
        padding-left: 20px;

        &__text {
          margin-top: 20px;
          margin-bottom: 6px;
        }
      }

      &__button {
        display: none;
      }

      &__element {
        display: flex;
        flex-direction: column;

        &__bronze {
          padding: 12px;
          margin-top: 0;
          margin-right: 8px;
          width: 100%;
          min-width: 350px;
          max-width: 409px;
        }

        &__silver {
          padding: 12px;
          margin: 0 8px;
          width: 100%;
          min-width: 350px;
          max-width: 409px;
        }

        &__gold {
          padding: 12px;
          margin-top: 0;
          margin-left: 8px;
          width: 100%;
          min-width: 350px;
          max-width: 409px;
        }
      }

      &__content {
        padding-left: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 32px;

        &__line {
          padding-top: 10px;
          width: 100%;
          border: 0;
          display: flex;
          flex-direction: column;
        }
      }

      &__text {
        margin-top: 10px;
        margin-bottom: 0;
      }

      &__last {
        margin-top: 32px;
        margin-bottom: 28px;
      }
      &__br{
        display: none;
      }
    }
  }

  @keyframes ddb-animation {
    0% {
      transform: translateY(-256px);
      height: 0;
    }
    100% {
      transform: translateY(0);
      height: 321px;
    }
  }


  .ddb-animation-enter-active {
    animation: ddb-animation 0.6s;
  }

  .ddb-animation-leave-active {
    animation: ddb-animation 0.6s reverse;
  }
</style>
