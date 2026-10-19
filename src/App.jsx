import React, { useState } from "react";
import "./App.css";
import Family from "./prop-drilling/Family";
import { FamilyContext } from "./prop-drilling/FamilyContext";

function App() {
  const familyMessage = {
    familyName: "Gogo",
  };
  return (
    <>
      <FamilyContext.Provider value={familyMessage}>
        <Family />
      </FamilyContext.Provider>
    </>
  );
}

export default App;
