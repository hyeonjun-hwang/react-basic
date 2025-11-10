import { Button } from "@/components/ui";
import React from "react";

function Controller({ handleSetCount }) {
  return (
    <div className="flex gap-1">
      <Button
        onClick={() => {
          handleSetCount(-1);
        }}
      >
        -1
      </Button>
      <Button
        onClick={() => {
          handleSetCount(-10);
        }}
      >
        -10
      </Button>
      <Button
        onClick={() => {
          handleSetCount(-100);
        }}
      >
        -100
      </Button>
      <Button
        onClick={() => {
          handleSetCount(+100);
        }}
      >
        +100
      </Button>
      <Button
        onClick={() => {
          handleSetCount(+10);
        }}
      >
        +10
      </Button>
      <Button
        onClick={() => {
          handleSetCount(+1);
        }}
      >
        +1
      </Button>
    </div>
  );
}

export { Controller };
