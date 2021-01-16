<template v-on:scroll="isScrolled" xmlns:margin="http://www.w3.org/1999/xhtml">
  <div  class="ddb-portfolio-main">
    <div class="ddb-portfolio-main__container container">
      <div  class="ddb-portfolio-main__bread-crumb">
        <a class="ddb-portfolio-main__bread-crumb__text">
          Главная
        </a>
        <a  class="ddb-portfolio-main__bread-crumb__text ddb-portfolio-main__bread-crumb__last">
          / Портфолио
        </a>
      </div>
      <div class="ddb-portfolio-main__heading">
        <h2  class="ddb-portfolio-main__heading__text">Портфолио</h2>
      </div>
      <div class="ddb-portfolio-main__first-block">
        <div @mouseover="mouseOver" @mouseleave="mouseMove=false"  class="ddb-portfolio-main__first-block__element">
          <ddb-picture>
            <img  class="ddb-portfolio-main__first-block__element__picture"
                  v-bind:class="{'ddb-portfolio-main__first-block__element__picture__blur': mouseMove}"
                  src="/images/portfolio/2.jpg">
          </ddb-picture>
          <div>
          <a href="http://localhost:3001/portfolio-love">
            <h3 class="ddb-portfolio-main__first-block__element__title">
              Love Story
            </h3>
          </a>
            <p  v-show="mouseMove" class="ddb-portfolio-main__first-block__element__description">
              Суждение преобразует онтологический дуализм. Отвечая на вопрос о взаимоотношении идеального ли и материального ци
            </p>
            <div  class="ddb-portfolio-main__first-block__element__more">
            <ddb-button v-show="mouseMove">
              <p>
                ПОДРОБНЕЕ
              </p>
              <img class="ddb-portfolio-main__more__image" src="/images/ui-elements/anchor.png">
            </ddb-button>
            </div>
          </div>
          <ddb-portfolio-pick @mouseover="mouseOver" v-show="mouseMove" class="ddb-portfolio-main__first-block__element__ddb-picture"/>
        </div>

        <div class="ddb-portfolio-main__first-block__element">
          <ddb-picture>
            <img class="ddb-portfolio-main__first-block__element__picture" src="/images/portfolio/1.jpg">
          </ddb-picture>
          <h3 class="ddb-portfolio-main__first-block__element__title">
            Fashion
          </h3>
        </div>
      </div>
      <div class="ddb-portfolio-main__second-block">
        <div class="ddb-portfolio-main__second-block__line">
          <div class="ddb-portfolio-main__second-block__element">
            <div >
              <ddb-picture>
                <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/1.jpg">
              </ddb-picture>
            </div>
            <div class="ddb-portfolio-main__second-block__title">
              <h3 class="ddb-portfolio-main__second-block__title__text">
                Семейная
              </h3>
            </div>
          </div>
          <div class="ddb-portfolio-main__second-block__element">
            <div >
              <ddb-picture>
                <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/2.jpg">
              </ddb-picture>
            </div>
            <div class="ddb-portfolio-main__second-block__title">
              <h3 class="ddb-portfolio-main__second-block__title__text">
                Беременности
              </h3>
            </div>
          </div>
        </div>
        <div class="ddb-portfolio-main__second-block__line">
          <div class="ddb-portfolio-main__second-block__element">
            <div >
              <ddb-picture>
                <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/3.jpg">
              </ddb-picture>
            </div>
            <div class="ddb-portfolio-main__second-block__title">
              <h3 class="ddb-portfolio-main__second-block__title__text">
                Love story 2
              </h3>
            </div>
          </div>
          <div class="ddb-portfolio-main__second-block__element">
            <div >
              <ddb-picture>
                <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/4.jpg">
              </ddb-picture>
            </div>
            <div class="ddb-portfolio-main__second-block__title">
              <h3 class="ddb-portfolio-main__second-block__title__text">
                Fashion 2
              </h3>
            </div>
          </div>
        </div>
        <div class="ddb-portfolio-main__second-block__line">
          <div class="ddb-portfolio-main__second-block__element">
            <div >
              <ddb-picture>
                <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/5.jpg">
              </ddb-picture>
            </div>
            <div class="ddb-portfolio-main__second-block__title">
              <h3 class="ddb-portfolio-main__second-block__title__text">
                Семейная 2
              </h3>
            </div>
          </div>
          <div class="ddb-portfolio-main__second-block__element">
            <div >
              <ddb-picture>
                <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/6.jpg">
              </ddb-picture>
            </div>
            <div class="ddb-portfolio-main__second-block__title">
              <h3 class="ddb-portfolio-main__second-block__title__text">
                Беременности 2
              </h3>
            </div>
          </div>
        </div>
        <div class="ddb-portfolio-main__more">
          <ddb-button class="ddb-portfolio-main__more__button">
            <p class="ddb-portfolio-main__more__text">показать больше работ</p>
            <img class="ddb-portfolio-main__more__image" src="/images/ui-elements/anchor.png">
          </ddb-button>
          <img id="arrow" v-on:click="clicked" class="ddb-portfolio-main__more__arrow" src="/images/ui-elements/ArrowOnBrown.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DDBPicture from "@/components/DDBPicture";
import DDBButton from "@/components/DDBButton";
import DDBPortfolioPick from "@/components/DDBPortfolioPick";
export default {
  components: {
    'ddb-button': DDBButton,
    'ddb-picture': DDBPicture,
    'ddb-portfolio-pick' : DDBPortfolioPick
  },
  mounted () {
    window.addEventListener('scroll', this.isScrolled);
    if(window.innerWidth < 960){
      this.mouseMove= true
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.isScrolled);
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    mouseMove:{
      type: Boolean,
      default: false
    }
  },
  methods:{
    clicked(){
      let arrow = document.getElementById("arrow")
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      arrow.style.display = "none"
    },
    isScrolled(){
      let arrow = document.getElementById("arrow")
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        arrow.style.display = "block"
      }
      else {
        arrow.style.display = "none"
      }
    },
    mouseOver(){
      this.mouseMove = true;
    }
  },
  name: "DDBPortfolioMain",
}
</script>

<style lang="scss" scoped>
.ddb-portfolio-main{
  display: flex;
  align-items: center;
  justify-content: center;
  &__container{
    padding-left: 0;
    display: flex;
    flex-direction: column;
  }
  &__bread-crumb{
    &__text{
      margin-top: 40px;
      margin-bottom: 0;
    }
    &__last{
      color: #afa6a6;
    }
  }
  &__heading{
    &__text{
      margin-top: 24px;
      margin-bottom: 12px;
    }
  }
  &__first-block{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__element{
      padding-top: 12px;
      padding-bottom: 12px;
      position: relative;

      &__picture{
        width: 100%;
        height: 267px;
        object-fit: cover;
        object-position: 50% 0;
        border-top: 6px;
        border-bottom: 6px;
        border-left: 0;
        border-right: 0;
        border-color: white;
        border-style: solid;
        &__blur{
          filter: blur(10px);
        }
      }
      &__title{
        position: absolute;
        left: 24px;
        top:24px;
        margin: 0;
      }
      &__description{
        margin: 0;
        position: absolute;
        left: 24px;
        top:96px;
        width: 312px;
      }
      &__more{
        display: flex;
        position: absolute;
        left: 20px;
        top: 210px;
        height: 32px;
        width: 100px;
        margin: 0;
      }
      &__ddb-picture{
        display: none;
        position: absolute;
        right: 12px;
        bottom: 36px;
        width: 833px;
      }
    }
  }
  &__second-block{
    width: 100%;
    display: flex;
    flex-direction: column;
    &__line{
      display: flex;
      flex-direction: column;
    }
    &__element{
      padding: 8px;
      width: 100%;
      display: flex;
      flex-direction: column;

    }
    &__picture{
      border: 6px white solid;
      width: 100%;
      height: 213px;
    }
    &__title{
      &__text{
        margin-top: 8px;
        margin-bottom: 16px;
      }
    }
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
      display: none;
      object-fit: none;
      position: fixed;
      width: 64px;
      height: 64px;
      right: calc((100vw - 1260px) / 2 + 48px);
      bottom: 1%;
    }
  }
  @include for-large{
    .ddb-portfolio-main{
      &__container{
        padding: 64px 24px 0;

      }
      &__first-block{
        &__element{
          &__picture{
            height: 339px;
            border-top: 12px;
            border-bottom: 12px;
            border-left: 0;
            border-right: 0;
            border-color: white;
            border-style: solid;
          }
          &__title{
            left: 90px;
            top: 64px;
          }
          &__description{
          }
          &__ddb-picture{
            display: flex;
          }
        }
      }
      &__second-block{
        &__line{
          flex-direction: row;
        }
        &__element{
          width: 50%;
        }
        &__picture{
          border: 12px white solid;
          width: 100%;
          height: 350px;
        }
      }
    }
  }
}
</style>
