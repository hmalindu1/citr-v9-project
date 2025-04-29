import { useEffect, useState } from "react";
import Pizza from "./Pizza";

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
  const [loading, setLoading] = useState(true);

  let prize, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
  }

  async function fetchPizzaTypes() {
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
    <div className="order">
      <h2>Create Order</h2>
      <form>
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
                  onClick={handlePizzaSizeChange}
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
                  onClick={handlePizzaSizeChange}
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
                  onClick={handlePizzaSizeChange}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          <Pizza
            name="Pepperoni"
            description="Mozzarella Cheese, Pepperoni"
            image="/public/pizzas/pepperoni.webp"
          />
          <p>$13.37</p>
        </div>
      </form>
    </div>
  );
}
