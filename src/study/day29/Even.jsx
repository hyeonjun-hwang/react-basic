import React, { useEffect } from "react";

function Even() {
  useEffect(() => {
    console.log("even useEffect 실행댐");
    return () => {
      console.log("Even 언마운트");
    };
  }, []);

  return <div>현재 카운트는 짝수당</div>;
}

export { Even };
