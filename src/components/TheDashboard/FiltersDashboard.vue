<template>
  <section class="filters">
    <p class="filters__filters">Filtros</p>

    <div class="filters__box">
      <section class="filters__prices">
        <h4 class="filters__title-price">Preços</h4>

        <div class="filters__input-box">
          <input type="radio" /> <label class="filters__price">R$10</label>
        </div>
        <div class="filters__input-box">
          <input type="radio" /> <label class="filters__price">R$10-$100</label>
        </div>
        <div class="filters__input-box">
          <input type="radio" />
          <label class="filters__price">R$100-$500</label>
        </div>
        <div class="filters__input-box">
          <input type="radio" /> <label class="filters__price">R$500</label>
        </div>
        <div class="filters__input-box">
          <input type="radio" checked />
          <label class="filters__price">Todos</label>
        </div>
      </section>

      <hr class="line" />

      <section class="filters__values">
        <div class="filters__box-values">
          <p class="filters__title-values">Valores</p>
          <p class="filters__range-values">1.99 - 4098</p>
        </div>

        <div class="filters__box-slider">
          <input class="filters__slider" type="range" min="1.99" max="4049" />
        </div>
      </section>

      <hr class="line" />

      <section class="filters__categories">
        <p class="filters__title-category">Categorias</p>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label class="filters__category-title">Érico Rocha</label>
          </div>
          <p class="filters__category-price">1920</p>
        </div>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label class="filters__category-title">Desafio 6 em 7</label>
          </div>
          <p class="filters__category-price">1820</p>
        </div>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label class="filters__category-title">Fórmula de lançamento</label>
          </div>
          <p class="filters__category-price">462</p>
        </div>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label class="filters__category-title">KlickPages</label>
          </div>
          <p class="filters__category-price">6556</p>
        </div>

        <div class="filters__box-category">
          <div>
            <input class="filters__radio" type="checkbox" />
            <label class="filters__category-title">Audios</label>
          </div>
          <p class="filters__category-price">120</p>
        </div>
      </section>

      <hr class="line" />

      <section class="filters__assessment">
        <p class="filters__title-assessment">Avaliação</p>

        <div class="filters__box-assessment">
          <img src="@/assets/images/5-star.svg" alt="5 Estrelas" />
          <p class="filters__star-assessment">8500</p>
        </div>

        <div class="filters__box-assessment">
          <img src="@/assets/images/4-star.svg" alt="4 Estrelas" />
          <p class="filters__star-assessment">3250</p>
        </div>

        <div class="filters__box-assessment">
          <img src="@/assets/images/3-star.svg" alt="3 Estrelas" />
          <p class="filters__star-assessment">1120</p>
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
@import '@/assets/sass/abstracts/_variables.scss';

.filters {
  margin-top: 3rem;

  &__filters {
    font-size: 1.8rem;
  }

  &__box {
    max-width: 30rem;
    width: 100%;
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 0.625rem;
    background-color: $white;

    @media screen and (max-width: 1100px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: 50rem;
    }
  }

  &__title-price {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: $semiBold;
  }

  &__input-box {
    margin-top: 0.625rem;
  }

  &__price {
    font-weight: $light;
  }

  &__box-values {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title-values {
    margin: 2rem 0;
    font-size: 1.8rem;
    font-weight: $semiBold;

    @media screen and (max-width: 1100px) {
      margin: 0;
    }
  }

  &__range-values {
    font-size: 1.8rem;
    font-weight: $semiBold;
  }

  &__slider {
    max-width: 28rem;
    width: 100%;
    height: 0.625rem;
    border-radius: 0.625rem;
    appearance: none;
    border: none;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;

    background: #ee0979;
    background: -webkit-linear-gradient(to right, #ee0979, #ff6a00);
    background: linear-gradient(to right, #ee0979, #ff6a00);

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      width: 2rem;
      height: 2rem;
      border-radius: 1.5rem;
      background-color: #ee0979;
    }
  }

  &__categories {
    margin-top: 2rem;
  }

  &__title-category {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: $semiBold;
  }

  &__box-category {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  &__radio {
    margin-right: 0.625rem;
  }

  &__category-title {
    font-weight: $light;
  }

  &__category-price {
    font-size: 1.5rem;
    font-weight: $light;

    @media screen and (max-width: 1100px) {
      margin: 0 2rem;
    }
  }

  &__assessment {
    margin-top: 2rem;
  }

  &__title-assessment {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: $semiBold;
  }

  &__star-assessment {
    font-size: 1.4rem;
    font-weight: $light;

    @media screen and (max-width: 1100px) {
      margin: 0 2rem;
    }
  }

  &__box-assessment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.625rem 0;
  }

  &__box-button {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }

  &__button {
    width: 22rem;
    height: 5rem;
    border: 0;
    border-radius: 0.3125rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background: #ee0979;
    background: -webkit-linear-gradient(to right, #ee0979, #ff6a00);
    background: linear-gradient(to right, #ee0979, #ff6a00);
    color: $white;
    cursor: pointer;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }
}

.line {
  margin-top: 25px;
  color: $black;
}
</style>
