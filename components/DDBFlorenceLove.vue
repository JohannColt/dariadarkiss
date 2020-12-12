<template>
  <div class="ddb-portfolio-florence-love">
    <div class="ddb-portfolio-florence-love__container container">
      <div class="ddb-portfolio-florence-love__bread-crumb">
        <p>
          Главная/Портфолио/Love Story/Florence Love
        </p>
      </div>
      <div class="ddb-portfolio-florence-love__description">
        <h2>
          Florence Love
        </h2>
      </div>
      <div class="ddb-portfolio-florence-love__line ddb-portfolio-florence-love__first-line">
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__left">
          <img class="ddb-portfolio-florence-love__big-picture" src="/images/portfolio/1.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__central">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/2.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__first-line__third ddb-portfolio-florence-love__right">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/3.jpg">
        </div>
      </div>
      <div class="ddb-portfolio-florence-love__line ddb-portfolio-florence-love__second-line">
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__left">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/4.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__central">
          <img class="ddb-portfolio-florence-love__big-picture" src="/images/portfolio/5.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__right">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/6.jpg">
        </div>
      </div>
      <div class="ddb-portfolio-florence-love__line ddb-portfolio-florence-love__third-line">
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__left">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/1.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__central">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/2.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__right">
          <img class="ddb-portfolio-florence-love__big-picture" src="/images/portfolio/3.jpg">
        </div>
      </div>
      <div class="ddb-portfolio-florence-love__line ddb-portfolio-florence-love__four-line">
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__left">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/4.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__central">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/5.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__central">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/6.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__right">
          <img class="ddb-portfolio-florence-love__small-picture" src="/images/portfolio/1.jpg">
        </div>
      </div>
      <div class="ddb-portfolio-florence-love__line ddb-portfolio-florence-love__five-line">
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__left">
          <img class="ddb-portfolio-florence-love__big-picture" src="/images/portfolio/1.jpg">
        </div>
        <div class="ddb-portfolio-florence-love__element ddb-portfolio-florence-love__right">
          <img class="ddb-portfolio-florence-love__big-picture" src="/images/portfolio/2.jpg">
        </div>
      </div>
      <div class="ddb-portfolio-florence-love__more">
        <ddb-button class="ddb-portfolio-florence-love__more__button">
          <p class="ddb-portfolio-florence-love__more__text">показать больше работ</p>
          <img class="ddb-portfolio-florence-love__more__image" src="/images/ui-elements/anchor.png">
        </ddb-button>
        <img class="ddb-portfolio-florence-love__more__arrow" src="/images/ui-elements/ArrowOnBrown.png">
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
name: "DDBFlorenceLove"
}
</script>

<style lang="scss" scoped>
.ddb-portfolio-florence-love{
  display: flex;
  justify-content: center;
  align-items: center;
  &__container{
    padding-top: 64px;
    display: flex;
    flex-direction: column;
  }
  &__line{
    height: 100%;
    width: 100%;
    display: flex;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  &__element{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__left{
    padding-right: 8px;
  }
  &__central{
    padding-left: 8px;
    padding-right: 8px;
  }
  &__right{
    padding-left: 8px;
  }
  &__small-picture{
    width: 303px;
    height: 445px;
    object-fit: cover;
    border: 12px white solid;
  }
  &__big-picture{
    width: 622px;
    height: 445px;
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
}
</style>
