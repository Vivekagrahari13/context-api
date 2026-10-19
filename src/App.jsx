import React, { useState } from 'react'
import './App.css'
import Family from "./prop-drilling/Family";

function App() {
  
  const familyMessage={
    familyName:"Gogo"

  }
  return (
    <>
    <Family message={familyMessage}/>
    </>
  )
}

export default App