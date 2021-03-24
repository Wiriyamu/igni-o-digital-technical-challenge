<template>
  <div class="select">
    <select class="select__select">
      <option>Área do cliente</option>
    </select>
    <img class="select__icon" src="@/assets/images/home.svg" alt="Home" />
  </div>
</template>

<script>
export default {
  name: 'SelectSidebar'
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables.scss';

.select {
  position: relative;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }

  &__select {
    max-width: 23rem;
    width: 100%;
    height: 3.6rem;
    margin: 0 2rem;
    padding: 0.3125rem 0.3125rem 0 3rem;
    border: 0;
    border-radius: 0.3125rem;
    background-color: $selectSidebarBg;

    @media screen and (max-width: 800px) {
      padding: 0.3125rem 0.3125rem;
    }
  }

  &__icon {
    position: absolute;
    top: 0.8rem;
    left: 3rem;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }
}
</style>
