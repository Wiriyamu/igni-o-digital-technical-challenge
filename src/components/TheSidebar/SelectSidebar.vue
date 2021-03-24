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

  &__select {
    max-width: 23rem;
    width: 100%;
    height: 3.6rem;
    margin: 0 2rem;
    padding: 0.3125rem 0.3125rem 0 3rem;
    border: 0;
    border-radius: 0.3125rem;
    background-color: $selectSidebarBg;
  }

  &__icon {
    position: absolute;
    top: 0.8rem;
    left: 3rem;
  }
}
</style>
