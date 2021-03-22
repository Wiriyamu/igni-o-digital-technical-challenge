<template>
  <nav class="nav">
    <div class="nav__icons-left">
      <img
        class="nav__icon"
        src="@/assets/images/check-square.svg"
        alt="Todo"
      />
      <img
        class="nav__icon"
        src="@/assets/images/message-square.svg"
        alt="Conversar"
      />
      <img class="nav__icon" src="@/assets/images/mail.svg" alt="Email" />
      <img
        class="nav__icon"
        src="@/assets/images/calendar.svg"
        alt="Calendário"
      />
      <img class="nav__icon" src="@/assets/images/star.svg" alt="Favoritos" />
    </div>

    <div class="nav__icons-right">
      <img
        class="nav__icon"
        src="@/assets/images/bell.svg"
        alt="Notificações"
      />
      <img class="nav__icon" src="@/assets/images/search.svg" alt="Pesquisa" />

      <div class="nav__name-user">
        <p class="nav__username">Maria Elza</p>
        <p class="nav__client">Cliente VIP</p>
      </div>
      <img src="@/assets/images/user.svg" alt="Usuário" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarDashboard'
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 20px 20px;
  border-radius: 5px;
  background-color: #fff;

  &__icons-left {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__icon {
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  &__icons-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__name-user {
    margin-left: 5px;
  }

  &__client {
    margin-left: 10px;
    font-size: 11px;
  }
}
</style>
