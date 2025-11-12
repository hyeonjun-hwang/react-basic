import { React, useState, useEffect, useRef } from "react";
import { Header } from "./Header";
import { TodoEditor } from "./TodoEditor";
import { TodoList } from "./TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: true,
    content: "가나다라",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "qwindionwqodno",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(2);

  const [todo, setTodo] = useState(mockTodo);

  const CreateTodo = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([...todo, newItem]);
    idRef.current++;
  };

  return (
    <div className="mx-40 px-10 py-10 border flex flex-col gap-12">
      <Header />
      <TodoEditor onCreateTodo={CreateTodo} />
      <TodoList />
    </div>
  );
}

export { App };
