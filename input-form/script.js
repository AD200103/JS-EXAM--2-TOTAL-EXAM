import { createItems } from "../utils/fetch.js";
import {
  validateInputs,
  optionalInputValidation,
} from "../utils/validation.js";
const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const itemLocation = document.getElementById("location");
const imageUrl = document.getElementById("image-url");
const warrningMessage = document.getElementById("warning-message");
const buttonAddItem = document.getElementById("button-add-item");
const buttonHome = document.getElementById("button-home");
const condition = document.getElementById("condition");
const yearsUsed = document.getElementById("years-used");
const originalPackaging = document.getElementById("original-packaging");
const additionalInfo = document.getElementById("additional-info");
warrningMessage.style.color = "Maroon";

const itemAddedSuccesfully = () => {
  setTimeout(() => {
    warrningMessage.style.color = "DarkOliveGreen";
    warrningMessage.innerText = "Item was added succesfuly!";
    (title.value = ""),
      (description.value = ""),
      (price.value = ""),
      (itemLocation.value = ""),
      (imageUrl.value = "");
    (condition.value = ""),
      (description.value = ""),
      (yearsUsed.value = ""),
      (originalPackaging.value = ""),
      (additionalInfo.value = "");
  }, 1000);
};

buttonAddItem.addEventListener("click", async (event) => {
  if (
    validateInputs(
      warrningMessage,
      title,
      description,
      price,
      itemLocation,
      yearsUsed,
      imageUrl
    ) == false
  ) {
    return;
  }
  optionalInputValidation(
    yearsUsed,
    condition,
    originalPackaging,
    additionalInfo
  );
  event.preventDefault();
  const response = await createItems(
    title,
    description,
    price,
    itemLocation,
    imageUrl,
    condition,
    yearsUsed,
    originalPackaging,
    additionalInfo
  );

  if (response.status === 201) {
    itemAddedSuccesfully();
  }
});

buttonHome.addEventListener("click", () => {
  window.location.replace("../index.html");
});
