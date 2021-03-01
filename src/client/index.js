const FetchPizzas = async () => {
  const response = await fetch('/pizzas-mock-data.json');
  return response.json();
};

export default FetchPizzas;
