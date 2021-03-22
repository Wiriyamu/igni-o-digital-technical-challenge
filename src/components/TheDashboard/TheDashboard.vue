<template>
  <section class="dashboard">
    <navbar-dashboard />
  </section>
</template>

<script>
import NavbarDashboard from './NavbarDashboard.vue'
export default {
  name: 'TheDashboard',
  components: { NavbarDashboard },
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
