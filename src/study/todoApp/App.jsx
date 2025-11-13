import { React, useState, useEffect, useRef } from "react";
import { Header } from "./Header";
import { TodoEditor } from "./TodoEditor";
import { TodoList } from "./TodoList";
import { TestComp } from "./TestComp";

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
    content: "love",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "가loV",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);

  const [todo, setTodo] = useState(mockTodo);

  // 할일 생성 함수
  const createTodo = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createdDate: new Date().getTime(),
    };
    setTodo([...todo, newItem]);
    idRef.current++;
  };

  // todo의 item의 id와 같으면 isDone 변경하는 로직 (할일 수정 함수)
  const updateTodo = (targetId) => {
    setTodo(
      todo.map((item) => {
        return item.id === targetId ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };

  // 할일 삭제
  const deleteTodo = (targetId) => {
    const newTodo = todo.filter((item) => item.id !== targetId);
    setTodo(newTodo);
  };

  return (
    <>
      <TestComp />
      <div className="mx-40 px-10 py-10 border flex flex-col gap-12">
        <Header />
        <TodoEditor onCreateTodo={createTodo} />
        <TodoList todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export { App };
