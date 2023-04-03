<template>
  <div @click="goToDetal" class="pokemon-card">
    <div class="card-header">
      <div @click="likeItem($event)" :class="{'is-active': liked}" class="heart"></div>
      <div v-if="loadingSprite" class="loader"></div>
      <img @load="loadingSprite = false" :src="pokemon.image" :alt="pokemon.name">
    </div>
    
    <div class="pokemon-name">{{pokemon.name}}</div>
  </div>
</template>

<script>

export default {
  name: 'Pokemon Card',
  props: {
    pokemon: {
      type: Object,
      require: true
    }
  },
  data(){
    return {
      liked: false,
      loadingSprite: true
    }
  },
  methods: {
    likeItem(event){
      this.liked = !this.liked;
      event.stopPropagation();
    },
    goToDetal() {
      this.$router.push({ name: 'pokemonDetail', params: { id: this.pokemon.name } });
    }
  }
}
</script>

<style lang="scss" scoped>

.pokemon-card {
  min-width: 150px;
  min-height: 150px;
  padding: 10px;
  border-radius: 8px;
  backdrop-filter: saturate(180%) blur(20px);
  border: 2px solid var(--vt-c-black-dark);
  transition: transform .4s;
  cursor: pointer;
  user-select: none;
  &:hover {
    transform: scale(1.04);
  }
  .card-header {
    img {
      max-width: 100%;
    }
  }
  .pokemon-name {
    padding-top: 6px;
    text-transform: capitalize;
  }
}

</style>
