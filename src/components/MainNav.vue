<template>
  <div class="container mb-5">
    <nav>
      <RouterLink class="mr-2 main-btn" to="/dashboard">Home</RouterLink>
      <RouterLink class="mr-2 main-btn" to="/about">About</RouterLink>
      <RouterLink class="mr-2 main-btn" to="/favorites">Favorites</RouterLink>
      <button @click="logOut" class="main-btn main-btn--principal">Log out</button>
    </nav>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  methods: {
    logOut() {
      useAuthStore().logOut();
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .router-link-exact-active {
      text-decoration: underline;
    }
  }
</style>