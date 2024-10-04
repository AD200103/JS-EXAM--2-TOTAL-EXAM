import { getItems, deleteItems } from "../utils/fetch.js";
import { createItem } from "../building/building.js";
const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const buttonDelete = document.getElementById("delete-button");
const buttonHome = document.getElementById("button-home");
const itemContentWrapper = document.getElementById("item-content-wrapper");
const warningMessage = document.getElementById("warning-message");
buttonDelete.setAttribute("class", "button-delete");

const initPage = async () => {
  const itemInfo = await getItems(id);
  createItem(itemInfo, itemContentWrapper);
};

initPage();

buttonDelete.addEventListener("click", async () => {
  const response = await deleteItems(id);
  if (response.status == 200) {
    warningMessage.style.color = "DarkOliveGreen";
    warningMessage.innerText = "Item was deleted succesfuly!";
  }
});

buttonHome.addEventListener("click", () => {
  window.location.replace("../index.html");
});
