import Component from "./Component.js";

class Card extends Component {

  textImage;

  constructor({id, name, imageUrl}, parentElement){
    super(this.parentElement, "list-cards__unit", "li")
      this.textImage = `Card of ${name}, number ${id}`

    this.generateHtml()
  }

  generateHtml(title, name, imageUrl,textImage){
   const cardHtml= ` <div class="card">
                  <section class="card__header">
                    <div class="card__id">
                      <span>${id}</span>
                    </div>
                    <div class="card__name">
                      <p>${name}</p>
                    </div>
                  </section>
                  <section class="card__image">
                    <img src="${imageUrl}" alt="${textImage}"/>
                  </section>
                  <button>
                    <img src="/public/image/pokeball.svg" alt="pokeball" />
                    CATCH POKEMON
                  </button>
                </div>`

    this.element.innerHTML = cardHtml
  }

}

export default Card;