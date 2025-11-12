import React from "react";

function Header() {
  const today = new Date().toLocaleDateString();
  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl">오늘은 🗓️</p>
      <div className="text-3xl text-gray-500">{today}</div>
    </div>
  );
}

export { Header };
