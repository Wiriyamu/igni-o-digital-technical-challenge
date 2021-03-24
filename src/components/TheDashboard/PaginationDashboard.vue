<template>
  <section class="pagination">
    <img
      class="pagination__back"
      src="@/assets/images/chevron-left.svg"
      alt="back"
    />

    <ul class="pagination__pages">
      <li class="pagination__page">1</li>
      <li class="pagination__page">2</li>
      <li class="pagination__page">3</li>
      <li class="pagination__page">4</li>
      <li class="pagination__page">5</li>
      <li class="pagination__page">6</li>
      <li class="pagination__page">7</li>
      <li class="pagination__page">8</li>
      <li class="pagination__page">9</li>
      <li class="pagination__page">10</li>
    </ul>

    <img
      class="pagination__next"
      src="@/assets/images/chevron-right.svg"
      alt="next"
    />
  </section>
</template>

<script>
export default {
  name: 'PaginationDashboard'
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables.scss';

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  &__pages {
    display: flex;
    align-items: center;
  }

  &__back,
  &__next {
    width: 3rem;
    height: 3rem;
    padding: 0.625rem;
    border-radius: 4rem;
    background: #ec008c;
    background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
    background: linear-gradient(to right, #fc6767, #ec008c);
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &__pages {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    margin: 0 2rem;
    padding: 0 3rem 0 2rem;
    border-radius: 4rem;
    background-color: #ededed;
  }

  &__page {
    width: 2rem;
    height: 2rem;
    margin-left: 0.625rem;
    color: $black;
    text-align: center;
    cursor: pointer;
    font-size: 1.8rem;

    &:hover {
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      color: $white;
      background: #ec008c;
      background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
      background: linear-gradient(to right, #fc6767, #ec008c);
    }
  }
}
</style>
