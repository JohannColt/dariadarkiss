<template>
  <div class="ddb-portfolio">
    <div class="ddb-portfolio__container container">
      <div class="ddb-portfolio__header">
        <h2 class="ddb-portfolio__header__text">
          Портфолио
        </h2>
      </div>
      <div class="ddb-portfolio__content">
        <div class="ddb-portfolio__line ddb-portfolio__line__first">
          <div class="ddb-portfolio__element ddb-portfolio__line__first__first">
            <img class="ddb-portfolio__picture" src="images/instagram/inst1.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__first__second">
            <img class="ddb-portfolio__picture" src="images/instagram/inst3.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__first__third">
            <img class="ddb-portfolio__picture" src="images/instagram/inst4.jpeg">
          </div>
        </div>
        <div class="ddb-portfolio__line ddb-portfolio__line__second">
          <div class="ddb-portfolio__element ddb-portfolio__line__second__first">
            <img class="ddb-portfolio__picture" src="images/instagram/inst1.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__second__second">
            <img class="ddb-portfolio__picture" src="images/instagram/inst3.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__second__third">
            <img class="ddb-portfolio__picture" src="images/instagram/inst4.jpeg">
          </div>
        </div>
        <div class="ddb-portfolio__line ddb-portfolio__line__third">
          <div class="ddb-portfolio__element ddb-portfolio__line__third__first">
            <img class="ddb-portfolio__picture" src="images/instagram/inst1.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__third__second">
            <img class="ddb-portfolio__picture" src="images/instagram/inst3.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__third__third">
            <img class="ddb-portfolio__picture" src="images/instagram/inst4.jpeg">
          </div>
        </div>
        <div class="ddb-portfolio__line ddb-portfolio__line__four">
          <div class="ddb-portfolio__element ddb-portfolio__line__four__first">
            <img class="ddb-portfolio__picture" src="images/instagram/inst1.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__four__second">
            <img class="ddb-portfolio__picture" src="images/instagram/inst3.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__four__third">
            <img class="ddb-portfolio__picture" src="images/instagram/inst4.jpeg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__four__four">
            <img class="ddb-portfolio__picture" src="images/instagram/inst6.jpg">
          </div>
        </div>
        <div class="ddb-portfolio__line ddb-portfolio__line__five">
          <div class="ddb-portfolio__element ddb-portfolio__line__five__first">
            <img class="ddb-portfolio__picture" src="images/instagram/inst1.jpg">
          </div>
          <div class="ddb-portfolio__element ddb-portfolio__line__five__second">
            <img class="ddb-portfolio__picture" src="images/instagram/inst3.jpg">
          </div>
        </div>
      </div>
      <div class="ddb-portfolio__footer">
        <div class="ddb-portfolio__footer__container">
          <p class="ddb-portfolio__footer__text">
            ПОКАЗАТЬ БОЛЬШЕ РАБОТ
          </p>
          <img class="ddb-portfolio__footer__line" src="images/ui-elements/button-line.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBPortfolio"
  }
</script>

<style lang="scss" scoped>
  .ddb-portfolio {
    display: flex;
    align-items: center;
    justify-content: center;

    &__container {
      padding-left: 24px;
      padding-right: 24px;
      display: flex;
      flex-direction: column;
    }

    &__header {
      padding-bottom: 12px;

      &__text {
        text-align: left;
        margin: 0;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
    }

    &__element {
      margin-bottom: 16px;
      border: 6px solid #FFFFFF;
      box-sizing: border-box;
      filter: drop-shadow(0px 0px 31.7802px rgba(63, 45, 45, 0.08));
    }

    &__line {
      display: flex;
      flex-direction: column;
      width: inherit;
      &__first {
        &__first {
          width: 312px;
          height: 213px;        }

        &__second, &__third {
          width: 312px;
          height: 458px;
        }
      }

      &__second {
        &__first {
          width: 312px;
          height: 458px;
        }

        &__second {
          width: 312px;
          height: 213px;
        }

        &__third {
          width: 312px;
          height: 458px;
        }
      }

      &__third {
        &__first, &__second {
          width: 312px;
          height: 458px;
        }

        &__third {
          width: 312px;
          height: 213px;
        }
      }

      &__four {
        &__first, &__four {
          width: 312px;
          height: 458px;
        }

        &__second {
          width: 312px;
          height: 458px;
        }

        &__third {
          width: 312px;
          height: 458px;
        }
      }

      &__five {
        &__first {
          width: 312px;
          height: 213px;
        }

        &__second {
          width: 312px;
          height: 213px;
        }
      }
    }

    &__picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &__footer {
      &__container {
        align-items: center;
        padding-top: 24px;
        padding-bottom: 64px;
        display: flex;
        flex-direction: column;
      }

      &__text {
        margin: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 32px;
      }

      &__line {
        height: 1px;
        width: 96px;
      }
    }
  }
  @include for-extra-large{
    .ddb-portfolio{
      &__container{
        padding: 0;
      }
      &__header {
        padding-bottom: 6px;
      }
      &__element {
        border: 12px solid #FFFFFF;
        height: 100%;

      }
      &__line {
        padding-top: 16px;
        display: flex;
        flex-direction: row;
        width: inherit;
        height: 445px;

        &__first {
          &__first {
            width: 622px;
          }

          &__second, &__third {
            width: 303px;
            margin-left: 16px;
          }
        }

        &__second {
          &__first {
            width: 303px;
          }

          &__second {
            width: 622px;
            margin-left: 16px;
            margin-right: 16px;
          }

          &__third {
            width: 303px;
          }
        }

        &__third {
          &__first, &__second {
            width: 303px;
            margin-right: 16px;
          }

          &__third {
            width: 622px;
          }
        }

        &__four {
          &__first, &__four {
            width: 303px;
          }

          &__second {
            width: 303px;
            margin-left: 16px;
            margin-right: 8px;
          }

          &__third {
            width: 303px;
            margin-left: 8px;
            margin-right: 16px;
          }
        }

        &__five {
          &__first {
            width: 622px;
            margin-right: 8px;
          }

          &__second {
            width: 622px;
            margin-left: 8px;
          }
        }
      }
    }
  }
</style>
