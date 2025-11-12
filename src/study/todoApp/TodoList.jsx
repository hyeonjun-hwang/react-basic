import React from "react";
import { TodoItem } from "./TodoItem";
import { Input } from "@/components/ui";

function TodoList() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="font-semibold">Todo List</p>
        {/* 검색 */}
        <Input
          className="border-t-0 border-l-0 border-r-0 shadow-none focus-visible:ring-0 rounded-none focus-visible:ring-offset-0"
          placeholder="검색어 입력"
        />
      </div>

      {/* 목록 */}
      <TodoItem />
    </div>
  );
}

export { TodoList };
