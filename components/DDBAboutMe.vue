<template>
  <div class="ddb-about-me">
    <div class="ddb-about-me__left-side">
      <div class="ddb-about-me__yellow-line">
      </div>
      <div class="ddb-about-me__photo">
        <transition name="ddb-animation-lb-frames">
        <img v-if="isActive" src="/images/ui-elements/bottom-left-frame.png" alt="bottom-left-frame"
             class="ddb-about-me__left-side__bottom-left-frame">
        </transition>
        <transition name="ddb-animation-tr-frames">
        <img v-if="isActive" src="/images/ui-elements/top-right-frame.png" alt="top-right-frame"
             class="ddb-about-me__left-side__top-right-frame">
        </transition>
        <transition name="ddb-animation-smile">
            <img v-if="isActive" src="/images/ui-elements/smile.svg" alt="smile" class="ddb-about-me__left-side__smile">
        </transition>
        <transition name="ddb-animation-photo">
            <img v-if="isActive" src="/images/ui-elements/photo.png" alt="photo" class="ddb-about-me__left-side__main">
        </transition>
      </div>
    </div>
    <div class="ddb-about-me__container">
      <transition name="ddb-animation-photo">
        <div v-if="isActive" class="ddb-about-me__heading">
          <h3 class="ddb-about-me__heading__text">Всем привет!</h3>
          <img src="/images/ui-elements/smile.png" class="ddb-about-me__heading__smile" alt="smile">
        </div>
      </transition>
      <transition name="ddb-animation-photo">
        <div v-if="isActive" class="ddb-about-me__element">
          <a>Суждение преобразует онтологический дуализм. Отвечая на вопрос о взаимоотношении идеального ли и
            материального ци</a>
        </div>
      </transition>
      <transition name="ddb-animation-photo">
        <div v-if="isActive" class="ddb-about-me__element">
          <a>Дай Чжень заявлял, что суждение выводит сенсибельный гений. Единственной космической субстанцией Гумбольдт
            считал материю, наделенную внутренней активностью, несмотря на это интеллект неоднозначен.</a>
        </div>
      </transition>
      <transition name="ddb-animation-photo">
        <div v-if="isActive" class="ddb-about-me__element">
          <a>Наряду с этим свобода раскладывает на элементы гравитационный парадокс. Согласно мнению известных
            философов,
            эклектика нетривиальна.</a>
        </div>
      </transition>
      <transition name="ddb-animation-photo">
        <div v-if="isActive" class="ddb-about-me__element">
          <a> Дедуктивный метод, как следует из вышесказанного, индуцирует гедонизм. Априори, отношение к современности
            индуктивно принимает во внимание неоднозначный дуализм. Гравитационный парадокс.</a>
        </div>
      </transition>
      <div class="ddb-about-me__last">
        <h3 class="ddb-about-me__last__text">Оценить работы</h3>
      </div>
      <div  class="ddb-about-me__last-desktop">
        <transition name="ddb-animation-photo">
          <ddb-button>
            <h4 class="ddb-about-me__last-desktop__text">Оценить работы</h4>
            <img class="ddb-about-me__last-desktop__line" src="images/ui-elements/button-line.png">
          </ddb-button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import DDBButton from "./DDBButton";
  export default {
    name: "DDBAboutMe",
    components: {
      'ddb-button': DDBButton},
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    mounted(){
      if (window.innerWidth < 1200) {
        this.isActive = true;
      }
    }
  }

</script>

<style lang="scss" scoped>
  .ddb-about-me {
    display: flex;
    padding-top: 20px;
    &__left-side {
      height: 100vh;
      max-width: 50%;
      position: relative;
      display: none;

      &__bottom-left-frame {
        position: absolute;
        left: 17px;
        bottom: -23px;
      }

      &__top-right-frame {
        position: absolute;
        right: 17px;
        top: -23px;
      }

      &__smile {
        position: absolute;
        right: 2%;
        bottom: -2%;
        width: 80px;
        height: 80px;
      }

      &__main {
        object-fit: cover;
        display: block;
        max-width: 472px;
        max-height: 768px;
      }
    }
    &__yellow-line{
      height: 100vh;
      width: 64px;
      background-color: $primary-color3;
    }
    &__photo {
      margin-top: 40px;
      position: relative;
      display: flex;
      padding-left: 40px;
      padding-right: 40px;
      max-height: 768px;
      height: 90%;
    }

    &__container {
      text-align: left;
      align-items: center;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    &__heading {
      width: 100%;
      padding: 8px 20px;
      display: flex;
      font-size: 21px;
      line-height: 24px;
      justify-content: left;

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
      padding: 8px 20px;
      display: flex;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      align-items: center;
    }
    &__last {
      padding: 8px 20px;
      height: 56px;
      width: 90%;
      background-color: $primary-color1;
      display: flex;
      align-items: center;
      justify-content: center;

      &__text {
        color: white;
        font-weight: 600;
        font-size: 16px;
        font-style: normal;
        line-height: 24px;
      }
    }

    &__last-desktop {
      padding: 8px 20px;
      width: 100%;
      display: none;
      position: relative;


      &__text {
        margin: 0;
        width: 216px;
        height: 48px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 48px;
      }

      &__line {
        display: block;
        position: absolute;
        bottom: 1px;
        left: 0;
        width: 80%;
        height: 1px;
      }
    }
  }

  @include for-desktop-up {
    .ddb-about-me {
      height: 100vh;
      padding-top: 80px;

      &__element {
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
        align-items: start;
      }

      &__left-side {
        display: flex;
      }
    }
  }
  @include for-medium-desktop-up{
    .ddb-about-me{
      &__heading{
        padding: 12px 30px;
      }
      &__element{
        padding: 12px 30px;
      }
      &__last-desktop{
        padding: 20px 30px;
        &__text{
          width: 240px;
          font-size: 25px;
        }
      }
      &__photo{
        margin-left: 60px;
      }
    }
  }

  @keyframes ddb-animation-photo {
    0% {
      transform: translateX(-312px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes ddb-animation-smile {
    0% {
      transform: translateY(312px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes ddb-animation-tr-frames {
    0% {
      transform: translate(-312px, 312px);
    }
    100%{
      transform: translate(0);
    }
  }

  @keyframes ddb-animation-lb-frames {
    0% {
      transform: translate(312px, -312px);
    }
    100%{
      transform: translate(0);
    }
  }

  .ddb-animation-photo-enter-active {
    animation: ddb-animation-photo 3s;
  }

  .ddb-animation-photo-leave-active {
    animation: ddb-animation-photo 3s reverse;
  }

  .ddb-animation-smile-enter-active {
    animation: ddb-animation-smile 3s;
  }

  .ddb-animation-smile-leave-active {
    animation: ddb-animation-smile 3s reverse;
  }

  .ddb-animation-tr-frames-enter-active{
    animation: ddb-animation-tr-frames 3s;
  }

  .ddb-animation-tr-frames-leave-active{
    animation: ddb-animation-tr-frames 3s reverse;
  }

  .ddb-animation-lb-frames-enter-active{
    animation: ddb-animation-lb-frames 3s;
  }

  .ddb-animation-lb-frames-leave-active{
    animation: ddb-animation-lb-frames 3s reverse;
  }

</style>
