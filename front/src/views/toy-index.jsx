import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ToyFilter } from "../cmps/toy-filter.jsx";
import { ToyList } from "../cmps/toy-list.jsx";
import { toyService } from "../services/toy.service.js";
import { SET_FILTER } from "../store/toy-reducer.js";
import { loadToys, removeToy, saveToy } from "../store/toy.action.js";


export function Toy() {

    const toys = useSelector((storeState) => storeState.toyModule.toys)
    const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)
    // const isLoading = useSelector((storeState) => storeState.todoModule.isLoading)
    const labels = useRef(toyService.getDefaultLabels())
    const dispatch = useDispatch()



    useEffect(() => {
        loadToys()
    }, [filterBy])

    function onDeleteToy(toy) {
        removeToy(toy._id)
            .then(() => {
                // showSuccessMsg('TODO removed')

            })
            .catch(err => {
                // showErrorMsg('cannot remove todo', err)
            })
    }

    function onSetFilter(updatedFilter) {
        dispatch({ type: SET_FILTER, updatedFilter })

    }

    return <section>

        hello from Toy
        <main className="toy-index">
            <div className="filter-container">
                <ToyFilter onSetFilter={onSetFilter} filterBy={filterBy} labels={labels} />
            </div>

            <Link to='/toy/edit'>Add toy</Link>
            {/* {isLoading && <p>loading eztrobal</p>} */}
            <ToyList toys={toys} onDeleteToy={onDeleteToy} />
            {/* <TodoFilter onSetFilter={onSetFilter} /> */}
            <Outlet />
        </main>
        {/* <div className="pagination-container">
            <button onClick={() => dispatch({ type: INCREMENT_PAGE, pageIdx: pageIdx + 1 })}>next</button>
            <button onClick={() => dispatch({ type: DECREMENT_PAGE, pageIdx: pageIdx - 1 })}>prev</button>
        </div> */}

    </section>

}