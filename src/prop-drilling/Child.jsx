import React from "react";
import GrandSon from "./GrandSon";
import GrandDaughter from "./GrandDaughter";

function Child({ message }) {
  console.log("Child received msg in:", { message });

  return (
    <div className="children">
      <h2>Child- {message.familyName}</h2>
      <GrandDaughter message={message} />
      <GrandSon message={message} />
    </div>
  );
}

export default Child;
