<template>
    <div class="ddb-send-to-me">
      <div class="ddb-send-to-me__container container">
        <div class="ddb-send-to-me__heading">
          <h2>
            Хочешь фотосессию?
          </h2>
          <p class="ddb-send-to-me__heading__text">
            Напиши мне в <span class="ddb-send-to-me__heading__line">Direct</span> или заполни форму
          </p>
        </div>
        <div class="ddb-send-to-me__forms">
          <div class="ddb-send-to-me__element ddb-send-to-me__element__low">
            <input class="ddb-send-to-me__element__form" v-model="firstForm" placeholder="Как я могу к тебе обращаться?">
          </div>
          <div class="ddb-send-to-me__element ddb-send-to-me__element__low">
            <input class="ddb-send-to-me__element__form" v-model="secondForm" placeholder="Как я могу с тобой связаться?">
          </div>
          <div class="ddb-send-to-me__element ddb-send-to-me__element__big">
            <textarea class="ddb-send-to-me__element__form" v-model="thirdForm" placeholder="Опиши в двух словах какую фотосессию ты хочешь? "></textarea>
          </div>
        </div>
        <div class="ddb-send-to-me__bottom">
          <p class="ddb-send-to-me__bottom__text">Отправить форму</p>
          <img class="ddb-send-to-me__bottom__line" src="images/ui-elements/button-line.png">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DDBSendToMe",
      data() {
          return{
            firstForm:'',
            secondForm:'',
            thirdForm:''
          }
      }
    }
</script>

<style lang="scss" scoped>
.ddb-send-to-me{
  display: flex;
  align-items: center;
  justify-content: center;
  &__container{
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__heading{
    &__text{
      font-weight: normal;
      font-size: 14px;
      line-height: 30px;
    }
    &__line{
      border-bottom: black 1px solid;
    }
  }

  &__element{
    background-color: white;
    margin-top: 16px;
    margin-bottom: 16px;
    width: 100%;

    &__low{
      width: 312px;
      height: 48px;
    }
    &__big{
      width: 312px;
      height: 192px;
    }
    &__form{
      text-align: center;
      width: 100%;
      height: 100%;
      font-weight: normal;
      font-size: 16px;
      line-height: 32px;
    }
  }
  &__bottom{
    display: flex;
    position: relative;
    &__text{
      margin-top: 8px;
      margin-bottom: 51px;
      font-weight: bold;
      font-size: 14px;
      line-height: 32px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    &__line{
      display: flex;
      position: absolute;
      width: 88px;
      height: 1px;
      bottom: 51px;
      left: 38px;
    }
  }
}
@include for-extra-large{
  .ddb-send-to-me{
    &__container{
      padding: 0;
    }
    &__element{
      &__low{
        width: 597px;
        height: 48px;
      }
      &__big{
        width: 597px;
        height: 192px;
      }
      &__form{
        text-align: center;
        width: 100%;
        height: 100%;
        font-weight: normal;
      }
    }
  }
}
</style>
