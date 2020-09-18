<template>
  <div class="ddb-instagram">
    <div class="ddb-instagram__container container">
      <div class="ddb-instagram__heading">
        <h2 class="ddb-instagram__heading__text">
          Следи за актуальными <br> фотосессиями <br class="ddb-instagram__heading__br"> в Instagram
        </h2>
        <div class="ddb-instagram__logo">
          <p class="ddb-instagram__logo__text">@dariadarkiss</p>
          <img src="images/ui-elements/instagram.svg">
        </div>
      </div>
      <div class="ddb-instagram__blocks">
        <div class="ddb-instagram__element">
          <div class="ddb-instagram__square ddb-instagram__square__left">
            <img class="ddb-instagram__picture" src="images/instagram/inst1.jpg">
            <img class="ddb-instagram__image" src="images/ui-elements/image6.png">
          </div>
          <div class="ddb-instagram__square ddb-instagram__square__right">
            <img class="ddb-instagram__picture" src="images/instagram/inst2.jpg">
            <img class="ddb-instagram__image" src="images/ui-elements/image7.png">

          </div>
        </div>
        <div class="ddb-instagram__element">
          <div class="ddb-instagram__square ddb-instagram__square__left ddb-instagram__square__central">
            <img class="ddb-instagram__picture" src="images/instagram/inst3.jpg">
            <img class="ddb-instagram__image" src="images/ui-elements/image7.png">

          </div>
          <div class="ddb-instagram__square ddb-instagram__square__right ddb-instagram__square__central">
            <img class="ddb-instagram__picture" src="images/instagram/inst4.jpeg">
            <img class="ddb-instagram__image" src="images/ui-elements/image7.png">
          </div>
        </div>
        <div class="ddb-instagram__element">
          <div class="ddb-instagram__square ddb-instagram__square__left">
            <img class="ddb-instagram__picture" src="images/instagram/inst5.jpeg">
          </div>
          <div class="ddb-instagram__square ddb-instagram__square__right">
            <img class="ddb-instagram__picture" src="images/instagram/inst6.jpg">
          </div>
        </div>
      </div>
      <div class="ddb-instagram__blocks-desktop">
        <div class="ddb-instagram__element">
          <div class="ddb-instagram__square  ddb-instagram__square__top">
            <img class="ddb-instagram__picture" src="images/instagram/inst1.jpg">
            <img class="ddb-instagram__image" src="images/ui-elements/image6.png">
          </div>
          <div class="ddb-instagram__square ddb-instagram__square__central ddb-instagram__square__top">
            <img class="ddb-instagram__picture" src="images/instagram/inst2.jpg">
            <img class="ddb-instagram__image" src="images/ui-elements/image7.png">
          </div>
          <div class="ddb-instagram__square  ddb-instagram__square__top">
            <img class="ddb-instagram__picture" src="images/instagram/inst3.jpg">
            <img class="ddb-instagram__image" src="images/ui-elements/image7.png">
          </div>
        </div>
        <div class="ddb-instagram__element">
          <div class="ddb-instagram__square  ddb-instagram__square__bottom">
            <img class="ddb-instagram__picture" src="images/instagram/inst4.jpeg">
            <img class="ddb-instagram__image" src="images/ui-elements/image7.png">
          </div>
          <div class="ddb-instagram__square ddb-instagram__square__central ddb-instagram__square__bottom">
            <img class="ddb-instagram__picture" src="images/instagram/inst5.jpeg">
          </div>
          <div class="ddb-instagram__square  ddb-instagram__square__bottom">
            <img class="ddb-instagram__picture" src="images/instagram/inst6.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBInstagramBlock"
  }
</script>

<style scoped lang="scss">
  .ddb-instagram {
    display: flex;
    &__heading {
      padding-left: 24px;
      text-align: left;

      &__text {
        margin: 0;
      }
    }
    &__logo{
      display: none;
    }

    &__blocks {
      margin: 24px;
    }

    &__blocks-desktop {
      display: none;
    }

    &__element {

      display: flex;
    }

    &__square {
      position: relative;
      height: 153px;
      width: 153px;
      &__left {
        margin-right: 3px;
      }

      &__right {
        margin-left: 3px;
      }

      &__central {

        margin-top: 6px;
        margin-bottom: 6px;
      }
    }
    &__picture {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    &__image{
      position: absolute;
      top: 6px;
      right: 6px;
      height: 32px;
      width: 32px;
    }
  }

  @include for-medium{
    .ddb-instagram {
      &__container{
        padding-left: 20px;
        padding-right: 20px;
      }
      &__heading {
        display: flex;
        justify-content: space-between;
        margin-top: 64px;
        padding-left: 0;
        text-align: left;

        &__text {
          margin: 0;
        }

        &__br {
          display: none;
        }
      }
      &__logo{
        display: none;
      }

      &__blocks {
        display: none;
      }

      &__blocks-desktop {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
      }

      &__square {
        width: 230px;
        height: 230px;

        &__top {
          margin-bottom: 8px;
        }

        &__central {
          margin-top: 0;
          margin-left: 16px;
          margin-right: 16px;
        }

        &__bottom {
          margin-top: 8px;
        }
      }

      &__picture {
        width: 100%;
        height: 100%;
      }
      &__image{
        top: 12px;
        right: 12px;
        height: 48px;
        width: 48px;
      }
    }
  }
  @include for-large{
    .ddb-instagram{
      &__container{
        padding: 0;
      }
      &__square {
        width: 309px;
        height: 309px;
      }
      &__picture {
        width: 100%;
        height: 100%;
      }
      &__central {
        margin-top: 0;
        margin-left: 16px;
        margin-right: 16px;
      }
      &__image{
        top: 12px;
        right: 12px;
      }
    }
  }
  @include for-extra-large {
    .ddb-instagram {
      &__container{
        padding-top: 80px;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      &__heading {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        margin-bottom: 24px;
        padding-left: 0;
        text-align: left;

        &__text {
          margin: 0;
        }

        &__br {
          display: none;
        }
      }
      &__logo {
        cursor: pointer;
        display: flex;
        align-items: flex-end;
        &__text{
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          margin: 0;
          padding-right: 16px;
        }
      }

      &__blocks {
        display: none;
      }

      &__blocks-desktop {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
      }

      &__square {
        border: 12px solid white;
        width: 409px;
        height: 409px;

        &__top {
          margin-bottom: 8px;
        }

        &__central {
          margin-top: 0;
          margin-left: 16px;
          margin-right: 16px;
        }

        &__bottom {
          margin-top: 8px;
        }
      }

      &__picture {
        width: 100%;
        height: 100%;
      }
      &__image{
        top: 12px;
        right: 12px;
      }
    }
  }

</style>
