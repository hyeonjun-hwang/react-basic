import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Body } from "./Body";
import { Body2 } from "./Body2";
import { Viewer } from "./Viewer";
import { Controller } from "./Controller";
import { Input } from "@/components/ui";
import { Even } from "./Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("업데이트 댐!", count, text);
    }
  }, [count, text]);

  // console.log(didMountRef);

  useEffect(() => {
    // console.log("App.jsx 마운트으으으으으");
  }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);
  //   return () => {
  //     console.log("클린업");
  //     clearInterval(intervalID);
  //   };
  // });

  return (
    <div className="m-5">
      <h1>Simple Counter</h1>
      <section>
        <Input value={text} onChange={handleSetText}></Input>
      </section>

      <Viewer count={count} />
      <div className="p-5 h-10 flex items-center">
        {count % 2 === 0 && <Even />}
      </div>

      <Controller handleSetCount={handleSetCount} />
    </div>
  );
}

export { App };
