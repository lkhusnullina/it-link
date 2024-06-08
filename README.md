Тестовое задание

Обязательно:
- стек: next.js (page router, можно только на react), typescript
- использовать атомарный дизайн архитектуру (atom, molecule, organism, view) 
- соблюдать принципы: абстракция, инкапсуляция, single and responsibity


Переписать сл. код в атомарном дизайне.

import { useState } from "react";

const Counter = () => {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <>
      <span>{index}</span>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  );
};
