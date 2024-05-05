import React, { useState } from 'react'
import data from '../data/data'

function Accordian() {
    const [selected, setSelected] = useState(null)
    const [openState, setOpenState] = useState("+")
    function handleClick(SectionId) {
        if (selected === null) {
            setSelected(SectionId)
            console.log(selected)
            setOpenState("x")
        } else if (selected !== null) {
            setSelected(null)
            console.log(selected)
            setOpenState('+')
        }
    }

  return (
    <>
    <h1>Accordian from component</h1>
    <div className='accordian'>
        {data ? 
        data.map(
            item => <div className='question' onClick={() => handleClick(item.id)}>
                {item.question} <span>{openState}</span>
                <div>{selected === item.id ? item.answer : <div></div>}</div>
            </div>) : 
        <div>No data found!</div>}
    </div>    
    </>
  )
}

export default Accordian