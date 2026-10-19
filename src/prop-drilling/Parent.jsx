import React from "react";
import Child from "./Child";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

const Parent = () => {
  const message = useContext(FamilyContext);

  return (
    <div className="parent">
      <h2>Parent-{message.familyName}</h2>
      <Child />
    </div>
  );
};

export default Parent;
