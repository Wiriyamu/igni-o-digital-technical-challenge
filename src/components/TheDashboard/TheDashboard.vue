<template>
  <section class="dashboard">
    <navbar-dashboard />
    <breadcrumbs-dashboard />

    <section class="dashboard__filters-list">
      <filters-dashboard />
      <list-dashboard />
    </section>
  </section>
</template>

<script>
import BreadcrumbsDashboard from './BreadcrumbsDashboard.vue'
import FiltersDashboard from './FiltersDashboard.vue'
import ListDashboard from './ListDashboard.vue'
import NavbarDashboard from './NavbarDashboard.vue'
export default {
  name: 'TheDashboard',
  components: {
    NavbarDashboard,
    BreadcrumbsDashboard,
    FiltersDashboard,
    ListDashboard
  }
}
</script>
NavbarDashboard

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  padding: 2% 2%;
  background-color: #f9f9f9;

  &__filters-list {
    display: flex;
  }
}
</style>
