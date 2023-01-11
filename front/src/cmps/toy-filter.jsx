import { useEffect, useRef } from "react";
import { useState } from "react";

import Select from 'react-select';


import { toyService } from "../services/toy.service.js";
import { utilService } from "../services/util.service.js";





export function ToyFilter({ onSetFilter, filterBy, labels }) {
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

    function temp(ev) {
        let labels = ev.map(label => label.label)
        setFilter(prevFilter => ({ ...prevFilter, label: labels }))
    }


    return (
        <section className="toy-filter">
            <div className="filter-container">

                <label className="text-label" htmlFor="name"></label>
                By name
                <input className="text-filter" onChange={handleChange} type="text" id="name" name="name" placeholder="Search Toy" />
                <Select

                    onChange={temp}
                    isMulti={true}
                    name="label"
                    options={labels.current}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
                <label htmlFor="inStock"> In stock

                    <input onChange={handleChange} type="checkbox" name="inStock" id="inStock" />
                </label>
            </div>
            <div className="sort-container">
                <div onClick={() => onClickSort('name', -1)} >Name</div>
                <div onClick={() => onClickSort('price', -1)}>Price</div>
                <div onClick={() => onClickSort('created', -1)}>Created</div>

            </div>



        </section>


    )
}