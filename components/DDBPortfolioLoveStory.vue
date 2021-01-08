<template v-on:scroll="isScrolled">
  <div class="ddb-portfolio-love-story">
    <div class="ddb-portfolio-love-story__container container">
      <div class="ddb-portfolio-love-story__bread-crumb">
        <a class="ddb-portfolio-love-story__bread-crumb__text">
          Главная / Портфолио
        </a>
        <a class="ddb-portfolio-love-story__bread-crumb__text ddb-portfolio-love-story__bread-crumb__text__last">
          / Love Story
        </a>
      </div>
      <div class="ddb-portfolio-love-story__line">
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__left">
          <h2 class="ddb-portfolio-love-story__element__description">Love story</h2>
          <p class="ddb-portfolio-love-story__element__description">Суждение преобразует онтологический дуализм. Отвечая на вопрос о взаимоотношении идеального ли и материального ци</p>
          <p class="ddb-portfolio-love-story__element__description ddb-portfolio-love-story__element__second-des">Дай Чжень заявлял, что суждение выводит сенсибельный гений. Единственной космической субстанцией</p>
          <ddb-button v-on:click="isActive= true; changeToOneHeader()"  class="ddb-portfolio-love-story__element__description__button">
            <p class="ddb-portfolio-love-story__element__description__text">заказать фотосессию</p>
            <img class="ddb-portfolio-love-story__element__description__anchor" src="/images/ui-elements/anchor.png">
          </ddb-button>
        </div>
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__central">
          <ddb-picture>
            <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/1.jpg">
          </ddb-picture>
          <h3 class="ddb-portfolio-love-story__element__name">11 Mirrors</h3>
        </div>
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__right">
          <ddb-picture>
            <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/2.jpg">
          </ddb-picture>
          <h3 class="ddb-portfolio-love-story__element__name">Cinderella story</h3>
        </div>
      </div>
      <div class="ddb-portfolio-love-story__line">
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__left">
          <ddb-picture>
            <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/3.jpg">
          </ddb-picture>
          <h3 class="ddb-portfolio-love-story__element__name">Тимур+Катерина</h3>
        </div>
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__central">
          <ddb-picture>
            <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/4.jpg">
          </ddb-picture>
          <h3 class="ddb-portfolio-love-story__element__name">Zinchenko Wedding</h3>
        </div>
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__right">
          <a href="http://localhost:3001/portfolio-florence">
            <ddb-picture>
              <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/5.jpg">
            </ddb-picture>
            <h3 class="ddb-portfolio-love-story__element__name">Florence Love</h3>
          </a>
        </div>
      </div>
      <div class="ddb-portfolio-love-story__line">
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__left">
          <ddb-picture>
            <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/6.jpg">
          </ddb-picture>
          <h3 class="ddb-portfolio-love-story__element__name">Côte d’Azur</h3>
        </div>
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__central">
          <ddb-picture>
            <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/1.jpg">
          </ddb-picture>
          <h3 class="ddb-portfolio-love-story__element__name">Light me up!</h3>
        </div>
        <div class="ddb-portfolio-love-story__element ddb-portfolio-love-story__element__right">
          <ddb-picture>
            <img class="ddb-portfolio-love-story__picture" src="/images/portfolio/2.jpg">
          </ddb-picture>
          <h3 class="ddb-portfolio-love-story__element__name">Paris Mon Amour</h3>
        </div>
      </div>
      <div class="ddb-portfolio-love-story__more">
        <ddb-button class="ddb-portfolio-love-story__more__button">
          <p class="ddb-portfolio-love-story__more__text">показать больше работ</p>
          <img class="ddb-portfolio-love-story__more__image" src="/images/ui-elements/anchor.png">
        </ddb-button>
        <img id="arrow-ls" class="ddb-portfolio-love-story__more__arrow" src="/images/ui-elements/ArrowOnBrown.png">
      </div>
    </div>
    <div v-show="isActive" class="ddb-portfolio-love-story__form">
      <div v-on:click="isActive=false; changeToZeroHeader()" class="ddb-portfolio-love-story__form__background">
      </div>
      <div class="ddb-portfolio-love-story__form__user-interface">
        <ddb-send-to-me class="ddb-portfolio-love-story__form__send-to-me"/>
        <img v-on:click="isActive=false; changeToZeroHeader()" class="ddb-portfolio-love-story__form__cross" src="/images/ui-elements/cross.png">
      </div>
    </div>
  </div>
</template>

<script>
import DDBButton from "@/components/DDBButton";
import DDBSendToMe from "@/components/DDBSendToMe";
import DDBPicture from "@/components/DDBPicture";
export default {
  components: {
    'ddb-button': DDBButton,
    'ddb-send-to-me': DDBSendToMe,
    'ddb-picture': DDBPicture
  },
  data() {
    return {
      isActive: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.isScrolled);
  },
  destroyed () {
    window.removeEventListener('scroll', this.isScrolled);
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  methods:{
    changeToOneHeader(){
      this.$store.commit('changeToOneHeader')
      // console.log(this.$store.state.headerState)
    },
    changeToZeroHeader(){
      this.$store.commit('changeToZeroHeader')
      // console.log(this.$store.state.headerState)
    },
    clicked(){
      let arrow = document.getElementById("arrow-ls")
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      arrow.style.display = "none"
    },
    isScrolled(){
      let arrow = document.getElementById("arrow-ls")
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        arrow.style.display = "block"
      }
      else {
        arrow.style.display = "none"
      }
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
    padding-top: 48px;
    display: flex;
    flex-direction: column;

  }
  &__bread-crumb{
    &__text{
      margin-top: 40px;
      margin-bottom: 0;
      &__last{
        color: #afa6a6;
      }
    }
  }
  &__line{
    display: flex;
    flex-direction: column;
  }
  &__element{
    padding-left: 24px;
    padding-right: 24px;
    &__second-des{
      display: none;
    }
    &__description{
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
    &__name{
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
  &__picture{
    width: 312px;
    height: 312px;
    object-fit: cover;
    border: 6px white solid;
  }
  &__more{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

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
      position: absolute;
      bottom: 1px;
      height: 1px;
      width: 96px;
    }
    &__arrow{
      object-fit: none;
      position: fixed;
      width: 64px;
      height: 64px;
      right: calc((100vw - 1260px) / 2);
      bottom: 1%;
    }
  }
  &__form{
    top: 64px;
    z-index: 4;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &__user-interface{
      position: relative;
    }
    &__background{
      top: -56px;
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
      width: 100vw;
      background: #F0ECEC;
    }
    &__cross{
      width: 16px;
      height: 16px;
      z-index: 5;
      opacity: 1;
      position: absolute;
      top: -50px;
      right: 10px;
      cursor: pointer;
    }
  }
}
@include for-large{
  .ddb-portfolio-love-story{
    &__container{
      padding-top: 64px;
    }
    &__element{
      &__description{
        width: 404px;
      }
      &__left{
        padding-right: 12px;
        padding-left: 0;
      }
      &__central{
        padding-left: 12px;
        padding-right: 12px;
      }
      &__right{
        padding-left: 12px;
        padding-right: 0;
      }
    }
    &__picture{
      width: 404px;
      height: 404px;
      border: 12px white solid;

    }
    &__line{
      flex-direction: row;
    }
    &__form{
      top: 64px;
      z-index: 4;
      position: fixed;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      &__user-interface{
        position: relative;
      }
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
        width: 64px;
        height: 64px;
        z-index: 5;
        opacity: 1;
        position: absolute;
        top: 32px;
        right: -80px;
        cursor: pointer;
      }
    }
  }
}
</style>
