import { Button, Input } from "@/components/ui";
import React, { useState, useRef } from "react";

function Body2() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  };
  return (
    <div>
      <Input ref={textRef} value={text} onChange={handleOnChange}></Input>
      <Button onClick={handleOnClick}>작성 완료</Button>
    </div>
  );
}

export { Body2 };
