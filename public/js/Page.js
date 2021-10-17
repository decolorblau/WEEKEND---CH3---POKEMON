import Card from "./Card.js";
import Component from "./Component.js";
import GetServices from "./PokemonServices.js";

let offset = 0;
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
    })();

    const body = document.querySelector("body");
    const nextPage = document.querySelector(".next");
    const beforePage = document.querySelector(".before");
    const allPage = document.querySelector(".all");

    //buttons function
    nextPage.addEventListener("click", next);
    beforePage.addEventListener("click", before);
    allPage.addEventListener("click", all);

    function next() {
      console.log("hey");

      document.querySelector(".container").remove();
      offset += 12;
      new Page(
        body,
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
      );
      console.log(offset);
      return offset;
    }

    function before() {
      console.log("hola");
      document.querySelector(".container").remove();
      if (offset === 0) {
        offset = 0;
        new Page(
          body,
          `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
        );
      } else {
        offset -= 12;
        new Page(
          body,
          `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
        );
      }
      return offset;
    }

    function all() {
      body.removeChild(document.querySelector(".container"));
      new Page(body, `https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`);
    }
  }

  generatePageHtml() {
    const pageHtml = `      
      <header>
        <div class="h1">
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
            <button type="submit" class="all">All</button>
            <button type="submit" class="before"><</button>
            <button type="submit" class="next">></button>
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
