<template>
  <div class="ddb-popular">
    <div class="ddb-popular__container container">
      <div class="ddb-popular__heading">
        <h3 class="ddb-popular__heading__text">
          Популярные<br/> фотосессии
        </h3>
      </div>
      <div class="ddb-popular__blocks">
        <div class="ddb-popular__element">
          <div class="ddb-popular__photo">
            <img src="images/ui-elements/pop-photo.png">
          </div>
          <div class="ddb-popular__description">
            <p class="ddb-popular__description__ps">Фотосессия</p>
            <p class="ddb-popular__description__name">Love Story</p>
            <p class="ddb-popular__description__des">Отличный способ для влюбленной пары провести время вместе, сохранив
              воспоминания. Съёмка может проходить как в студии, так и на улице.</p>
            <div class="ddb-popular__description__button">
              <p class="ddb-popular__description__more">Подробнее</p>
              <img class="ddb-popular__description__line" src="images/ui-elements/button-line.png">
            </div>
          </div>
        </div>
        <div class="ddb-popular__element">
          <div class="ddb-popular__photo">
            <img src="images/ui-elements/pop-photo1.png">
          </div>
          <div class="ddb-popular__description">
            <p class="ddb-popular__description__ps">Фотосессия</p>
            <p class="ddb-popular__description__name">Fashion</p>
            <p class="ddb-popular__description__des">Идеальное решение для личного профайла или сайта. Это хороший
              способ для девушек и мужчин, подчеркнуть свою индивидуальность.</p>
            <div class="ddb-popular__description__button">
              <p class="ddb-popular__description__more">Подробнее</p>
              <img class="ddb-popular__description__line" src="images/ui-elements/button-line.png">
            </div>
          </div>
        </div>
        <div class="ddb-popular__element">
          <div class="ddb-popular__photo">
            <img src="images/ui-elements/pop-photo2.png">
          </div>
          <div class="ddb-popular__description">
            <p class="ddb-popular__description__ps">Фотосессия</p>
            <p class="ddb-popular__description__name">Семейная</p>
            <p class="ddb-popular__description__des">Отличный способ для влюбленной пары провести время вместе, сохранив
              воспоминания. Съёмка может проходить как в студии, так и на улице.</p>
            <div class="ddb-popular__description__button">
              <p class="ddb-popular__description__more">Подробнее</p>
              <img class="ddb-popular__description__line" src="images/ui-elements/button-line.png">
            </div>
          </div>
        </div>
        <div class="ddb-popular__element">
          <div class="ddb-popular__photo">
            <img src="images/ui-elements/pop-photo3.png">
          </div>
          <div class="ddb-popular__description">
            <p class="ddb-popular__description__ps">Фотосессия</p>
            <p class="ddb-popular__description__name">Беременности</p>
            <p class="ddb-popular__description__des">Отличный способ для беременной девушки сохранить память о самом
              сильном и азартном ожидании, которое когда-либо приходилось испытывать.</p>
            <div class="ddb-popular__description__button">
              <p class="ddb-popular__description__more">Подробнее</p>
              <img class="ddb-popular__description__line" src="images/ui-elements/button-line.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBPopularPhotosession"
  }
</script>

<style lang="scss" scoped>
  .ddb-popular {
    &__container {
      display: flex;
      flex-direction: column;
    }

    &__heading {
      display: flex;
      text-align: left;
      padding-left: 24px;

      &__text {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        margin-top: 64px;
        margin-bottom: 24px;
      }
    }

    &__blocks {
      display: flex;
      flex-direction: column;
    }

    &__element {
      margin-top: 16px;
      margin-bottom: 0;
    }

    &__photo {
      object-fit: none;
      height: 160px;
      width: 360px;
    }

    &__description {
      background-color: white;
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 0 24px;

      &__ps {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
        margin-top: 16px;
        margin-bottom: 0;
      }

      &__name {
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
      }

      &__des {
        margin-top: 16px;
        margin-bottom: 0;
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
      }

      &__button {
        display: flex;
        flex-direction: column;
        position: relative;
      }

      &__more {
        margin-top: 24px;
        margin-bottom: 43px;
        font-weight: bold;
        font-size: 14px;
        line-height: 32px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      &__line {
        display: block;
        position: absolute;
        bottom: 43px;
        left: 0;
        width: 102px;
        height: 1px;
      }
    }
  }
</style>
