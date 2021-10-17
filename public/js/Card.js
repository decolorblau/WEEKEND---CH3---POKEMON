import Component from "./Component.js";
import PokemonServices from "./PokemonServices.js";

class Card extends Component {
  urlPokemon;
  pokemon = {};
  textImage;
  name;
  imageUrl;
  id;

  constructor(parentElement, urlPokemon) {
    super(parentElement, "list-cards__unit", "li");
    this.url;
    this.textImage = `Card of ${name}, number ${id}`;

    this.generateHtml();
  }

  generateHtml(name, imageUrl, textImage) {
    const cardHtml = ` <div class="card">
                  <section class="card__header">
                    <div class="card__id">
                      <span>Nº ${id}</span>
                    </div>
                    <div class="card__name">
                      <p>${name}</p>
                    </div>
                  </section>
                  <section class="card__image">
                    <img src="${imageUrl}" alt="${textImage}"/>
                  </section>
                  <button>
                    <img src="/public/image/pokeball.png" alt="pokeball" />
                    CATCH POKEMON
                  </button>
                </div>`;

    this.element.innerHTML = cardHtml;
  }
}

export default Card;
