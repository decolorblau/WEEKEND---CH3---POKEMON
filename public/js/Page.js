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
        <div>
          <img src="/public/image/pokemon-logo.svg" alt="pokemon logo" />
        </div>
        <nav>
          <ul class="navigator">
            <li class="universo">Pokédex</li>
            <li class="universo">My Pokemon Family</li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <div class="button-page">
            <button type="submit" class="button-page__all">All</button>
            <button type="submit" class="button-page__before"><</button>
            <button type="submit" class="button-page__next">></button>
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
