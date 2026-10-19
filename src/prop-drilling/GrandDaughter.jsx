import React from 'react'

function GrandDaughter({message}) {
      console.log("Grand Daughter received msg in:", { message });

  return (
    <div className='gdaughter'>
        <h3>GrandDaughter-  {message.familyName}</h3>
    </div>
  )
}

export default GrandDaughter