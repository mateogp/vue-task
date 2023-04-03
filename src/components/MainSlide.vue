<template>
  <div class="slide-wrap">
    <transition v-if="slideReady" name="fade" mode="out-in">
      <div :key="currentSlide" class="slideshow-item">
        <div class="slideshow-title">{{ pokemons[currentSlide].name }}</div>
        <div class="slideshow-image">
          <div v-if="loadingSprite" class="loader"></div>
          <img @load="loadingSprite = false" :src="pokemons[currentSlide].sprites.other['official-artwork'].front_default" :alt="pokemons[currentSlide].name">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Main Slide',
  data(){
    return {
      pokemons: [],
      currentSlide: 0,
      slideReady: false,
      loadingSprite: true
    }
  },
  mounted(){
    this.getRandomPokemons();
  },
  methods:{
    async getRandomPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
        const pokemons = response.data.results;
        const randomIndices = new Set();
        while (randomIndices.size < 5) {
          randomIndices.add(Math.floor(Math.random() * pokemons.length));
        }
        const randomPokemons = Array.from(randomIndices).map(index => {
          return axios.get(pokemons[index].url);
        });
        const pokemonData = await Promise.all(randomPokemons);
        this.pokemons = pokemonData.map(response => response.data);
        this.slideReady = true;
        setInterval(this.nextSlide, 5000);
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    nextSlide() {
      this.loadingSprite = true;
      this.currentSlide = (this.currentSlide + 1) % this.pokemons.length;
    }
  }
}
</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-wrap {
  min-height: 382px;
  user-select: none;
  .slideshow-item {
    position: relative;
    color: #000;
    font-size: 20px;
    text-align: center;
    .slideshow-image {
      max-width: 100%;
      width: 350px;
      height: 350px;
      margin: 0 auto;
      img {
        width: 100%;
        // background-color: var(--vt-c-black);
      }
    }
    .slideshow-title {
      text-transform: uppercase;
      color: var(--vt-c-white);
    }
  }
}
</style>
