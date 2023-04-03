<template>
  <div class="login-wrap">
    <div class="login-card">
      <h2 class="text-center">Hi agian trainer!</h2>
      <div class="sprite">
        <div v-if="loadingSprite" class="loader"></div>
        <img @load="loadingSprite = false" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png">
      </div>
      <form class="mb-4" @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" v-model="username" required placeholder="User: test">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required placeholder="Password: test">
        </div>
        <div class="d-flex justify-content-between">
          <RouterLink class="main-btn pl-0" to="/">Go Back</RouterLink>
          <button type="submit" class="main-btn main-btn--principal">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
      loadingSprite: true
    }
  },
  computed: {
    isAuthenticated() {
      return useAuthStore().isAuthenticated
    }
  },
  methods: {
    login() {
      // Check user credentials
      if (this.username === 'test' && this.password === 'test') {
        useAuthStore().logIn();
        this.$router.push('/dashboard');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    }
  },
  beforeMount(){
    if(this.isAuthenticated){
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .login-card {
      width: 500px;
      padding: 25px;
      position: relative;
      backdrop-filter: saturate(180%) blur(12px);
      border: 2px solid var(--vt-c-black-dark);
      border-radius: 25px;
      box-shadow: 0 8px 16px var(--vt-c-black);
      .sprite {
        min-height: 250px;
        margin: 20px auto;
        width: 250px;
        img {
          max-width: 100%;
        }
      }
    }
  }
</style>