import { useEffect, useRef } from "react";
import { useState } from "react";



import { toyService } from "../services/toy.service.js";
import { utilService } from "../services/util.service.js";





export function ToyFilter({ onSetFilter, filterBy }) {
    const [filter, setFilter] = useState(filterBy)


    onSetFilter = useRef(utilService.debounce(onSetFilter))

    useEffect(() => {
        onSetFilter.current(filter)
    }, [filter]);


    function handleChange({ target }) {
        let { value, name: field, checked, type } = target
        value = (type === 'checkbox') ? checked : value
        setFilter(prevFilter => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onClickSort(field) {
        setFilter(prevFilter => {
            return { ...prevFilter, sortType: field }
        })
    }

    return (
        <section className="todo-filter">
            <div className="filter-container">

                <label htmlFor="name"></label>
                By name
                <input onChange={handleChange} type="text" id="name" name="name" placeholder="Search Toy" />
                <label htmlFor="inStock"></label>
                In stock
                <input onChange={handleChange} type="checkbox" name="inStock" id="inStock" />
                <select onChange={handleChange} name="label" id="label">
                    <option value="">select label</option>
                    <option value="On wheels">On wheels</option>
                    <option value="Box game">Box game</option>
                    <option value="Art">Art</option>
                    <option value="Baby">Baby</option>
                    <option value="Doll">Doll</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Outdoor">Outdoor</option>
                    <option value="Battery Powered">Battery Powered</option>
                </select>
            </div>
            <div className="sort-container">
                <div onClick={() => onClickSort('name')} >Name</div>
                <div onClick={() => onClickSort('price')}>Price</div>
                <div onClick={() => onClickSort('created')}>Created</div>

            </div>



        </section>


    )
}