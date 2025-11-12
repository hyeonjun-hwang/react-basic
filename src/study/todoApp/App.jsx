import React from "react";
import { Header } from "./Header";
import { TodoEditor } from "./TodoEditor";
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className="mx-40 px-10 py-10 border flex flex-col gap-10">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}

export { App };
