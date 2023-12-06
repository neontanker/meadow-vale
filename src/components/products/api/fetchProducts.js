const fetchProducts = async ({ signal, options }) => {
  let url = `https://fakestoreapi.com/products/${options}`;

  // if (query) {
  //   url += "/" + String(query);
  // }

  const response = await fetch(
    url,
    { signal: signal },
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`${response.statusText}: ${response.status}`);
  }

  const data = await response.json();

  return data;
};

export default fetchProducts;
