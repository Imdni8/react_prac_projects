import React, { useState } from 'react'
import data from '../data/data'

function Accordian() {
    const [selected, setSelected] = useState(null)
    function handleClick(sectionId) {
        selected === sectionId ? setSelected(null) : setSelected(sectionId)
    }

  return (
    <>
    <h1 className="text-3xl font-bold underline mb-2">Accordian from component</h1>
    <div>
        {data ? 
        data.map(
            item => <div className='border-2 border-blue-400 rounded-md mb-2 mx-2 p-2' onClick={() => handleClick(item.id)}>
                {item.question} <span>+</span>
                <div className='mt-2 text-blue-600'>{selected === item.id ? item.answer : <div></div>}</div>
            </div>) : 
        <div>No data found!</div>}
    </div>    
    </>
  )
}

export default Accordian