<template>
  <select class="select">
    <option disabled>Área do cliente</option>
    <option>Alguma Coisa</option>
    <option>Outra Coisa</option>
  </select>
</template>

<script>
export default {
  name: 'SelectSidebar'
}
</script>

<style lang="scss" scoped>
.select {
  max-width: 236px;
  width: 100%;
  height: 36px;
  margin: 0 20px;
  padding: 0px 5px;
  border: 0;
  border-radius: 4px;
  background-color: #ececec;
}
</style>
