<template>
  <div class="ddb-second-block">
    <div class="ddb-second-block-photo">
      <img src="/images/ui-elements/bottom-left-frame.png" alt="bottom-left-frame" class="bottom-left-frame">
      <img src="/images/ui-elements/top-right-frame.png" alt="top-right-frame" class="top-right-frame">
      <img src="/images/ui-elements/smile.svg" alt="smile" class="smile">
      <img src="/images/ui-elements/photo.png" alt="photo" class="photo">
    </div>
    <div class="ddb-second-block__container">
      <div class="ddb-second-block__element__heading">
        <h3 class="ddb-second-block__element__heading__text">Всем привет!</h3>
        <img src="/images/ui-elements/smile.png" class="ddb-second-block__element__heading__smile" alt="smile">
      </div>
      <div class="ddb-second-block__element">
        <a>Суждение преобразует онтологический дуализм. Отвечая на вопрос о взаимоотношении идеального ли и
          материального ци</a>
      </div>
      <div class="ddb-second-block__element">
        <a>Дай Чжень заявлял, что суждение выводит сенсибельный гений. Единственной космической субстанцией Гумбольдт
          считал материю, наделенную внутренней активностью, несмотря на это интеллект неоднозначен.</a>
      </div>
      <div class="ddb-second-block__element">
        <a>Наряду с этим свобода раскладывает на элементы гравитационный парадокс. Согласно мнению известных философов,
          эклектика нетривиальна.</a>
      </div>
      <div class="ddb-second-block__element">
        <a> Дедуктивный метод, как следует из вышесказанного, индуцирует гедонизм. Априори, отношение к современности
          индуктивно принимает во внимание неоднозначный дуализм. Гравитационный парадокс.</a>
      </div>
      <div class="ddb-second-block__element__last">
        <h3 class="ddb-second-block__element__last__text">Оценить работы</h3>
        <img src="/images/ui-elements/second-block-line.png" class="ddb-second-block__element__last__line"
             alt="second-block">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DDBSecondBlock"
  }
</script>

<style lang="scss" scoped>
  .ddb-second-block {
    display: flex;
    height: 100%;
    padding-top: 43px;
  }

  .ddb-second-block-photo {
    margin: 30px;
    position: relative;
    width: 472px;
    height: 768px;
  }

  .bottom-left-frame {
    position: absolute;
    left: -23px;
    bottom: -23px;
  }

  .top-right-frame {
    position: absolute;
    right: -23px;
    top: -23px;
  }

  .smile {
    position: absolute;
    right: -23px;
    bottom: -23px;
    width: 80px;
    height: 80px;
  }

  .photo {
  }

  .ddb-second-block__container {
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .ddb-second-block__element {
    margin: 4px;
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
  }

  .ddb-second-block__element__heading {
    display: flex;
    font-size: 21px;
    line-height: 24px;
    align-items: center;
  }
  .ddb-second-block__element__heading__text{
    font-weight: 600;
  }
  .ddb-second-block__element__heading__smile {
    width: 20px;
    height: 20px;
  }

  .ddb-second-block__element__last {
    margin: 20px;
    width: 216px;
    height: 48px;
  }

  .ddb-second-block__element__last__text {
    margin: 0;
    width: 216px;
    height: 48px;
    font-weight: 600;
    font-size: 20px;
    line-height: 48px;
  }

  .ddb-second-block__element__last__line {
    margin: 0;
    width: 80%;
  }



  @include for-desktop-up {
    .ddb-second-block {
      padding-top: 80px;
    }
  }

  @media (min-width: 800px) {
    .ddb-second-block__element__heading__smile {
      display: none;
    }

    .ddb-second-block__element {
      margin: 10px;
      font-weight: normal;
      font-size: 20px;
      line-height: 40px;
    }
    .ddb-second-block__element__heading {
      display: flex;
      font-size: 42px;
      line-height: 48px;
    }
  }

  @media (max-width: 799px) {
    .ddb-second-block-photo {
      display: none;
    }
  }

</style>
