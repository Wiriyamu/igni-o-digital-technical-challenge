<template>
  <nav class="nav">
    <p class="nav-apps">Apps</p>
    <ul>
      <li class="nav-item">
        <img src="@/assets/images/TheSidebar/mail.svg" alt="Email" />
        <p class="nav-item-text">Email</p>
      </li>
      <li class="nav-item">
        <img
          src="@/assets/images/TheSidebar/message-square.svg"
          alt="Conversar"
        />
        <p class="nav-item-text">Conversar</p>
      </li>
      <li class="nav-item">
        <img src="@/assets/images/TheSidebar/check-square.svg" alt="Todo" />
        <p class="nav-item-text">Todo</p>
      </li>
      <li class="nav-item">
        <img src="@/assets/images/TheSidebar/calendar.svg" alt="Calendário" />
        <p class="nav-item-text">Calendário</p>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppsSidebar'
}
</script>

<style lang="scss" scoped>
.nav {
  margin: 50px 0 10px 30px;
}

.nav-apps {
  margin-bottom: 10px;
  font-weight: 300;
  text-transform: uppercase;
  color: #999999;
}

.nav-item {
  display: flex;
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.nav-item-text {
  margin-left: 10px;
  color: #2c2c2c;
}
</style>
