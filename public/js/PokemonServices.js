class GetServices {
  offset = 0;

  constructor(offset) {
    this.urlApi = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`;
  }

  async getPokemons() {
    const response = await fetch(this.urlApi);
    const pokemons = await response.json();
    return pokemons;
  }
}

/* class PokemonServices extends GetServices { 
  offset = 0;

  constructor (offset){
    super(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
  }
}
 */
export default GetServices;
