import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  //   const totalPopulation = cart.reduce(
  //     (totalPopulation, country) => totalPopulation + country.population,
  //     0
  //   );
  let totalPopulation = 0;
  for (let i = 0; i < cart.length; i++) {
    const country = cart[i];
    totalPopulation = totalPopulation + country.population;
  }
  return (
    <div>
      <h3>This is Cart: {cart.length}</h3>
      <h3>Total Population: {totalPopulation}</h3>
    </div>
  );
};

export default Cart;
