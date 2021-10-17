import Page from "./js/Page.js";

//const blue = new Card ({ id:01, name:"bulbasur", imageUrl:"urlfafda"}, "div")

const body = document.querySelector("body");
let offset = 0;

new Page(body, `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`);
