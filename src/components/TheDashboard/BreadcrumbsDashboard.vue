<template>
  <section class="breadcrumbs">
    <div class="breadcrumbs__left">
      <p class="breadcrumbs__results">Resultados</p>
      <img src="@/assets/images/divider.svg" alt="Divisor" />
      <img
        class="breadcrumbs__icons-left"
        src="@/assets/images/home.svg"
        alt="Home"
      />
      <img
        class="breadcrumbs__icons-left"
        src="@/assets/images/chevrons-right.svg"
        alt="Flechas"
      />
      <p class="breadcrumbs__course">Cursos</p>
    </div>

    <div class="breadcrumbs__right">
      <img
        class="breadcrumbs__settings"
        src="@/assets/images/settings.svg"
        alt="Configurações"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'BreadcrumbsDashboard'
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables.scss';

.breadcrumbs {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }

  &__left {
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
      flex-wrap: wrap;
    }
  }

  &__results {
    margin-right: 3rem;
    font-size: 2.4rem;
  }

  &__icons-left,
  &__course {
    margin-left: 1.5rem;
  }

  &__right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    cursor: pointer;
    background: #ec008c;
    background: -webkit-linear-gradient(to right, #fc6767, #ec008c);
    background: linear-gradient(to right, #fc6767, #ec008c);
  }

  &__settings {
    width: 1.8rem;
  }
}
</style>
