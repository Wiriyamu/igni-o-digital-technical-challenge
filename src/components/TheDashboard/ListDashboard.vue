<template>
  <section class="list">
    <div class="list__actions">
      <p class="list__amount">200 resultados encontrados</p>

      <div class="list__buttons">
        <select class="list__select">
          <option>Listagem</option>
        </select>

        <figure class="list__grid">
          <img src="@/assets/images/grid.svg" alt="Grid" />
        </figure>

        <figure class="list__list">
          <img src="@/assets/images/list.svg" alt="Lista" />
        </figure>
      </div>
    </div>

    <div class="list__search-container">
      <input class="list__search" placeholder="Buscar" />
      <img
        class="list__search-icon"
        src="@/assets/images/search.svg"
        alt="Pesquisa"
      />
    </div>

    <list-item-dashboard />
    <list-item-dashboard />
    <list-item-dashboard />
    <list-item-dashboard />
    <list-item-dashboard />
  </section>
</template>

<script>
import ListItemDashboard from './ListItemDashboard.vue'
export default {
  components: { ListItemDashboard },
  name: 'ListDashboard'
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables.scss';

.list {
  width: 100%;
  margin: 3rem 2rem 0 2rem;

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__amount {
    font-size: 1.8rem;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__select {
    width: 13rem;
    padding: 0.3125rem;
    border: 0;
    border-radius: 0.3125rem;
  }

  &__grid,
  &__list {
    display: flex;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    margin-left: 0.625rem;
    border-radius: 0.3125rem;
    background-color: $white;
    cursor: pointer;

    & img {
      width: 1.5rem;
    }
  }

  &__search-container {
    position: relative;
  }

  &__search {
    width: 100%;
    height: 5rem;
    margin: 2rem 0 3rem 0;
    padding: 2rem;
    border: 0;
    border-radius: 0.3125rem;
  }

  &__search-icon {
    position: absolute;
    top: 3.5rem;
    right: 2.5rem;
  }
}
</style>
