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

    function onClickSort(field, num) {
        setFilter(prevFilter => {
            return { ...prevFilter, sortType: field, desc: prevFilter.desc * num }
        })
    }

    return (
        <section className="todo-filter">
            <div className="filter-container">

                <label htmlFor="name"></label>
                By name
                <input onChange={handleChange} type="text" id="name" name="name" placeholder="Search Toy" />
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
                <label htmlFor="inStock"></label>
                In stock
                <input onChange={handleChange} type="checkbox" name="inStock" id="inStock" />
            </div>
            <div className="sort-container">
                <div onClick={() => onClickSort('name', -1)} >Name</div>
                <div onClick={() => onClickSort('price', -1)}>Price</div>
                <div onClick={() => onClickSort('created', -1)}>Created</div>

            </div>



        </section>


    )
}