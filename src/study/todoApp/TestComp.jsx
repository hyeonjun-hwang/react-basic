import { Button } from "@/components/ui";
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + action.data;
    case "dec":
      return state - action.data;
    case "init":
      return 0;
    default:
      return state;
  }
}

function TestComp() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <p>{count}</p>
      <div>
        <Button onClick={() => dispatch({ type: "inc", data: 1 })}>+</Button>
        <Button onClick={() => dispatch({ type: "dec", data: 1 })}>-</Button>
        <Button onClick={() => dispatch({ type: "init" })}>초기화</Button>
      </div>
    </div>
  );
}

export { TestComp };
