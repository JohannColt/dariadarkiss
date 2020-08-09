<template>
  <div class="ddb-second-block">
    <div class="ddb-second-block-photo">
      <img src="/images/ui-elements/photo.png" alt="photo">
    </div>
    <div class="ddb-second-block__container">
      <div class="ddb-second-block__element__heading">
        <h2 class="ddb-second-block__element__heading__text">Всем привет!</h2>
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
        <img src="/images/ui-elements/second-block-line.png" class="ddb-second-block__element__last__line" alt="second-block">
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
  }

  .ddb-second-block__container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .ddb-second-block__element {
    margin: 20px;
    display: flex;
    text-align: left;
    font-size: 24px;
    line-height: 50px;
  }

  .ddb-second-block__element__heading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ddb-second-block__element__heading__text {
    font-size: 30px;
    margin: 20px;
  }

  .ddb-second-block__element__last {
    text-align: left;
    margin: 20px;
  }

  .ddb-second-block__element__last__text {
    margin: 0;
    font-size: 40px;
  }

  .ddb-second-block__element__last__line {
    width: 45%;
  }

  @include for-desktop-up {
    .ddb-second-block{
      padding-top: 80px;
    }
  }

  @media (min-width: 800px) {
    .ddb-second-block__element__heading__smile {
      display: none;
    }
    .ddb-second-block__element {
      line-height: normal;
    }
  }

  @media (max-width: 799px) {
    .ddb-second-block-photo {
      display: none;
    }
  }

</style>
