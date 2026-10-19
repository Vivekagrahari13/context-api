import React from "react";
import GrandSon from "./GrandSon";
import GrandDaughter from "./GrandDaughter";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";
function Child() {
const message= useContext(FamilyContext);
  return (
    <div className="children">
      <h2>Child-{message.familyName}</h2>
      <GrandDaughter />
      <GrandSon/>
    </div>
  );
}

export default Child;
