class GetServices {
  urlApi;

  async getPokemons(urlApi) {
    const response = await fetch(urlApi);
    const pokemons = await response.json();
    return pokemons;
  }
}

export default GetServices;
