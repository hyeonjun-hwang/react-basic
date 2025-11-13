import React from "react";
import { Checkbox, Label, Button, Separator } from "@/components/ui";

function TodoItem({
  id,
  isDone,
  content,
  createdDate,
  updateTodo,
  deleteTodo,
}) {
  // 체크 on/off 적용 함수
  const onUpdateTodo = () => {
    updateTodo(id);
  };

  // todo 삭제 함수
  const onDeletTodo = () => {
    deleteTodo(id);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Checkbox checked={isDone} onClick={onUpdateTodo} />
            <Label
              className={`text-base ${isDone && "text-gray-300 line-through"}`}
            >
              {content}
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <p className={`${isDone && "text-gray-300 line-through"}`}>
              {new Date(createdDate).toLocaleDateString()}
            </p>
            <Button
              className="py-1 h-fit rounded-full"
              variant="outline"
              onClick={onDeletTodo}
            >
              삭제
            </Button>
          </div>
        </div>
        <Separator />
      </div>
    </>
  );
}

export { TodoItem };
