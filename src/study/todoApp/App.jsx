import { React, useState, useEffect, useRef, useReducer } from "react";
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

function reducer(state, action) {
  // 상태 변화 코드
  switch (action.type) {
    case "CREATE":
      return [...state, action.newItem];
    case "UPDATE":
      return state.map((item) => {
        return item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item;
      });
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const idRef = useRef(3);

  // 할일 생성 함수
  const createTodo = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
    idRef.current++;
  };

  // todo의 item의 id와 같으면 isDone 변경하는 로직 (할일 수정 함수)
  const updateTodo = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  // 할일 삭제
  const deleteTodo = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <>
      {/* <TestComp /> */}
      <div className="mx-40 px-10 py-10 border flex flex-col gap-12">
        <Header />
        <TodoEditor onCreateTodo={createTodo} />
        <TodoList todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export { App };
