<template>
  <section class="item">
    <figure class="item__photo-container">
      <img class="item__photo" src="@/assets/images/image.svg" alt="Photo" />
    </figure>

    <div class="item__texts">
      <p class="item__title">Fórmula de lançamento</p>
      <p class="item__author">Por <strong>Érico Rocha</strong></p>
      <p class="item__description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>

    <div class="item__buy">
      <div class="item__star-button">
        <p class="item__star-note">3.5</p>
        <img
          class="item__star"
          src="@/assets/images/white-star.svg"
          alt="estrela"
        />
      </div>

      <div class="item__buttons">
        <p class="item__price">R$ 2550</p>
        <div class="item__heart-box">
          <img src="@/assets/images/heart.svg" alt="Amei" />
          <p class="item__heart-text">Amei</p>
        </div>

        <div class="item__bag-box">
          <img src="@/assets/images/shopping-bag.svg" alt="Comprar" />
          <p class="item__bag-text">Comprar</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListItemDashboard'
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables.scss';

.item {
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  padding: 0 0.625rem;
  border-radius: 0.3215rem;
  background-color: $white;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }

  &__photo-container {
    @media screen and (max-width: 1400px) {
      display: flex;
      justify-content: center;
    }
  }

  &__photo {
    width: 18rem;
    margin: 0.625rem 1.5rem 0.625rem 0;

    @media screen and (max-width: 1400px) {
      width: 20rem;
    }
  }

  &__texts {
    margin-top: 2rem;

    @media screen and (max-width: 1400px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  &__title {
    margin: 0.625rem 0;
    text-transform: uppercase;
  }

  &__author {
    font-size: 1.2rem;
  }

  &__description {
    max-width: 50rem;
    width: 100%;
    margin-top: 0.625rem;
    font-size: 1.4rem;
    font-weight: $light;

    @media screen and (max-width: 1400px) {
      text-align: center;
    }
  }

  &__star-button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.625rem 0 0 13rem;
    padding: 0.3215rem 0.625rem;
    border-radius: 0.3215rem;
    color: $white;
    background: #ec008c;
    background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
    background: linear-gradient(to right, #fc6767, #ec008c);

    @media screen and (max-width: 1400px) {
      display: none;
    }
  }

  &__star-note {
    margin-right: 0.3215rem;
    font-size: 1.4rem;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__price {
    margin: 0.625rem 0 2rem 0;
    font-size: 1.8rem;
  }

  &__heart-box,
  &__bag-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 3.5rem;
    margin-bottom: 1.5rem;
    border-radius: 0.3125rem;
    font-size: 1.4rem;
    font-weight: $semiBold;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }
  }

  &__heart-box {
    color: $white;
    background: #cc95c0;
    background: -webkit-linear-gradient(to right, #7aa1d2, #dbd4b4, #cc95c0);
    background: linear-gradient(to right, #7aa1d2, #dbd4b4, #cc95c0);
  }

  &__bag-box {
    color: $white;
    background: #ee0979;
    background: -webkit-linear-gradient(to right, #ee0979, #ff6a00);
    background: linear-gradient(to right, #ee0979, #ff6a00);
  }

  &__heart-text,
  &__bag-text {
    margin-left: 0.3125rem;
  }
}
</style>
