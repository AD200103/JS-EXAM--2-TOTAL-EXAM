import { gettingCards } from "./utils/fetch.js";
import { createCards } from "./utils/building.js";
const itemCardWrapper = document.getElementById("item-card-wrapper");
const buttonForm = document.getElementById("add-item-btn");

const startApp = async () => {
  const generatedCards = await gettingCards();
  createCards(generatedCards, itemCardWrapper);
};
startApp();

buttonForm.addEventListener("click", () => {
  window.location.replace("./input-form/index.html");
});
