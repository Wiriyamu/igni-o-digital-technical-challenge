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

      <div class="nav__username">
        <p class="nav__fullname">Maria Elza</p>
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
@import '@/assets/sass/abstracts/_variables.scss';

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 2rem 2rem;
  border-radius: 0.3125rem;
  background-color: $white;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
  }

  &__icons-left {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &__icon {
    margin-right: 2rem;
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

  &__username {
    margin-right: 0.3125rem;
  }

  &__fullname {
    font-size: 0.875rem;
  }

  &__client {
    margin-left: 0.625rem;
    font-size: 0.6875rem;
    font-weight: $light;
  }
}
</style>
