<template>
  <div class="ddb-about-me">
    <div class="ddb-about-me__container">
      <div class="ddb-about-me__left-side">
      <transition name="ddb-animation-elements">
        <div v-if="isHeadingActive" class="ddb-about-me__heading">
          <h3 class="ddb-about-me__heading__text">Всем привет!</h3>
          <img src="/images/ui-elements/smile.png" class="ddb-about-me__heading__smile" alt="smile">
        </div>
      </transition>
      <div class="ddb-about-me__elements-container">
      <transition name="ddb-animation-elements">
          <p v-if="isFirstElemActive" class="ddb-about-me__element">Суждение преобразует онтологический дуализм. Отвечая на вопрос о взаимоотношении идеального ли и
            материального ци</p>
      </transition>
      <transition name="ddb-animation-elements">
          <p v-if="isSecondElemActive" class="ddb-about-me__element">Дай Чжень заявлял, что суждение выводит сенсибельный гений. Единственной космической субстанцией Гумбольдт
            считал материю, наделенную внутренней активностью, несмотря на это интеллект неоднозначен.</p>
      </transition>
      <transition name="ddb-animation-elements">
          <p v-if="isThirdElemActive" class="ddb-about-me__element">Наряду с этим свобода раскладывает на элементы гравитационный парадокс. Согласно мнению известных
            философов,
            эклектика нетривиальна.</p>
      </transition>
      <transition name="ddb-animation-elements">
          <p v-if="isFourthElemActive" class="ddb-about-me__element"> Дедуктивный метод, как следует из вышесказанного, индуцирует гедонизм. Априори, отношение к современности
            индуктивно принимает во внимание неоднозначный дуализм. Гравитационный парадокс.</p>
      </transition>
      </div>
      <div class="ddb-about-me__last">
        <h3 class="ddb-about-me__last__text">Оценить работы</h3>
      </div>
      <div class="ddb-about-me__last-desktop">
        <transition name="ddb-animation-elements">
          <ddb-button v-if="isLastActive">
            <h4 class="ddb-about-me__last-desktop__text">Оценить работы</h4>
            <img class="ddb-about-me__last-desktop__line" src="images/ui-elements/button-line.png">
          </ddb-button>
        </transition>
      </div>
      </div>
      <div class="ddb-about-me__right-side">
        <img class="ddb-about-me__left-photo" src="images/ui-elements/left-photo.svg">
        <img class="ddb-about-me__central-photo" src="images/ui-elements/central-photo.svg">
        <img class="ddb-about-me__right-photo" src="images/ui-elements/right-photo.svg">
      </div>
    </div>
  </div>
</template>

<script>
  import DDBButton from "./DDBButton";

  export default {
    name: "DDBAboutMe",
    components: {
      'ddb-button': DDBButton
    },
    data() {
      return {
        isPhotoActive: false,
        isHeadingActive: false,
        isFirstElemActive:false,
        isSecondElemActive:false,
        isThirdElemActive:false,
        isFourthElemActive:false,
        isSmileActive:false,
        isLastActive:false,
        isFramesActive: false,

      }
    },
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      if (window.innerWidth < 1200) {
        this.isActive = true;
      }
    },
    methods :{
      setIsPhotoActive(){
        this.isPhotoActive= true;
      },
      setIsHeadingActive(){
        this.isHeadingActive= true;
      },

      setIsFirstElementActive(){
        this.isFirstElemActive= true;
      },
      setIsSecondElementActive(){
        this.isSecondElemActive= true;
      },
      setIsThirdElementActive(){
        this.isThirdElemActive= true;
      },
      setIsFourthElementAndSmileActive(){
        this.isFourthElemActive= true;
        this.isSmileActive= true;
      },
      setIsLastActive(){
        this.isLastActive= true;
      },
      setIsFrameActive(){
        this.isFramesActive= true;
      },
    },
    watch: {
      isActive: function () {
        if(window.innerWidth >= 1200 && this.isActive===true){
          setTimeout(this.setIsPhotoActive,1000);
          setTimeout(this.setIsHeadingActive,2000);
          setTimeout(this.setIsFirstElementActive,3000);
          setTimeout(this.setIsSecondElementActive,4000);
          setTimeout(this.setIsThirdElementActive,5000);
          setTimeout(this.setIsFourthElementAndSmileActive,6000);
          setTimeout(this.setIsLastActive,7000);
          setTimeout(this.setIsFrameActive,8000);
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  .ddb-about-me {
    display: flex;
    &__container {
      padding: 8px 20px;
      text-align: left;
      align-items: center;
      width: 100%;
      height: 100vh;
      display: flex;
    }

    &__left-side {
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 40%;
    }

    &__right-side {
      width: 60%;
      display: flex;
      height: 100%;
    }

    &__heading {
      width: 100%;
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

    &__elements-container{
      display: flex;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      align-items: center;
      flex-direction: column;
    }
    &__element {

    }

    &__last {
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
    &__right-side {
      display: flex;
      position: relative;
    }
    &__left-photo {
     position: absolute;
      z-index: 1;
      left: 0;
      top: -5%;
    }
    &__central-photo {
      z-index: 2;
      position: absolute;
      left: 25%;
      bottom: 0;
    }
    &__right-photo {
      z-index: 1;
      position: absolute;
      top:0;
      right: -10%;
    }
  }

  @include for-extra-large {
    .ddb-about-me {
      height: 100vh;

      &__container {
        padding: 90px 104px;
        display: flex;
      }
      &__elements-container{
        font-weight: normal;
        font-size: 16px;
        line-height: 32px;
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
        padding: 20px 30px;

        &__text {
          width: 240px;
          font-size: 25px;
        }
      }
    }
  }


  @keyframes ddb-animation-photo {
    0% {
      transform: translateX(-1200px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes ddb-animation-smile {
    0% {
      transform: translateY(1200px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes ddb-animation-elements {
    0% {
      transform: translateX(-360px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes ddb-animation-tr-frames {
    0% {
      transform: translate(-312px, 312px);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes ddb-animation-lb-frames {
    0% {
      transform: translate(312px, -312px);
    }
    100% {
      transform: translate(0);
    }
  }

  .ddb-animation-photo-enter-active {
    animation: ddb-animation-photo 1s;
  }

  .ddb-animation-photo-leave-active {
    animation: ddb-animation-photo 1s reverse;
  }

  .ddb-animation-smile-enter-active {
    animation: ddb-animation-smile 1s;
  }

  .ddb-animation-smile-leave-active {
    animation: ddb-animation-smile 1s reverse;
  }

  .ddb-animation-tr-frames-enter-active {
    animation: ddb-animation-tr-frames 1s;
  }

  .ddb-animation-tr-frames-leave-active {
    animation: ddb-animation-tr-frames 1s reverse;
  }

  .ddb-animation-lb-frames-enter-active {
    animation: ddb-animation-lb-frames 1s;
  }

  .ddb-animation-lb-frames-leave-active {
    animation: ddb-animation-lb-frames 1s reverse;
  }
  .ddb-animation-elements-enter-active {
    animation: ddb-animation-elements 1s;
  }

  .ddb-animation-elements-leave-active {
    animation: ddb-animation-elements 1s reverse;
  }

</style>
