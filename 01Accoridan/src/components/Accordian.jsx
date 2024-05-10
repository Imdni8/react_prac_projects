import React, { useEffect, useState } from "react";
import data from "../data/data";

function Accordian() {
    const [selected, setSelected] = useState(null);
    function singleSelection(sectionId) {
        setSelected((prev) => (sectionId === prev ? null : sectionId));
        console.log("single selection - ", selected);
    }

    //multiselection logic
    const [isMultiSelection, setIsMultiSelection] = useState(false);
    function multiSelectToggle() {
        setIsMultiSelection((prev) => {
            const newState = !prev;
            console.log(
                "multiselection is ",
                newState ? "enabled" : "disabled"
            );
            return newState;
        });
    }

    //this useeffect is necessary because some accordion can be left open while toggling multiselection. That causes complexities. So this resets the accordions on each toggle
    useEffect(() => {
        setSelected(null);
        setOpenAccordions([]);
    }, [isMultiSelection]);

    //not working
    const [openAccordions, setOpenAccordions] = useState([]); //record list of open accordians
    function multiSelection(sectionId) {
        let copyOfOpenAccordians = [...openAccordions];
        const clickedAccordion = copyOfOpenAccordians.indexOf(sectionId);
        if (clickedAccordion === -1) {
            copyOfOpenAccordians.push(sectionId);
            setOpenAccordions(copyOfOpenAccordians);
        } else {
            copyOfOpenAccordians.splice(clickedAccordion, 1);
            setOpenAccordions(copyOfOpenAccordians);
        }
        console.log("multiselection array - ", openAccordions);
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline mb-2">
                Accordian from component
            </h1>
            <button
                className="p-2 bg-gray-200 mb-2"
                onClick={multiSelectToggle}
            >
                Enable multiselection
            </button>
            <div>
                {data ? (
                    data.map((item) => (
                        <div
                            className="border-2 border-blue-400 rounded-md mb-2 mx-2 p-2"
                            onClick={
                                isMultiSelection
                                    ? () => multiSelection(item.id)
                                    : () => singleSelection(item.id)
                            }
                        >
                            {item.question} <span>+</span>
                            <div className="mt-2 text-blue-600">
                                {selected === item.id ||
                                openAccordions.indexOf(item.id) !== -1 ? (
                                    item.answer
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </>
    );
}

export default Accordian;
