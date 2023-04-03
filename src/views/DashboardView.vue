<template>
  <MainNav />

  <div class="dashboard-wrap">
    <div class="container">
      <div>
        <div class="mb-5">
          <h1>Welcome trainer!</h1>
          <p>Here you can see the list of all pokemons, discover new ones and <b>like your favorites &#x2764;!</b></p>
        </div>
        
        <div class="grid-container">
          <div v-for="(item, index) in pokemons" :key="index" class="grid-item">
            <PokeCard :pokemon="item" />
          </div>
        </div>
      </div>

      <!-- Loader -->
      <div v-if="true" class="load-wrap">
        <div class="loader"></div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import MainNav from '@/components/MainNav.vue';
import PokeCard from '@/components/PokeCard.vue';

export default {
  layout: 'MainLayout',
  data(){
    return {
      pokemons: [],
      loading: false,
      nextUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20'
    }
  },
  components: {
    PokeCard,
    MainNav
  },
  methods: {
    async loadMore() {
      if (this.loading) {
        return;
      }
      this.loading = true;

      try {
        const response = await axios.get(this.nextUrl);
        this.nextUrl = response.data.next;

        const newPokemonList = await Promise.all(response.data.results.map(async (pokemon) => {
          const pokemonData = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            url: pokemon.url,
            image: pokemonData.data.sprites.other['official-artwork'].front_default,
            id: pokemonData.data.id
          };
        }));

        this.pokemons = [...this.pokemons, ...newPokemonList];
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },

    handleScroll() {
      const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
      if (bottomOfWindow) {
        this.loadMore();
      }
    },
  },
  mounted() {
    this.loadMore()
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>


<style lang="scss" scoped>
  .dashboard-wrap {
    .grid-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      box-sizing: border-box;
    }
    .grid-item {
      flex: 0 0 calc(20% - 10px);
      box-sizing: border-box;
      padding: 10px;
      text-align: center;
    }

    /* Media query responsive grid */
    @media only screen and (max-width: 768px) {
      .grid-item {
        flex: 0 0 calc(50% - 10px);
      }
    }
    
    /* Media query responsive grid mobile */
    @media only screen and (max-width: 480px) {
      .grid-item {
        flex: 0 0 100%;
      }
    }
  }
</style>