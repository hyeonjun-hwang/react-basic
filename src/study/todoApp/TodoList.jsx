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

  // (임시) todo list 개수 계산 함수
  const countTodo = () => {
    console.log("count 함수 호출댐!");
    const totalCount = todo.length;
    const checkedCount = todo.filter((item) => item.isDone).length;
    const unCheckedCount = totalCount - checkedCount;
    return { totalCount, checkedCount, unCheckedCount };
  };

  // console.log(countTodo());

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="font-semibold">Todo List</p>

        {/* 할일 카운트 */}
        <div className="flex justify-between">
          <p>{`전체: ${countTodo().totalCount}`}</p>
          <p>{`완료: ${countTodo().checkedCount}`}</p>
          <p>{`미완료: ${countTodo().unCheckedCount}`}</p>
        </div>

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
