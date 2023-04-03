import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import PokeCard from '../PokeCard.vue';

describe('PokeCard', () => {
  it('renders pokemon image', () => {

    const pokemon = { name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' }
    const wrapper = shallowMount(PokeCard, {
      props: { pokemon }
    });

    expect(wrapper.find('img').attributes('src')).toBe(pokemon.image);
    expect(wrapper.text()).toContain(pokemon.name);
  })
})
