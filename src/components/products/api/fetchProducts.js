const fetchProducts = async ({ signal, options }) => {
  const url = `https://fakestoreapi.com/products/${options}`;

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
