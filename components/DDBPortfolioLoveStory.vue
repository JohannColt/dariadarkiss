<template>
<div class="ddb-portfolio-love-story">
  <div class="ddb-portfolio-love-story__container container">
    <div class="ddb-portfolio-love-story__bread-crumb">
      <p>
        Главная/Портфолио/Love Story
      </p>
    </div>
    <div class="ddb-portfolio-love-story__line">
    <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__left">
      <h2 class="ddb-portfolio-love-story__element__description">Love story</h2>
      <p class="ddb-portfolio-love-story__element__description">Суждение преобразует онтологический дуализм. Отвечая на вопрос о взаимоотношении идеального ли и материального ци</p>
      <p class="ddb-portfolio-love-story__element__description">Дай Чжень заявлял, что суждение выводит сенсибельный гений. Единственной космической субстанцией</p>
      <ddb-button v-on:click="isActive=!isActive" class="ddb-portfolio-love-story__element__description__button">
        <p class="ddb-portfolio-love-story__element__description__text">заказать фотосессию</p>
        <img class="ddb-portfolio-love-story__element__description__anchor" src="/images/ui-elements/anchor.png">
      </ddb-button>
    </div>
      <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__central">
        <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/1.jpg">
        <h3>11 Mirrors</h3>
      </div>
      <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__right">
        <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/2.jpg">
        <h3>Cinderella story</h3>
      </div>
    </div>
    <div class="ddb-portfolio-love-story__line">
      <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__left">
        <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/3.jpg">
        <h3>Тимур+Катерина</h3>
      </div>
      <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__central">
        <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/4.jpg">
        <h3>Zinchenko Wedding</h3>
      </div>
      <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__right">
        <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/5.jpg">
        <h3>Florence Love</h3>
      </div>
    </div>
    <div class="ddb-portfolio-love-story__line">
      <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__left">
        <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/6.jpg">
        <h3>Côte d’Azur</h3>
      </div>
      <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__central">
        <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/1.jpg">
        <h3>Light me up!</h3>
      </div>
      <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__right">
        <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/2.jpg">
        <h3>Paris Mon Amour</h3>
      </div>
    </div>
    <div class="ddb-portfolio-love-story__more">
      <ddb-button class="ddb-portfolio-love-story__more__button">
      <p class="ddb-portfolio-love-story__more__text">показать больше работ</p>
        <img class="ddb-portfolio-love-story__more__image" src="/images/ui-elements/anchor.png">
      </ddb-button>
      <img class="ddb-portfolio-love-story__more__arrow" src="/images/ui-elements/ArrowOnBrown.png">
    </div>
  </div>
      <div v-show="isActive" class="ddb-portfolio-love-story__form">
        <div class="ddb-portfolio-love-story__form__background">
        </div>
        <ddb-send-to-me class="ddb-portfolio-love-story__form__send-to-me"/>
        <img v-on:click="isActive=!isActive" class="ddb-portfolio-love-story__form__cross" src="/images/ui-elements/cross.png">
      </div>
</div>
</template>

<script>
import DDBButton from "@/components/DDBButton";
import DDBSendToMe from "@/components/DDBSendToMe";
export default {
  components: {
    'ddb-button': DDBButton,
    'ddb-send-to-me': DDBSendToMe
  },
  data() {
    return {
      isActive: false
    }
  },
name: "DDBPortfolioLoveStory"
}
</script>

<style lang="scss" scoped>
.ddb-portfolio-love-story{
  display: flex;
  justify-content: center;
  align-items: center;
  &__container{
    z-index: 3;
    padding-top: 64px;
    display: flex;
    flex-direction: column;

  }
  &__line{
    display: flex;
  }
  &__element{
    &__left{
      padding-right: 12px;
    }
    &__central{
      padding-left: 12px;
      padding-right: 12px;
    }
    &__right{
      padding-left: 12px;
    }
    &__description{
      width: 404px;
      &__button{
        position: relative;
        height: 32px;
        margin-top: 16px;
        margin-bottom: 16px;
        padding: 0;
      }
      &__text{
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 32px;
        margin: 0;
        text-transform: uppercase;

      }
      &__anchor{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 96px;
      }
    }
  }
  &__picture{
    width: 404px;
    height: 404px;
    object-fit: cover;
    border: 12px white solid;
  }
  &__more{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &__button{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 32px;
      margin-top: 16px;
      margin-bottom: 16px;
      padding: 0;
    }
    &__text{
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 32px;
      margin: 0;
      text-transform: uppercase;
    }
    &__image{
      width: 96px;
    }
    &__arrow{
      position: absolute;
      width: 64px;
      height: 64px;
      right: 0;
    }
  }
  &__form{
    top: 0;
    z-index: 4;
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    &__background{
      z-index: 4;
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: #3F2D2D;
      opacity: 0.9;
    }
    &__send-to-me{
      position: relative;
      z-index: 5;
      opacity: 1;
      width: 853px;
      background: #F0ECEC;
    }
    &__cross{
      z-index: 5;
      opacity: 1;
      position: absolute;
      top: 15%;
      right: 15%;
    }
  }
}
</style>
