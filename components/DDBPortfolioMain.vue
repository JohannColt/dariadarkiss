<template>
<div class="ddb-portfolio-main">
  <div class="ddb-portfolio-main__container container">
    <div class="ddb-portfolio-main__bread-crumb">
  <p>
  Главная/Портфолио
  </p>
    </div>
    <div class="ddb-portfolio-main__heading">
      <h2>Портфолио</h2>
    </div>
    <div class="ddb-portfolio-main__first-block">
      <div class="ddb-portfolio-main__first-block__element">
        <img class="ddb-portfolio-main__first-block__element__picture" src="/images/portfolio/2.jpg">
        <h3 class="ddb-portfolio-main__first-block__element__title">
          Love Story
        </h3>
      </div>
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
            <h3>
              Семейная
            </h3>
          </div>
        </div>
        <div class="ddb-portfolio-main__second-block__element">
          <div >
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/2.jpg">

          </div>
          <div class="ddb-portfolio-main__second-block__title">
            <h3>
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
            <h3>
              Love story 2
            </h3>
          </div>
        </div>
        <div class="ddb-portfolio-main__second-block__element">
          <div >
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/4.jpg">

          </div>
          <div class="ddb-portfolio-main__second-block__title">
            <h3>
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
            <h3>
              Семейная 2
            </h3>
          </div>
        </div>
        <div class="ddb-portfolio-main__second-block__element">
          <div >
            <img class="ddb-portfolio-main__second-block__picture" src="/images/portfolio/6.jpg">
          </div>
          <div class="ddb-portfolio-main__second-block__title">
            <h3>
              Беременности 2
            </h3>
          </div>
        </div>
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
    padding: 64px 24px 0;
    display: flex;
    flex-direction: column;
   }
  &__first-block{
    display: flex;
    flex-direction: column;
    &__element{
      width: 100%;
      position: relative;

      &__picture{
        width: 100%;
        height: 339px;
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
      flex-direction: row;
    }
    &__element{
      padding: 8px;
      width: 50%;
      display: flex;
      flex-direction: column;

    }
    &__picture{
      border: 12px white solid;
      width: 100%;
      height: 350px;
    }
  }

}
</style>
