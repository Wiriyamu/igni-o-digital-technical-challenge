<template>
  <section class="filters">
    <p>Filtros</p>

    <div class="filters__box">
      <section class="filters__prices">
        <h4 class="filters__title-price">Preços</h4>

        <div class="filters__input-box">
          <input type="radio" /> <label>R$10</label>
        </div>
        <div class="filters__input-box">
          <input type="radio" /> <label>R$10-$100</label>
        </div>
        <div class="filters__input-box">
          <input type="radio" /> <label>R$100-$500</label>
        </div>
        <div class="filters__input-box">
          <input type="radio" /> <label>R$500</label>
        </div>
        <div class="filters__input-box">
          <input type="radio" checked /> <label>Todos</label>
        </div>
      </section>

      <hr class="line" />

      <section class="filters__values">
        <div class="filters__box-values">
          <h4 class="filters__title-values">Valores</h4>
          <h4>1.99 - 4098</h4>
        </div>

        <div class="filters__box-slider">
          <input class="filters__slider" type="range" min="1.99" max="4049" />
        </div>
      </section>

      <hr class="line" />

      <section class="filters__categories">
        <h4 class="filters__title-category">Categorias</h4>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label>Érico Rocha</label>
          </div>
          <p>1920</p>
        </div>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label>Desafio 6 em 7</label>
          </div>
          <p>1820</p>
        </div>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label>Fórmula de lançamento</label>
          </div>
          <p>462</p>
        </div>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label>KlickPages</label>
          </div>
          <p>6556</p>
        </div>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label>Audios</label>
          </div>
          <p>120</p>
        </div>
      </section>

      <hr class="line" />

      <section class="filters__assessment">
        <h4 class="filters__title-assessment">Avaliação</h4>

        <div class="filters__box-assessment">
          <img src="@/assets/images/5-star.svg" alt="5 Estrelas" />
          <p>8500</p>
        </div>

        <div class="filters__box-assessment">
          <img src="@/assets/images/4-star.svg" alt="4 Estrelas" />
          <p>3250</p>
        </div>

        <div class="filters__box-assessment">
          <img src="@/assets/images/3-star.svg" alt="3 Estrelas" />
          <p>1120</p>
        </div>
      </section>

      <div class="filters__box-button">
        <button class="filters__button">Limpar Filtros</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FiltersDashboard'
}
</script>

<style lang="scss" scoped>
.filters {
  margin-top: 30px;

  &__box {
    max-width: 300px;
    width: 100%;
    margin-top: 20px;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
  }

  &__title-price {
    margin-bottom: 20px;
  }

  &__input-box {
    margin-top: 10px;
  }

  &__input-box input:checked {
    background-color: red;
  }

  &__box-values {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title-values {
    margin: 20px 0;
  }

  &__slider {
    max-width: 280px;
    width: 100%;
    height: 10px;
    border-radius: 10px;
    appearance: none;
    border: none;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    background: linear-gradient(
      90deg,
      rgb(255, 123, 27),
      60%,
      rgb(237, 237, 237)
    );

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 15px;
      background-color: rgb(255, 123, 27);
    }
  }

  &__categories {
    margin-top: 20px;
  }

  &__title-category {
    margin-bottom: 20px;
  }

  &__box-category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }

  &__radio {
    margin-right: 10px;
  }

  &__assessment {
    margin-top: 20px;
  }

  &__title-assessment {
    margin-bottom: 20px;
  }

  &__box-assessment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }

  &__box-button {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  &__button {
    width: 220px;
    height: 50px;
    border: 0;
    border-radius: 5px;
    background-color: #ff7b1b;
    color: #fff;
    cursor: pointer;
  }
}

.line {
  margin-top: 25px;
  color: rgb(237, 237, 237);
}
</style>
