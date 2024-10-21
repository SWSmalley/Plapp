import React from 'react'

export default function 

() {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <div>
            <input type='radio' name='priority' id='P1' required/>
            <label for='P1'>Priority 1</label>
        </div>
        <div>
            <input type='radio' name='priority' id='P2'/>
            <label for='P2'>Priority 2</label>
        </div>
        <div>
            <input type='radio' name='priority' id='P3'/>
            <label for='P3'>Priority 3</label>
        </div>
    </div>
  )
}
