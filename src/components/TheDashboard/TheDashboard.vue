<template>
  <section class="dashboard">
    <navbar-dashboard />
    <breadcrumbs-dashboard />
  </section>
</template>

<script>
import BreadcrumbsDashboard from './BreadcrumbsDashboard.vue'
import NavbarDashboard from './NavbarDashboard.vue'
export default {
  name: 'TheDashboard',
  components: { NavbarDashboard, BreadcrumbsDashboard },
  setup() {
    return {}
  }
}
</script>
NavbarDashboard

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100vh;
  padding: 2% 2%;
  background-color: #f9f9f9;
}
</style>
