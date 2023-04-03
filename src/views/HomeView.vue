<template>
  <main class="main-wrap">
    <div class="container">
      <MainSlide />
      <div class="main-intro mb-2">
        <h1>Welcome Trainer</h1>
        <p>Discover thousands of pokemons that trainers like you have discovered throughout their adventures</p>
      </div>
      <div class="mt-4 text-center">
        <RouterLink class="mr-2 main-btn main-btn--principal" to="/login">I am a trainer</RouterLink>
        <RouterLink class="main-btn" to="/register">I want to be a trainer</RouterLink>
      </div>
    </div>
  </main>
  <footer>
    <p>Proyect by <strong>Mateo Guizado</strong> senior front-end developer</p>
    <p>For <strong>57 Blocks</strong> Company</p>
  </footer>
</template>

<script>
import MainSlide from '../components/MainSlide.vue';
import { useAuthStore } from '@/stores/auth';

export default {
  name: 'PokeApp',
  computed: {
    isAuthenticated() {
      return useAuthStore().isAuthenticated
    }
  },
  components: {
    MainSlide
  },
  methods: {
    logOut() {
      useAuthStore().logOut();
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
  .main-wrap {
    padding: 50px 0;
    .main-intro {
      max-width: 400px;
      margin: 0 auto;
      text-align: center;
      color: var(--vt-c-white);
    }
  }

  footer {
    text-align: center;
  }
</style>