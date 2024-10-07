import React, { useState, useEffect } from "react";
import RecipeTank from "./RecipeTank";

function App() {
  const initialIngredients = [
    { name: "Agua", level: 80 },
    { name: "Azúcar", level: 50 },
    { name: "Jugo de Limón", level: 30 },
    { name: "Hielo", level: 20 },
  ];

  const [ingredients, setIngredients] = useState(initialIngredients);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIngredients((prevIngredients) =>
        prevIngredients.map((ingredient) => {
          const newLevel = Math.max(
            0,
            ingredient.level - Math.floor(Math.random() * 5)
          );
          return { ...ingredient, level: newLevel };
        })
      );
      setElapsedTime((prevTime) => prevTime + 1); // Incrementa el tiempo cada segundo
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalIngredients = ingredients.reduce(
    (total, ingredient) => total + ingredient.level,
    0
  );
  const totalCapacity = initialIngredients.reduce(
    (total, ingredient) => total + 100,
    0
  ); // Suponiendo que cada ingrediente tiene una capacidad máxima de 100
  const percentageRemaining = (totalIngredients / totalCapacity) * 100;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Receta de Bebida</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {ingredients.map((ingredient, index) => (
          <RecipeTank
            key={index}
            ingredient={ingredient.name}
            level={ingredient.level}
          />
        ))}
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Datos del Proceso</h2>
        <p>Tiempo transcurrido: {elapsedTime} segundos</p>
        <p>Cantidad total de ingredientes restantes: {totalIngredients}</p>
        <p>Porcentaje total restante: {percentageRemaining.toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default App;
