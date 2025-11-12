import { Button, Input } from "@/components/ui";
import { React, useState, useRef } from "react";

function TodoEditor({ onCreateTodo }) {
  // 새로운 todo 생성 input에 입력한 값
  const [inputValue, setInputValue] = useState("");
  // input에 입력한 값 state에 업데이트
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  // input 빈값 제출 방지용 Ref
  const inputRef = useRef();

  // 버튼 클릭시 실행할 todo 생성 함수
  const onSubmit = () => {
    if (!inputValue) {
      inputRef.current.focus();
      return;
    }
    onCreateTodo(inputValue);
    setInputValue("");
  };

  // 엔터키 입력해도 todo 생성 하도록
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">새로운 Todo 작성하기</p>
      <div className="flex gap-2">
        <Input
          ref={inputRef}
          placeholder="새로운 Todo..."
          value={inputValue}
          onChange={onChangeInputValue}
          onKeyDown={onKeyDown}
        ></Input>
        <Button className="px-6" onClick={onSubmit}>
          추가
        </Button>
      </div>
    </div>
  );
}

export { TodoEditor };
