export const createItem = async (itemInfo, itemContentWrapper) => {
  const condition = document.createElement("h2");
  const yearsUsed = document.createElement("h2");
  const originalPackaging = document.createElement("p");
  const additionalInfo = document.createElement("p");
  const title = document.createElement("h1");
  const price = document.createElement("p");
  const image = document.createElement("img");
  const infoCard = document.createElement("div");
  const infoCardAndImage = document.createElement("div");

  image.setAttribute("class", "item-img");
  infoCard.setAttribute("class", "info-card");
  infoCardAndImage.setAttribute("class", "info-card-and-image");
  additionalInfo.setAttribute("class", "additional-info");

  condition.innerText = "Condition: " + itemInfo.condition;
  yearsUsed.innerText = "Years used: " + itemInfo.yearsUsed;
  originalPackaging.innerText =
    "Original packaging: " + itemInfo.originalPackaging;
  additionalInfo.innerText = "Additional info: " + itemInfo.additionalInfo;
  title.innerText = itemInfo.title;
  price.innerText = "Price: " + itemInfo.price + " €";
  image.src = itemInfo.imageUrl;

  infoCard.append(
    price,
    condition,
    yearsUsed,
    originalPackaging,
    additionalInfo
  );
  infoCardAndImage.append(image, infoCard);
  itemContentWrapper.append(title, infoCardAndImage);
};
export const createCards = (generatedCards, itemCardWrapper) => {
  generatedCards.sort((a, b) => a.price - b.price);
  generatedCards.forEach((item) => {
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("h2");
    const moreBtn = document.createElement("a");
    const itemLocation = document.createElement("p");
    const image = document.createElement("img");
    const textCard = document.createElement("div");
    const imageTextCard = document.createElement("div");
    const itemCard = document.createElement("div");

    title.innerText = item.title;
    description.innerText = item.description;
    price.innerText = "Price: " + item.price + " €";
    itemLocation.innerText = "Location: " + item.itemLocation;
    image.src = item.imageUrl;
    moreBtn.innerText = "More info >>";
    moreBtn.href = `./item/index.html?id=${item.id}`;

    imageTextCard.setAttribute("class", "image-text-card");
    itemCard.setAttribute("class", "item-card");
    textCard.setAttribute("class", "text-cards");
    moreBtn.setAttribute("class", "more-btn");
    image.setAttribute("class", "item-img");

    textCard.append(title, description, price, itemLocation);
    imageTextCard.append(image, textCard);
    itemCard.append(imageTextCard, moreBtn);
    itemCardWrapper.append(itemCard);
  });
};
