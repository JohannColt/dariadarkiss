<template>
  <div class="ddb-footer">
    <div class="ddb-footer__container container">
      <div class="ddb-footer__element ddb-footer__element__first">
        <p class="ddb-footer__element__text"><a href="tel:+38 (095) 884-37-00" target="_blank">+38 (095) 884-37-00</a></p>
        <img class="ddb-footer__element__picture" src="/images/ui-elements/phone.png" alt="Phone image">
      </div>
      <div class="ddb-footer__element ddb-footer__element__second">
        <p class="ddb-footer__element__text"><a href="https://www.instagram.com/dariadarkiss/" target="_blank">@dariadarkiss</a></p>
        <img class="ddb-footer__element__picture" src="/images/ui-elements/instagram-white.png" alt="Instagram image">
      </div>
      <div class="ddb-footer__element ddb-footer__element__third">
        <p class="ddb-footer__element__text"><a href="mailto:dariadarkiss@gmail.com">dariadarkiss@gmail.com</a></p>
        <img class="ddb-footer__element__picture" src="/images/ui-elements/mail.png" alt="Mail image">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBFooter"
  }
</script>

<style lang="scss" scoped>
  .ddb-footer {
    background-color: $primary-color1;
    display: flex;
    align-items: center;
    justify-content: center;

    &__container {
      display: flex;
      flex-direction: column;
    }

    &__element {
      display: flex;
      position: relative;
      align-items: center;
      text-align: center;
      justify-content: center;

      &__text {
        z-index: 2;
        font-style: normal;
        font-size: 14px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.04em;
        margin: 0;
        a {
          font-weight: $font-weight-semi-bold;
          color: white;
        }
        a:hover {
          font-weight: $font-weight-bold;
        }
      }

      &__first {
        margin-top: 40px;
        margin-bottom: 24px;
      }

      &__second {
        margin-top: 24px;
        margin-bottom: 24px;
      }

      &__third {
        margin-top: 24px;
        margin-bottom: 40px;
      }

      &__picture {

        z-index: 1;
        display: flex;
        position: absolute;
        opacity: 0.1;
        width: 48px;
        height: 48px;
      }
    }
  }
  @include for-extra-large{
    .ddb-footer{
      &__container{
        flex-direction: row;
        justify-content: space-around;
      }
      &__element{
        &__first, &__second, &__third{
          width: 409px;;
          margin: 40px 8px;
        }
      }
    }
  }
</style>
