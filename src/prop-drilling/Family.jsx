import React from 'react'
import Parent from './Parent'

function Family({message}) {
    console.log("Fam recived msg in:",{message});
  return (
    <div className='family'>
        <Parent message={message}/>
    </div>
  )
}

export default Family