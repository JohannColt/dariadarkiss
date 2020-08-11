<template>
  <div class="ddb-second-block">
    <div class="ddb-second-block__photo">
      <img src="/images/ui-elements/bottom-left-frame.png" alt="bottom-left-frame"
           class="ddb-second-block__photo__bottom-left-frame">
      <img src="/images/ui-elements/top-right-frame.png" alt="top-right-frame"
           class="ddb-second-block__photo__top-right-frame">
      <img src="/images/ui-elements/smile.svg" alt="smile" class="ddb-second-block__photo__smile">
      <transition name="ddb-animation-photo">
      <div v-if="isVisible">
        <img src="/images/ui-elements/photo.png" alt="photo" class="ddb-second-block__photo__main">
      </div>
      </transition>
    </div>
    <div class="ddb-second-block__container">
      <div class="ddb-second-block__container__heading">
        <h3 class="ddb-second-block__container__heading__text">Всем привет!</h3>
        <img src="/images/ui-elements/smile.png" class="ddb-second-block__container__heading__smile" alt="smile">
      </div>

      <transition name="ddb-animation-photo">
      <div v-if="isVisible" class="ddb-second-block__container__element">
        <a>Суждение преобразует онтологический дуализм. Отвечая на вопрос о взаимоотношении идеального ли и
          материального ци</a>
      </div>
      </transition>
      <div class="ddb-second-block__container__element">
        <a>Дай Чжень заявлял, что суждение выводит сенсибельный гений. Единственной космической субстанцией Гумбольдт
          считал материю, наделенную внутренней активностью, несмотря на это интеллект неоднозначен.</a>
      </div>
      <div class="ddb-second-block__container__element">
        <a>Наряду с этим свобода раскладывает на элементы гравитационный парадокс. Согласно мнению известных философов,
          эклектика нетривиальна.</a>
      </div>
      <div class="ddb-second-block__container__element">
        <a> Дедуктивный метод, как следует из вышесказанного, индуцирует гедонизм. Априори, отношение к современности
          индуктивно принимает во внимание неоднозначный дуализм. Гравитационный парадокс.</a>
      </div>
      <div class="ddb-second-block__container__last">
        <h3 class="ddb-second-block__container__last__text">Оценить работы</h3>
      </div>
      <div v-on:click="isVisible=!isVisible" class="ddb-second-block__container__last-desktop">
        <h3 class="ddb-second-block__container__last-desktop__text">Оценить работы</h3>
        <img src="/images/ui-elements/second-block-line.png" class="ddb-second-block__container__last-desktop__line"
             alt="second-block">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBSecondBlock",
    data() {
      return {
        isVisible: false
      }
    },
    mounted() {
      this.isVisible=true
    }
  }
</script>

<style lang="scss" scoped>
  .ddb-second-block {
    display: flex;
    height: 100%;
    padding-top: 43px;

    &__photo {
      margin: 30px;
      position: relative;
      width: 472px;
      height: 768px;
      display: none;

      &__bottom-left-frame {
        position: absolute;
        left: -23px;
        bottom: -23px;
      }

      &__top-right-frame {
        position: absolute;
        right: -23px;
        top: -23px;
      }

      &__smile {
        position: absolute;
        right: -23px;
        bottom: -23px;
        width: 80px;
        height: 80px;
      }

      &__main {
      }
    }
    &__container {
      text-align: left;
      width: 100%;
      display: flex;
      flex-direction: column;

      &__heading {
        padding-left: 10px;
        display: flex;
        font-size: 21px;
        line-height: 24px;
        align-items: center;

        &__text {
          margin: 0;
          font-weight: 600;
        }

        &__smile {
          width: 20px;
          height: 20px;
        }
      }

      &__element {
        padding-left: 10px;
        margin: auto;
        display: flex;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        align-items: center;
      }

      &__last {
        width: 90%;
        background-color: $primary-color1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: auto;

        &__text {
          color: white;
          font-weight: 600;
          font-size: 16px;
          font-style: normal;
          line-height: 24px;
        }
      }

      &__last-desktop {
        margin: 20px;
        width: 216px;
        height: 48px;
        display: none;

        &__text {
          margin: 0;
          width: 216px;
          height: 48px;
          font-weight: 600;
          font-size: 20px;
          line-height: 48px;
        }

        &__line {
          margin: 0;
          height: 1px;
          width: 80%;
        }
      }
    }
  }

  @include for-desktop-up {
    .ddb-second-block {
      padding-top: 80px;

      &__container {
        &__element {
          margin: 10px;
          font-weight: normal;
          font-size: 20px;
          line-height: 40px;
        }

        &__heading {
          display: flex;
          font-size: 42px;
          line-height: 48px;

          &__smile {
            display: none;
          }
        }

        &__last {
          display: none;
        }

        &__last-desktop {
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: start;
        }
      }

      &__photo {
        display: inline;
      }
    }
  }

  @keyframes ddb-animation-photo {
    0% {
      transform: translateY(-312px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .ddb-animation-photo-enter-active {
    animation: ddb-animation-photo 3s;
  }
  .ddb-animation-photo-leave-active {
    animation: ddb-animation-photo 3s reverse;
  }

</style>
