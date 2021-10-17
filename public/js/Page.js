import Card from "./Card.js";
import Component from "./Component.js";
import GetServices from "./PokemonServices.js";

class Page extends Component {
  parentElement;
  urlApi;
  pokemonsResults;
  constructor(parentElement, urlApi) {
    super(parentElement, "container");
    this.urlApi = urlApi;
    this.generatePageHtml();

    (async () => {
      const pokemonList = new GetServices();
      const responsePokemonList = await pokemonList.getPokemons(this.urlApi);
      this.pokemonsResults = responsePokemonList.results;

      const cardParent = document.querySelector(".list-cards");

      this.pokemonsResults.map(async (pokemon) => {
        await new Card(cardParent, pokemon.url);
      });

      /*   const newCards = () => {
        new Card(cardParent, this.pokemonsResults.url);
      }; */
    })();

    //let cards = pokemonsPage.map();
  }

  generatePageHtml() {
    const pageHtml = `      
      <header>
        <img src="/public/image/pokemon-logo.svg" alt="pokemon logo" />
      </header>
      <nav>
        <ul class="navigator">
          <li class="universo">Pokédex</li>
          <li class="universo">My Pokemon Family</li>
        </ul>
      </nav>
      <main>
        <div>
          <div class="search">
            <input type="text" class="search__text" />
            <button type="submit" class="search__button">search</button>
          </div>
          <div class="list">
            <ul class="list-cards">

            </ul>
          </div>
        </div>
      </main>`;

    this.element.innerHTML = pageHtml;
  }
}

export default Page;
