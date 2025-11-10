import { Button } from "@/components/ui";
import React, { useState } from "react";

function Viewer() {
  console.log("update!~!");
  //   return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
  return <div>Viewer</div>;
}

function Body() {
  const [number, setNumber] = useState(0);
  const onIncrese = () => {
    setNumber(number + 1);
  };
  const onDecrese = () => {
    setNumber(number - 1);
  };
  return (
    <div className="m-20">
      <h2>{number}</h2>
      <Viewer></Viewer>

      <div>
        <Button onClick={onDecrese}>-</Button>
        <Button onClick={onIncrese}>+</Button>
      </div>
    </div>
  );
}

export { Body };
