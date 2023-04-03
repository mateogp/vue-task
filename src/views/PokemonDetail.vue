<template>
  <MainNav />

  <div class="detail-wrap">
    <div class="detail-card">
      <div class="detail-head">
        <h1>{{pokemon.name}}</h1>
        <div @click="liked = !liked" :class="{'is-active': liked}" class="heart"></div>
      </div>
      <div class="sprite">
        <div v-if="loadingSprite" class="loader"></div>
        <img @load="loadingSprite = false" :src="pokemon.image">
      </div>
      <div class="d-flex justify-content-between">
        <p><strong>Height:</strong> {{pokemon.height}}</p>
        <p><strong>Weight:</strong> {{pokemon.weight}}</p>
      </div>
      <div class="detail-actions">
        <RouterLink class="main-btn pl-0" to="/dashboard">Go Back</RouterLink>
        <button type="submit" class="main-btn main-btn--principal">Adopt Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MainNav from '@/components/MainNav.vue';

export default {
  components: {
    MainNav
  },
  data() {
    return {
      pokemon: {
        name: this.$route.params.id
      },
      loading: true,
      loadingSprite: true,
      liked: false
    };
  },
  async created() {
    try {
      const id = this.$route.params.id;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.pokemon = {
        name: response.data.name,
        height: response.data.height,
        weight: response.data.weight,
        image: response.data.sprites.other['official-artwork'].front_default
      };
      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-wrap {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    .detail-card {
      width: 500px;
      padding: 25px;
      position: relative;
      backdrop-filter: saturate(180%) blur(12px);
      border: 2px solid var(--vt-c-black-dark);
      border-radius: 10px;
      box-shadow: 0 8px 16px var(--vt-c-black);
      .detail-head {
        h1 {
          font-size: 22px;
          text-transform: capitalize;
          margin: 0;
        }        
      }
      .sprite {
        min-height: 250px;
        margin: 20px auto;
        width: 250px;
        img {
          max-width: 100%;
        }
      }
      .detail-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 2px solid var(--vt-c-black-dark);
      }
    }
  }
</style>