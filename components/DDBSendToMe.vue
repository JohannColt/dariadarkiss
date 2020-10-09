<template>
  <div class="ddb-send-to-me" id="ddb-send-to-me">
    <form class="ddb-send-to-me__container container" @submit.prevent="sendForm">
      <div class="ddb-send-to-me__heading">
        <h2 style="margin: 0">
          Хочешь фотосессию?
        </h2>
        <p class="ddb-send-to-me__heading__text">
          Напиши мне в
          <span class="ddb-send-to-me__heading__line"><a href="https://www.instagram.com/dariadarkiss/" target="_blank">Direct</a></span>
          или заполни форму
        </p>
      </div>
      <div class="ddb-send-to-me__forms">
        <div class="ddb-send-to-me__element ddb-send-to-me__element__low">
          <label>
            <input class="ddb-send-to-me__element__form" v-model="formData.name" placeholder="Как я могу к тебе обращаться?">
          </label>
        </div>
        <div class="ddb-send-to-me__element ddb-send-to-me__element__low">
          <label>
            <input class="ddb-send-to-me__element__form" v-model="formData.contact" placeholder="Как я могу с тобой связаться?">
          </label>
        </div>
        <div class="ddb-send-to-me__element ddb-send-to-me__element__big">
          <label>
          <textarea class="ddb-send-to-me__element__form ddb-send-to-me__element__textarea" v-model="formData.info"
                    placeholder="Опиши в двух словах какую фотосессию ты хочешь? "></textarea>
          </label>
        </div>
      </div>
      <ddb-button class="ddb-send-to-me__bottom" type="submit">
        <p class="ddb-send-to-me__bottom__text">Отправить форму</p>
        <img class="ddb-send-to-me__bottom__line" src="/images/ui-elements/button-line.png" alt="button-line">
      </ddb-button>
    </form>
  </div>
</template>

<script>
  import DDBButton from "./DDBButton";

  export default {
    components: {
      'ddb-button': DDBButton
    },
    name: "DDBSendToMe",
    data() {
      return {
        formData: {
          name: '',
          contact: '',
          info: ''
        }
      }
    },
    methods: {
      async sendForm() {
        await this.$axios.$post('/contact', {...this.formData})
          .catch(error => {
            console.log({error})
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ddb-send-to-me {
    display: flex;
    align-items: center;
    justify-content: center;

    &__container {
      padding-left: 24px;
      padding-right: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__heading {
      &__text {
        font-weight: normal;
        font-size: 14px;
        line-height: 30px;
      }

      &__line {
        border-bottom: black 1px solid;
      }
    }

    &__element {
      background-color: white;
      margin-top: 16px;
      margin-bottom: 16px;
      width: 100%;

      &__low {
        width: 312px;
        height: 48px;
      }

      &__big {
        width: 312px;
        height: 192px;
      }

      &__form {
        text-align: center;
        width: 100%;
        height: 100%;
        font-weight: normal;
        font-size: 16px;
        line-height: 32px;
        margin: 0;
        padding: 0;
        border: 0;
        box-shadow: 0 0 31.7802px rgba(63, 45, 45, 0.08);
        color: #3F2D2D;
        opacity: 0.8;
        outline: none;
        &:active, &:focus, &:hover {
          box-shadow: 0 0 35px rgba(0, 0, 0, .1) inset;
        }
      }

      &__textarea {
        padding-top: 8px;
      }
    }

    &__bottom {
      margin-top: 8px;
      margin-bottom: 51px;
      display: flex;
      position: relative;

      &__text {
        margin: 0;
        font-weight: bold;
        font-size: 14px;
        line-height: 32px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      &__line {
        display: flex;
        position: absolute;
        width: 88px;
        height: 1px;
        bottom: 1px;
        left: 0;
      }
    }
  }

  @include for-large {
    .ddb-send-to-me {
      &__heading {
        &__text {
          font-weight: normal;
          font-size: 16px;
          line-height: 32px;
        }
      }

      &__container {
        padding-top: 80px;
      }

      &__element {
        &__low {
          width: 597px;
          height: 48px;
        }

        &__big {
          width: 597px;
          height: 192px;
        }

        &__form {
          text-align: center;
          width: 100%;
          height: 100%;
          font-weight: normal;
        }
      }
    }
  }
</style>
