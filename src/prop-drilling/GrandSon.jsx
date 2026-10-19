import {FamilyContext} from './FamilyContext'
import { useContext } from 'react'

function GrandSon() {
    const message=useContext(FamilyContext);
    
  return (
    <div className='gson'>
        <h3>GrandSon-{message.familyName}</h3>
    </div>
  )
}

export default GrandSon