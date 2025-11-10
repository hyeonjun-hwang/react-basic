import axios from "axios";
import React, { useEffect, useState } from "react";
import { Body } from "./Body";
import { Body2 } from "./Body2";
import { Viewer } from "./Viewer";
import { Controller } from "./Controller";

function App() {
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="m-5">
      <h1>Simple Counter</h1>

      <Viewer count={count} />

      <Controller handleSetCount={handleSetCount} />
    </div>
  );
}

export { App };
