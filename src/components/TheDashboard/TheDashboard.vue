<template>
  <section class="dashboard">
    <navbar-dashboard />
    <breadcrumbs-dashboard />

    <filters-dashboard />
  </section>
</template>

<script>
import BreadcrumbsDashboard from './BreadcrumbsDashboard.vue'
import FiltersDashboard from './FiltersDashboard.vue'
import NavbarDashboard from './NavbarDashboard.vue'
export default {
  name: 'TheDashboard',
  components: { NavbarDashboard, BreadcrumbsDashboard, FiltersDashboard },
  setup() {
    return {}
  }
}
</script>
NavbarDashboard

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  padding: 2% 2%;
  background-color: #f9f9f9;
}
</style>
