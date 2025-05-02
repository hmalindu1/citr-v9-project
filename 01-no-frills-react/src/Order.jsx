import { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";

const intl = new Intl.NumberFormat("en-LK", {
  style: "currency",
  currency: "LKR",
});

export default function Order() {
  // const pizzaType = "pepperoni";
  // const pizzaSize = "M";

  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  async function checkout() {
    setLoading(true);

    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({cart}),
    })

    setCart([]);
    setLoading(false);
  }

  let prize, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    prize = intl.format(selectedPizza?.sizes[pizzaSize]);
  }

  async function fetchPizzaTypes() {
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    const pizzaResponse = await fetch("/api/pizzas");
    const pizzaJson = await pizzaResponse.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []);

  const handlePizzaSizeChange = (event) => {
    setPizzaSize(event.target.value);
  };
  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            setCart([...cart, { pizza: selectedPizza, size: pizzaSize, prize }]);
          }}
        >
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                onChange={(event) => {
                  setPizzaType(event.target.value);
                }}
                name="pizza-type"
                value={pizzaType}
              >
                {pizzaTypes.map((pizza) => {
                  return (
                    <option key={pizza.id} value={pizza.id}>
                      {pizza.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    checked={pizzaSize === "S"}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                    onChange={handlePizzaSizeChange}
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "M"}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                    onChange={handlePizzaSizeChange}
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    checked={pizzaSize === "L"}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                    onChange={handlePizzaSizeChange}
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          {loading ? (
            <h3>LOADING …</h3>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{prize}</p>
            </div>
          )}
        </form>
      </div>
      {loading ? " LOADING..." : <Cart cart={cart} checkout={checkout}/>}
    </div>
  );
}
