import React, { useState } from 'react'
import data from '../data/data'

function Accordian() {
    const [selected, setSelected] = useState(null)
    function singleSelection(sectionId) {
        selected === sectionId ? setSelected(null) : setSelected(sectionId)
    }

    //multiselection logic
    const [isMultiSelection, setIsMultiSelection] = useState(false)
    function multiSelectToggle() {
        setIsMultiSelection(prev => {
            const newState = !prev
            console.log("multiselection is ", newState? "enabled" : "disabled")
            return newState
        })
    }

    const [openAccordions, setOpenAccordions] = useState([])
    function multiSelection(sectionId) {
        console.log("clicked section: " + sectionId)
    }

  return (
    <>
    <h1 className="text-3xl font-bold underline mb-2">Accordian from component</h1>
    <button className='p-2' onClick={multiSelectToggle}>Enable multiselection</button>
    <div>
        {data ? 
        data.map(
            item => <div className='border-2 border-blue-400 rounded-md mb-2 mx-2 p-2' onClick={isMultiSelection ? () => multiSelection(item.id) : () => singleSelection(item.id)}>
                {item.question} <span>+</span>
                <div className='mt-2 text-blue-600'>{selected === item.id ? item.answer : <div></div>}</div>
            </div>) : 
        <div>No data found!</div>}
    </div>    
    </>
  )
}

export default Accordian