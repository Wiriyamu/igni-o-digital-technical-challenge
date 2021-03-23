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
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  &__pages {
    display: flex;
    align-items: center;
  }

  &__back,
  &__next {
    width: 30px;
    height: 30px;
    padding: 10px;
    border-radius: 40px;
    background-color: orange;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  &__pages {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin: 0 20px;
    padding: 0 20px;
    border-radius: 40px;
    background-color: #ededed;
  }

  &__page {
    width: 20px;
    height: 20px;
    margin-left: 10px;
    color: #000000;
    text-align: center;
    cursor: pointer;

    &:hover {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      color: #fff;
      background-color: orange;
    }
  }
}
</style>
