import React from "react";
import Child from "./Child";

function Parent({ message }) {
  console.log("Parent received msg in:", { message });

  return (
    <div className="parent">
      <h2>Parent-  {message.familyName}</h2>
      <Child message={message} />
    </div>
  );
}

export default Parent;
