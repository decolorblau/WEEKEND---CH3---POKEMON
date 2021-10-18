import Card from "./Card.js";
import Component from "./Component.js";
import GetServices from "./PokemonServices.js";

let offset = 0;
let totalCount = 898;
let first = 0;
let last = 12;

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
    const startPage = document.querySelector(".start");
    const endPage = document.querySelector(".end");

    //buttons function
    nextPage.addEventListener("click", next);
    beforePage.addEventListener("click", before);
    allPage.addEventListener("click", all);
    startPage.addEventListener("click", start);
    endPage.addEventListener("click", end);

    function next() {
      document.querySelector(".container").remove();
      offset += 12;
      first += 12;
      last += 12;

      new Page(
        body,
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
      );

      return offset;
    }

    function before() {
      document.querySelector(".container").remove();
      if (offset === 0) {
        offset = 0;
        first = 0;
        last = 12;
        new Page(
          body,
          `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
        );
      } else {
        offset -= 12;
        first -= 12;
        last -= 12;
        new Page(
          body,
          `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
        );
      }
      return offset;
    }

    function all() {
      first = 0;
      offset = 0;
      last = 898;
      body.removeChild(document.querySelector(".container"));
      new Page(body, `https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`);
    }

    function start() {
      document.querySelector(".container").remove();
      offset = 0;
      first = 0;
      last = 12;
      new Page(
        body,
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
      );

      return offset;
    }
    function end() {
      document.querySelector(".container").remove();
      offset = 888;
      first = 889;
      last = 898;
      new Page(
        body,
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
      );
      return offset;
    }
  }

  generatePageHtml() {
    const pageHtml = `      
      <header>
        <div class="h1">
          <img src="./image/pokemon-logo.svg" alt="pokemon logo" />
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
           <div> 
            <button type="submit" class="all">All Pokemons</button>
           </div> 
           <div> 
            <button type="submit" class="start"><<<</button>
            <button type="submit" class="before">< Before</button>
            <button type="submit" class="next">Next ></button>
            <button type="submit" class="end">>>></button>
           </div>
           <div> 
            <p>${first} - ${last} of 898</p>
           </div>
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
