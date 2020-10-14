<template>
  <div class="ddb-instagram">
    <div class="ddb-instagram__container container">
      <div class="ddb-instagram__heading">
        <h2 class="ddb-instagram__heading__text">
          Следи за актуальными <br> фотосессиями <br class="ddb-instagram__heading__br"> в Instagram
        </h2>
        <div class="ddb-instagram__logo">
          <a href="https://www.instagram.com/dariadarkiss/" target="_blank">
            <span class="ddb-instagram__logo__text">
              @dariadarkiss
            </span>
            <img src="/images/ui-elements/instagram.svg" alt="instagram-icon">
          </a>
        </div>
      </div>
      <div class="ddb-instagram__blocks">
        <div class="ddb-instagram__element" v-for="(chunk, i) in this.mobileMedia" :key="i">
          <div :class="getImageClassMobile(i, j)" v-for="(item, j) in chunk" :key="j">
            <a :href="getPermalink(item)" target="_blank">
              <img class="ddb-instagram__picture" :src="item.images['500X500'].path" alt="Instagram photo">
              <img v-if="!isImage(item)"  class="ddb-instagram__image" :src="getImageType(item)" alt="Instagram media type">
            </a>
          </div>
        </div>
      </div>
      <div class="ddb-instagram__blocks-desktop">
        <div class="ddb-instagram__element" v-for="(chunk, i) in this.desktopMedia" :key="i">
          <div :class="getImageClassDesktop(i, j)" v-for="(item, j) in chunk" :key="j">
            <a :href="getPermalink(item)" target="_blank">
              <img class="ddb-instagram__picture" :src="item.images['500X500'].path" alt="Instagram photo">
              <img v-if="!isImage(item)" class="ddb-instagram__image" :src="getImageType(item)" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { chunk } from "@/plugins/chunks";

  export default {
    name: "DDBInstagramBlock",
    props: {
      media: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return  {
        mobileMedia: [],
        desktopMedia: []
      }
    },
    created() {
      this.mobileMedia = chunk(this.media, 2)
      this.desktopMedia = chunk(this.media, 3)
    },
    methods: {

      getImageClassMobile(chunkIndex, itemIndex) {
        const baseClass = ['ddb-instagram__square']
        if (itemIndex === 0) {
          baseClass.push('ddb-instagram__square__left')
        } else if (itemIndex === 1) {
          baseClass.push('ddb-instagram__square__right')
        }
        if (chunkIndex === 1) {
          baseClass.push('ddb-instagram__square__central')
        }

        return baseClass
      },

      getImageClassDesktop(chunk, itemIndex) {
        const baseClass = ['ddb-instagram__square']
        if (chunk === 0) {
          baseClass.push('ddb-instagram__square__top')
        } else if (chunk === 1) {
          baseClass.push('ddb-instagram__square__bottom')
        }
        if (itemIndex === 1) {
          baseClass.push('ddb-instagram__square__central')
        }

        return baseClass;
      },

      getImageType(image) {
        if (!image || !image.hasOwnProperty('media_type')) {
          return
        }
        if (image.media_type === 'CAROUSEL_ALBUM') {
          return "/images/instagram/many.svg"
        } else if (image.media_type === 'VIDEO') {
          return "/images/instagram/igtv.svg"
        }
      },

      getPermalink(image) {
        if (!image || !image.hasOwnProperty('permalink')) {
          return '/'
        }
        return image.permalink;
      },

      isImage(image) {
        if (!image || !image.hasOwnProperty('media_type')) {
          return false
        }
        return image.media_type === 'IMAGE'
      }
    }
  }
</script>

<style scoped lang="scss">
  .ddb-instagram {
    display: flex;
    align-items: center;
    justify-content: center;
    &__heading {
      padding-left: 24px;
      text-align: left;

      &__text {
        margin: 0;
      }
    }

    &__logo{
      display: none;
      &__text{
        text-decoration: none;
        color: $primary-color1;
      }
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
      border: 6px solid white;
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
  @media (max-width: 330px) {
    .ddb-instagram__square{
      width: 141px;
      height: 141px;
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
        a {
          display: flex;
          align-items: center;
        }
        &__text{
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
