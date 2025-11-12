import React from "react";
import { Input, Checkbox, Label, Button, Separator } from "@/components/ui";

function TodoItem() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Checkbox />
          <Label className="text-base">입력한 투두!</Label>
        </div>
        <div className="flex items-center gap-2">
          <p>{new Date().toLocaleDateString()}</p>
          <Button className="h-fit">삭제</Button>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export { TodoItem };
