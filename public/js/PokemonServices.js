class PokemonServices {
  urlApi;

  constructor(urlApi) {
    this.urlApi = urlApi;
  }

  async getPokemons() {
    const response = await fetch(this.urlApi);
    const pokemons = await response.json();
    return pokemons;
  }
}

export default PokemonService;
