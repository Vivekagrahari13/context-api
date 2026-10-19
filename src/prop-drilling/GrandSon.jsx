import React from 'react'

function GrandSon({message}) {
      console.log("Grand Son received msg in:", { message });

  return (
    <div className='gson'>
        <h3>GrandSon-  {message.familyName}</h3>
    </div>
  )
}

export default GrandSon