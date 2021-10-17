import Card from "./Card.js";
import Component from "./Component.js";
import PokemonService from "./PokemonServices.js";
import GetServices from "./PokemonServices.js";

class Page extends Component {
  parentElement;
  pokemonsResults;
  constructor(parentElement) {
    debugger;
    super(parentElement, "container");

    this.generatePageHtml();

    const pokemonsPage = (async () => {
      const pokemonList = new GetServices();
      const responsePokemonList = await pokemonList.getPokemons();
      this.pokemonsResults = responsePokemonList.results;
      console.log(pokemonsPage);

      const cardParent = document.querySelector(".list-cards");

      let cards = this.pokemonsResults.map((pokemon) => new Card(cardParent));
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
