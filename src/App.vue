<template>
  <main class="app">
    <the-sidebar />
    <the-dashboard />
  </main>
</template>

<script>
import TheDashboard from './components/TheDashboard.vue'
import TheSidebar from './components/TheSidebar.vue'

export default {
  components: { TheSidebar, TheDashboard },
  name: 'App'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.app {
  display: flex;
  background-color: orange;
}
</style>
