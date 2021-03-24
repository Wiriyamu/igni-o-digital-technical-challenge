<template>
  <main class="app">
    <the-sidebar />
    <the-dashboard />
  </main>
</template>

<script>
import TheDashboard from './components/TheDashboard/TheDashboard.vue'
import TheSidebar from './components/TheSidebar/TheSidebar.vue'

export default {
  components: { TheSidebar, TheDashboard },
  name: 'App'
}
</script>

<style lang="scss">
.app {
  display: flex;
}
</style>
