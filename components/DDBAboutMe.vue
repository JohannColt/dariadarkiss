<template>
  <div class="ddb-about-me">
    <div class="ddb-about-me__container container">
      <div class="ddb-about-me__left-side">
        <transition name="ddb-animation-elements">
          <div class="ddb-about-me__heading">
            <h2 class="ddb-about-me__heading__text">Всем привет!</h2>
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
            <ddb-button is-big-button is-active>
              Оценить работы
            </ddb-button>
          </transition>
        </div>
      </div>
      <div class="ddb-about-me__right-side">
        <div class="ddb-about-me__right-side__element ddb-about-me__right-side__first-element">
          <div class="ddb-about-me__right-side__cont">
            <img class="ddb-about-me__right-side__photo"
                 src="/images/about-me/1.jpg" alt="about">
          </div>
        </div>
        <div class="ddb-about-me__right-side__element ddb-about-me__right-side__second-element">
            <img class="ddb-about-me__right-side__photo"
                 src="/images/about-me/2.jpg" alt="about">
        </div>
        <div class="ddb-about-me__right-side__element ddb-about-me__right-side__third-element">
          <div class="ddb-about-me__right-side__cont">
            <img class="ddb-about-me__right-side__photo"
                 src="/images/about-me/3.jpg" alt="about">
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
      padding: 64px 24px 0;
      text-align: left;
      align-items: center;
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

  @include for-large {
    .ddb-about-me {

      display: flex;
      justify-content: center;
      align-items: center;
      &__container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 104px 0 0;
      }

      &__elements-container {
        font-weight: normal;
        line-height: 32px;
      }

      &__heading {
        display: flex;

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
        padding-right: 24px;
      }

      &__right-side {
        display: flex;
        min-height: 667px;
      }
    }
  }
</style>
