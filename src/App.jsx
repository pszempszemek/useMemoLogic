import React, { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c+1);
  }

  const addTodo = () => {
    setTodos((t) => [...t,"New Todo"]);
  }
  
  return (
      <main>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Conut: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </main>
  );
}

const expensiveCalculation = (num) => {
  console.log('Calculating');
  for (let i =0; i<100000000; i++) {
    num +=1;
  }
  return num;
};
