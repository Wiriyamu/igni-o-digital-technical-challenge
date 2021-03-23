<template>
  <section class="item">
    <figure>
      <img class="item__photo" src="@/assets/images/image.svg" alt="Photo" />
    </figure>

    <div class="item__texts">
      <p class="item__title">Fórmula de lançamento</p>
      <p>Por <strong>Érico Rocha</strong></p>
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
.item {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
  border-radius: 5px;
  background-color: #fff;

  &__photo {
    width: 180px;
    margin: 10px 10px 10px 0;
  }

  &__texts {
    margin-top: 20px;
  }

  &__title {
    margin: 10px 0;
    text-transform: uppercase;
  }

  &__description {
    max-width: 500px;
    width: 100%;
    margin-top: 10px;
  }

  &__star-button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0 0 130px;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: #1a5cff;
  }

  &__star-note {
    margin-right: 5px;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__price {
    margin: 10px 0 20px 0;
    font-size: 18px;
  }

  &__heart-box,
  &__bag-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 35px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  &__heart-box {
    color: #fff;
    background-color: #f08080;
  }

  &__bag-box {
    color: #fff;
    background-color: #ff7b1b;
  }

  &__heart-text,
  &__bag-text {
    margin-left: 5px;
  }
}
</style>
