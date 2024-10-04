export const gettingCards = async () => {
  const response = await fetch(
    "https://66f0921df2a8bce81be63552.mockapi.io/item"
  );
  const data = await response.json();
  return data;
};

export const createItems = async (
  title,
  description,
  price,
  itemLocation,
  imageUrl,
  condition,
  yearsUsed,
  originalPackaging,
  additionalInfo
) => {
  const data = {
    title: title.value,
    description: description.value,
    price: parseFloat(price.value).toFixed(2),
    itemLocation: itemLocation.value,
    imageUrl: imageUrl.value,
    condition: condition.value,
    yearsUsed: yearsUsed.value,
    originalPackaging: originalPackaging.value,
    additionalInfo: additionalInfo.value,
  };

  const response = await fetch(
    "https://66f0921df2a8bce81be63552.mockapi.io/item",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return response;
};

export const getItems = async (id) => {
  const response = await fetch(
    `https://66f0921df2a8bce81be63552.mockapi.io/item/${id}`
  );
  const data = await response.json();
  return data;
};

export const deleteItems = async (id) => {
  const response = await fetch(
    `https://66f0921df2a8bce81be63552.mockapi.io/item/${id}`,
    { method: "DELETE" }
  );
  return response;
};
