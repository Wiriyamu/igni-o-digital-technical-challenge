<template>
  <aside class="sidebar">
    <brend-sidebar />
    <select-sidebar />
    <apps-sidebar />
  </aside>
</template>

<script>
import AppsSidebar from './AppsSidebar.vue'
import BrendSidebar from './BrendSidebar.vue'
import SelectSidebar from './SelectSidebar.vue'

export default {
  name: 'TheSidebar',
  components: { SelectSidebar, BrendSidebar, AppsSidebar }
}
</script>

<style lang="scss" scoped>
.sidebar {
  max-width: 280px;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: auto;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  &__nav {
    margin: 50px 0 10px 30px;
  }

  &__nav-apps {
    margin-bottom: 10px;
    font-weight: 300;
    text-transform: uppercase;
    color: #999999;
  }

  &__nav-item {
    display: flex;
    margin: 20px 0;
  }

  &__nav-item-text {
    margin-left: 10px;
    color: #2c2c2c;
  }
}
</style>
