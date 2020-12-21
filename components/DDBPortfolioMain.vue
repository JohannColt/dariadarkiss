<template>
<div class="ddb-portfolio-main">
  <div class="ddb-portfolio-main__container container">
    <div class="ddb-portfolio-main__bread-crumb">
  <a class="ddb-portfolio-main__bread-crumb__text">
  Главная
  </a>
      <a class="ddb-portfolio-main__bread-crumb__text ddb-portfolio-main__bread-crumb__last">
        / Портфолио
      </a>
    </div>
    <div class="ddb-portfolio-main__heading">
      <h2 class="ddb-portfolio-main__heading__text">Портфолио</h2>
    </div>
    <div class="ddb-portfolio-main__first-block">
      <a href="http://localhost:3001/portfolio-love">
      <div  class="ddb-portfolio-main__first-block__element">
        <img  class="ddb-portfolio-main__first-block__element__picture" src="/images/portfolio/2.jpg">
        <h3 class="ddb-portfolio-main__first-block__element__title">
          Love Story
        </h3>
      </div>
      </a>
      <div class="ddb-portfolio-main__first-block__element">
        <img class="ddb-portfolio-main__first-block__element__picture" src="/images/portfolio/1.jpg">
        <h3 class="ddb-portfolio-main__first-block__element__title">
          Fashion
        </h3>
      </div>
    </div>
    <div class="ddb-portfolio-main__second-block">
      <div class="ddb-portfolio-main__second-block__line">
        <div class="ddb-portfolio-main__second-block__element">
          <div >
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/1.jpg">
          </div>
          <div class="ddb-portfolio-main__second-block__title">
            <h3 class="ddb-portfolio-main__second-block__title__text">
              Семейная
            </h3>
          </div>
        </div>
        <div class="ddb-portfolio-main__second-block__element">
          <div >
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/2.jpg">

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
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/3.jpg">

          </div>
          <div class="ddb-portfolio-main__second-block__title">
            <h3 class="ddb-portfolio-main__second-block__title__text">
              Love story 2
            </h3>
          </div>
        </div>
        <div class="ddb-portfolio-main__second-block__element">
          <div >
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/4.jpg">

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
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/5.jpg">

          </div>
          <div class="ddb-portfolio-main__second-block__title">
            <h3 class="ddb-portfolio-main__second-block__title__text">
              Семейная 2
            </h3>
          </div>
        </div>
        <div class="ddb-portfolio-main__second-block__element">
          <div >
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/6.jpg">
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
        <img class="ddb-portfolio-main__more__arrow" src="/images/ui-elements/ArrowOnBrown.png">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import DDBButton from "@/components/DDBButton";
export default {
  components: {
    'ddb-button': DDBButton
  },
name: "DDBPortfolioMain"
}
</script>

<style lang="scss" scoped>
.ddb-portfolio-main{
  display: flex;
  justify-content: center;
  align-items: center;
  &__container{
    padding-top: 48px;
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
    flex-direction: column;
    &__element{
      padding-top: 12px;
      padding-bottom: 12px;
      width: 100%;
      position: relative;

      &__picture{
        width: 100%;
        height: 267px;
        object-fit: cover;
        object-position: 50% 0;
        border-top: 12px;
        border-bottom: 12px;
        border-left: 0;
        border-right: 0;
        border-color: white;
        border-style: solid;

      }
      &__title{
        position: absolute;
        left: 20%;
        top:20%;

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
      border: 12px white solid;
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
          }
          &__title{
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
          height: 350px;
        }
      }
    }
  }
}
</style>
