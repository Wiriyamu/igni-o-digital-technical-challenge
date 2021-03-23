<template>
  <section class="list">
    <div class="list__actions">
      <p>200 resultados encontrados</p>

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

    <input class="list__search" placeholder="Buscar" />

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
.list {
  width: 100%;
  margin: 30px 20px 0 20px;

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__select {
    width: 130px;
    padding: 5px;
    border: 0;
    border-radius: 5px;
  }

  &__grid,
  &__list {
    display: flex;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;

    & img {
      width: 15px;
    }
  }

  &__search {
    width: 100%;
    height: 50px;
    margin: 20px 0 30px 0;
    padding: 20px;
    border: 0;
    border-radius: 5px;
  }
}
</style>
