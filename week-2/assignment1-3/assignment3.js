function calculate(data) {
  let totalPrice = 0;
  for (let i = 0; i < data.products.length; i++) {
    totalPrice += data.products[i].price;
  }
  return totalPrice * data.discount;
}

console.log(
  calculate({
    discount: 0.1,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // show the total price of all products after applying a discount
