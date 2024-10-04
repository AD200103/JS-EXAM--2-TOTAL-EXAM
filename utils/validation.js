export const validateInputs = (
  warrningMessage,
  title,
  description,
  price,
  itemLocation,
  yearsUsed,
  imageUrl
) => {
  const numberRegex = /^\d+(\.\d+)?$/;
  const imageUrlRegex =
    /https?:\/\/(?:www\.)?[^\s\/]+\/[^\s]+\.(?:jpg|jpeg|png|gif|bmp|webp|svg)(?:\?.*)?$/;
  if (
    title.value == "" ||
    description.value == "" ||
    price.value == "" ||
    itemLocation.value == "" ||
    imageUrl.value == ""
  ) {
    warrningMessage.innerText = "Please fill out all the required fields";
    return false;
  }
  if (numberRegex.test(price.value) == false) {
    warrningMessage.innerText = "Your price must be numbers only!";
    return false;
  }
  if (imageUrlRegex.test(imageUrl.value) == false) {
    warrningMessage.innerText = "Your image adress is incorrect!";
    return false;
  }
  if (
    numberRegex.test(yearsUsed.value) == false &&
    yearsUsed.value !== "" &&
    yearsUsed.value !== "-------"
  ) {
    warrningMessage.innerText = "Years must be numbers only!";
    return false;
  }
  return true;
};
export const optionalInputValidation = (
  yearsUsed,
  condition,
  originalPackaging,
  additionalInfo
) => {
  if (yearsUsed.value == "") {
    yearsUsed.value = "-------";
  } else {
    yearsUsed.value = parseFloat(yearsUsed.value).toFixed(1);
  }
  if (condition.value == "") {
    condition.value = "-------";
  }
  if (originalPackaging.value == "") {
    originalPackaging.value = "-------";
  }
  if (additionalInfo.value == "") {
    additionalInfo.value = "-------";
  }
};
