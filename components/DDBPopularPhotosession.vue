<template>
  <div class="ddb-popular">
    <div class="ddb-popular__container container">
      <div class="ddb-popular__heading">
        <h2 class="ddb-popular__heading__text ddb-popular__heading__text__mobile">
          Популярные<br/> фотосессии
        </h2>
        <h2 class="ddb-popular__heading__text ddb-popular__heading__text__desktop">
          Популярные фотосессии
        </h2>
      </div>
      <div class="ddb-popular__blocks">
        <div class="ddb-popular__double">
          <div class="ddb-popular__element ddb-popular__element__left ddb-popular__element__upper">
            <div class="ddb-popular__photo ddb-popular__photo__mobile">
              <img class="ddb-popular__image" src="images/ui-elements/big-smile.jpg">
            </div>
            <div class="ddb-popular__photo ddb-popular__photo__desktop">
              <img src="images/ui-elements/pop-photo-h.png">
            </div>
            <div class="ddb-popular__description">
              <p class="ddb-popular__description__ps">Фотосессия</p>
              <h3 class="ddb-popular__description__name">Love Story</h3>
              <p class="ddb-popular__description__des">Отличный способ для влюбленной пары провести время вместе,
                сохранив
                воспоминания. Съёмка может проходить как в студии, так и на улице.</p>
              <div class="ddb-popular__description__button">
                <ddb-button class="ddb-popular__description__more">Подробнее</ddb-button>
                <img class="ddb-popular__description__line" src="images/ui-elements/button-line.png">
              </div>
            </div>
          </div>
          <div class="ddb-popular__element ddb-popular__element__right ddb-popular__element__upper">
            <div class="ddb-popular__photo ddb-popular__photo__mobile">
              <img class="ddb-popular__image" src="images/ui-elements/big-smile.jpg">
            </div>
            <div class="ddb-popular__photo ddb-popular__photo__desktop">
              <img src="images/ui-elements/pop-photo-h1.png">
            </div>
            <div class="ddb-popular__description">
              <p class="ddb-popular__description__ps">Фотосессия</p>
              <h3 class="ddb-popular__description__name">Fashion</h3>
              <p class="ddb-popular__description__des">Идеальное решение для личного профайла или сайта. Это хороший
                способ для девушек и мужчин, подчеркнуть свою индивидуальность.</p>
              <div class="ddb-popular__description__button">
                <ddb-button class="ddb-popular__description__more">Подробнее</ddb-button>
                <img class="ddb-popular__description__line" src="images/ui-elements/button-line.png">
              </div>
            </div>
          </div>
        </div>
        <div class="ddb-popular__double">
          <div class="ddb-popular__element ddb-popular__element__left ddb-popular__element__lower">
            <div class="ddb-popular__photo ddb-popular__photo__mobile">
              <img class="ddb-popular__image" src="images/ui-elements/big-smile.jpg">
            </div>
            <div class="ddb-popular__photo ddb-popular__photo__desktop">
              <img src="images/ui-elements/pop-photo-h2.png">
            </div>
            <div class="ddb-popular__description">
              <p class="ddb-popular__description__ps">Фотосессия</p>
              <h3 class="ddb-popular__description__name">Семейная</h3>
              <p class="ddb-popular__description__des"> Идеальное решение для семьи сохранить светлые воспоминания в
                виде фотографий, провести время вместе и оставить яркие моменты в памяти.</p>
              <div class="ddb-popular__description__button">
                <ddb-button class="ddb-popular__description__more">Подробнее</ddb-button>
                <img class="ddb-popular__description__line" src="images/ui-elements/button-line.png">
              </div>
            </div>
          </div>
          <div class="ddb-popular__element ddb-popular__element__right ddb-popular__element__lower">
            <div class="ddb-popular__photo ddb-popular__photo__mobile">
              <img class="ddb-popular__image" src="images/ui-elements/big-smile.jpg">
            </div>
            <div class="ddb-popular__photo ddb-popular__photo__desktop">
              <img src="images/ui-elements/pop-photo-h3.png">
            </div>
            <div class="ddb-popular__description">
              <p class="ddb-popular__description__ps">Фотосессия</p>
              <h3 class="ddb-popular__description__name">Беременности</h3>
              <p class="ddb-popular__description__des">Отличный способ для беременной девушки сохранить память о самом
                сильном и азартном ожидании, которое когда-либо приходилось испытывать.</p>
              <div class="ddb-popular__description__button">
                <ddb-button class="ddb-popular__description__more">Подробнее</ddb-button>
                <img class="ddb-popular__description__line" src="images/ui-elements/button-line.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DDBButton from "./DDBButton";
  export default {
    components:{
      'ddb-button': DDBButton
    },
    name: "DDBPopularPhotosession"
  }
</script>

<style lang="scss" scoped>
  .ddb-popular {
    display: flex;
    justify-content: center;
    align-items: center;
    &__container {
      display: flex;
      flex-direction: column;
    }

    &__heading {
      display: flex;
      text-align: left;
      padding-left: 24px;

      &__text {
        margin-top: 24px;
        margin-bottom: 6px;

        &__desktop {
          display: none;
        }
      }
    }

    &__blocks {
      justify-content: center;
      display: flex;
      flex-direction: column;
    }

    &__element {
      box-shadow: 0 0 31.7802px rgba(63, 45, 45, 0.08);

      display: flex;
      flex-direction: column;
      margin-top: 16px;
      margin-bottom: 0;
    }

    &__photo {
      &__mobile {
        height: 160px;
        position: relative;
        display: flex;
      }

      &__desktop {
        display: none;
      }
    }

    &__image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
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
        justify-content: left;
        text-align: left;
        display: flex;
        flex-direction: column;
        position: relative;
      }

      &__more {
        width: 102px;
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
        bottom: 44px;
        left: 0;
        width: 102px;
        height: 1px;
      }
    }
  }

  @include for-extra-large {
    .ddb-popular {
      &__container {
        padding-top: 80px;

      }

      &__heading {
        padding: 0;

        &__text {
          &__mobile {
            display: none;
          }

          &__desktop {
            display: block;
          }
        }
      }

      &__blocks {
        justify-content: center;
        align-items: center;
      }

      &__double {
        display: flex;
        flex-direction: row;
      }

      &__element {
        max-width: 622px;
        max-height: 350px;
        display: flex;
        flex-direction: row;
        &__left {
          margin-right: 8px;
        }

        &__right {
          margin-left: 8px;
        }

        &__upper {
          margin-bottom: 8px;
        }

        &__lower {
          margin-top: 8px;
        }
      }

      &__photo {
        &__mobile {
          display: none;
        }

        &__desktop {
          display: flex;
        }
      }

      &__description {
        min-width: 410px;
        max-width: 414px;
        padding-left: 16px;
        padding-right: 32px;
        &__ps {
          margin-top: 32px;
          font-weight: normal;
          font-size: 16px;
          line-height: 32px;
        }

        &_name {

        }

        &__des {
          font-weight: normal;
          font-size: 16px;
          line-height: 32px;
        }

        &__button {

        }

        &__more {
          margin-bottom: 54px;
        }

        &__line {
          bottom: 55px;
        }
      }

    }
  }
  @include for-medium{
    .ddb-popular{
      &__photo{
        &__mobile{
          height: 320px;
        }
      }
    }
  }
  @include for-large{

    .ddb-popular{
      &__photo{
        &__mobile{
          height: 380px;
        }
      }
    }
  }
</style>
