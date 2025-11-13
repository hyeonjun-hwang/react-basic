import { React, useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { Input } from "@/components/ui";

function TodoList({ todo, updateTodo, deleteTodo }) {
  // 인풋에 입력한 검색어 상태 값
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색 기능
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((item) =>
          item.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="font-semibold">Todo List</p>
        {/* 검색 */}
        <Input
          className="border-t-0 border-l-0 border-r-0 shadow-none focus-visible:ring-0 rounded-none focus-visible:ring-offset-0"
          // value={search}
          placeholder="검색어 입력"
          onChange={onChangeSearch}
        />
      </div>

      {/* 목록 */}
      {getSearchResult().map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export { TodoList };
