import { useState, useEffect, useDebugValue } from "react";

export default function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(pizzaOfTheDay ? `${pizzaOfTheDay.id} : ${pizzaOfTheDay.name}` : "Loading...");
    
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }

    useEffect(() => {
        fetchPizzaOfTheDay();
    }, []);

    return pizzaOfTheDay;
        
}
