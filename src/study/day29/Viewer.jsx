import React, { useState } from "react";

function Viewer({ count }) {
  return (
    <div className="p-3 text-xl font-bold">
      현재 카운트 : <span>{count}</span>
    </div>
  );
}

export { Viewer };
