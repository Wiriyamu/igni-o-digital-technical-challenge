<template>
  <section class="breadcrumbs">
    <div class="breadcrumbs__left">
      <p class="breadcrumbs__results">Resultados</p>
      <img src="@/assets/images/divider.svg" alt="Divider" />
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
.breadcrumbs {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  &__left {
    display: flex;
    align-items: center;
  }

  &__results {
    margin-right: 30px;
    font-size: 24px;
  }

  &__icons-left,
  &__course {
    margin-left: 10px;
  }

  &__right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #717171;
  }

  &__settings {
    width: 18px;
  }
}
</style>
