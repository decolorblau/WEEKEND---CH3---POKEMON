import Component from "./Component.js";
import GetServices from "./PokemonServices.js";

class Card extends Component {
  pokemonUrl;
  textImage;
  pokemonName;
  imageUrl;
  id;
  pokemon = {};

  constructor(parentElement, pokemonUrl) {
    super(parentElement, "list-cards__unit", "li");
    // this.generateHtml();

    (async () => {
      this.pokemonUrl = await pokemonUrl;
      const pokemonCardList = new GetServices();
      const responsePokemonCardList = await pokemonCardList.getPokemons(
        this.pokemonUrl
      );

      this.pokemon = responsePokemonCardList;
      this.id = responsePokemonCardList.id;

      const nameLowerCase = responsePokemonCardList.name;

      this.pokemonName = UperCaseFirstLetter(nameLowerCase);
      this.imageUrl =
        responsePokemonCardList.sprites.other.dream_world.front_default;
      this.textImage = `Card of ${this.pokemonName}, number ${this.id}`;

      this.generateHtml();
    })();
  }
  generateHtml() {
    const cardHtml = ` <div class="card">
                  <section class="card__header">
                    <div class="card__id">
                      <span>Nº ${this.id}</span>
                    </div>
                    <div class="card__name">
                      <p>${this.pokemonName}</p>
                    </div>
                  </section>
                  <section class="card__image">
                    <img src="${this.imageUrl}" alt="${this.textImage}"/>
                  </section>
                  <button class=".button">
                    <img src="./image/pokeball 70px.png" alt="pokeball" />
                    CATCH POKEMON
                  </button>
                </div>`;

    this.element.innerHTML = cardHtml;
  }
}

function UperCaseFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default Card;
