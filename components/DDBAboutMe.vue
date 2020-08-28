<template>
  <div class="ddb-about-me">
    <div class="ddb-about-me__container container">
      <div class="ddb-about-me__left-side">
        <transition name="ddb-animation-elements">
          <div class="ddb-about-me__heading">
            <h3 class="ddb-about-me__heading__text">Всем привет!</h3>
          </div>
        </transition>
        <div class="ddb-about-me__elements-container">
          <transition name="ddb-animation-elements">
            <p class="ddb-about-me__element">Суждение преобразует онтологический дуализм. Отвечая на вопрос о
              взаимоотношении идеального ли и
              материального ци</p>
          </transition>
          <transition name="ddb-animation-elements">
            <p class="ddb-about-me__element">Дай Чжень заявлял, что суждение выводит сенсибельный гений. Единственной
              космической субстанцией Гумбольдт
              считал материю, наделенную внутренней активностью, несмотря на это интеллект неоднозначен. </p>
          </transition>
          <transition name="ddb-animation-elements">
            <p class="ddb-about-me__element">Наряду с этим
              свобода раскладывает на элементы гравитационный парадокс.
              Согласно мнению известных
              философов,
              эклектика нетривиальна.</p>
          </transition>
        </div>
        <div class="ddb-about-me__last-desktop">
          <transition name="ddb-animation-elements">
            <ddb-button>
              <h4 class="ddb-about-me__last-desktop__text">Оценить работы</h4>
              <img class="ddb-about-me__last-desktop__line" src="images/ui-elements/button-line.png">
            </ddb-button>
          </transition>
        </div>
      </div>
      <div class="ddb-about-me__right-side">
        <div class="ddb-about-me__right-side__element ddb-about-me__right-side__first-element">
          <div class="ddb-about-me__right-side__cont">
            <img class="ddb-about-me__right-side__photo"
                 src="https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9">
          </div>
        </div>
        <div class="ddb-about-me__right-side__element ddb-about-me__right-side__second-element">
            <img class="ddb-about-me__right-side__photo"
                 src="https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9">
        </div>
        <div class="ddb-about-me__right-side__element ddb-about-me__right-side__third-element">
          <div class="ddb-about-me__right-side__cont">
            <img class="ddb-about-me__right-side__photo"
                 src="https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9">
          </div>
        </div>

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
        isFirstElemActive: false,
        isSecondElemActive: false,
        isThirdElemActive: false,
        isFourthElemActive: false,
        isSmileActive: false,
        isLastActive: false,
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
    },
    methods: {
      setIsPhotoActive() {
        this.isPhotoActive = true;
      },
      setIsHeadingActive() {
        this.isHeadingActive = true;
      },

      setIsFirstElementActive() {
        this.isFirstElemActive = true;
      },
      setIsSecondElementActive() {
        this.isSecondElemActive = true;
      },
      setIsThirdElementActive() {
        this.isThirdElemActive = true;
      },
      setIsFourthElementAndSmileActive() {
        this.isFourthElemActive = true;
        this.isSmileActive = true;
      },
      setIsLastActive() {
        this.isLastActive = true;
      },
      setIsFrameActive() {
        this.isFramesActive = true;
      },
    },
    watch: {
      isActive: function () {
        if (window.innerWidth >= 1200 && this.isActive === true) {
          setTimeout(this.setIsPhotoActive, 1000);
          setTimeout(this.setIsHeadingActive, 2000);
          setTimeout(this.setIsFirstElementActive, 3000);
          setTimeout(this.setIsSecondElementActive, 4000);
          setTimeout(this.setIsThirdElementActive, 5000);
          setTimeout(this.setIsFourthElementAndSmileActive, 6000);
          setTimeout(this.setIsLastActive, 7000);
          setTimeout(this.setIsFrameActive, 8000);
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
      display: flex;
    }

    &__left-side {
      height: 100%;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    &__right-side {
      display: none;
      position: relative;
      width: 76%;
      height: 100%;

      &__element {
        display: flex;
        position: absolute;

      }

      &__photo {
        width: 367px;
        height: 539px;
        padding: 10px;
        background-color: white;
      }
      &__first-element{
        top: 0;
        left: 0;
        z-index: 1;
      }
      &__second-element{
        bottom: 0;
        left: 27.5%;
        z-index: 2;
      }
      &__third-element{
        top:10%;
        right: 0;
        z-index: 1;
      }
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
    }

    &__elements-container {
      display: flex;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      align-items: center;
      flex-direction: column;
    }

    &__last-desktop {
      width: 100%;
      display: flex;
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

  @include for-big-desktop-up {
    .ddb-about-me {
      height: 100vh;

      &__container {
        display: flex;
        padding-top: 90px;
      }

      &__elements-container {
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

        &__text {
          width: 240px;
          font-size: 25px;
        }
      }

      &__left-side {
        width: 34%;
      }

      &__right-side {
        display: flex;
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
