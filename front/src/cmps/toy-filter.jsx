import { useEffect, useRef } from "react";
import { useState } from "react";



import { toyService } from "../services/toy.service.js";
import { utilService } from "../services/util.service.js";





export function ToyFilter({ onSetFilter, filterBy }) {
    const [filter, setFilter] = useState(filterBy)

    const input = useRef()
    onSetFilter = useRef(utilService.debounce(onSetFilter))

    useEffect(() => {
        onSetFilter.current(filter)
    }, [filter]);


    function handleChange({ target }) {
        let { value, name: field } = target

    }



    return (
        <section className="todo-filter">

            <label htmlFor="name"></label>
            <input ref={input} onChange={handleChange} type="text" id="name" name="name" placeholder="Search Toy" />


            <div className="btn-filter">
                <button onClick={handleChange} name='all'>all</button>
                <button onClick={handleChange} name='active'>active</button>
                <button onClick={handleChange} name='completed'>completed</button>
            </div>

            <button>Clear completed</button>
        </section>


    )
}