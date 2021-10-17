import Page from "./js/Page.js";

//const blue = new Card ({ id:01, name:"bulbasur", imageUrl:"urlfafda"}, "div")

const body = document.querySelector("body", "");
let offset = 0;

new Page(body, `https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`);

const nextPage = document.querySelector(".next-page");
const beforePage = document.querySelector(".before-page");

/* //buttons function
nextPage.addEventListener(next);
beforePage.addEventListener(before);

function next() {
  offset = offset + 12;
  new Page(body, `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
}

function before() {
  if (offset === 0) {
    offset = 0;
  } else {
    offset = offset - 12;
    new Page(
      body,
      `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
    );
  }
}
 */
