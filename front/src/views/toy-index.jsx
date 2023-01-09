import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToyList } from "../cmps/toy-list.jsx";
import { ToyModal } from "../cmps/toy-modal.jsx";
import { toyService } from "../services/toy.service.js";
import { loadToys, saveToy } from "../store/toy.action.js";


export function Toy() {

    const toys = useSelector((storeState) => storeState.toyModule.toys)
    // const filterBy = useSelector((storeState) => storeState.todoModule.filterBy)
    // const isLoading = useSelector((storeState) => storeState.todoModule.isLoading)

    // const dispatch = useDispatch()
    // const input = useRef()
    const [isModalShown, setIsModalShown] = useState(false)
    const [DefaultToy, setDefaultToy] = useState(toyService.getEmptyToy())
    // let pageIdx = filterBy.pageIdx


    useEffect(() => {
        loadToys()
    }, []);

    console.log(toys);

    function onAddToy(toy) {


        setIsModalShown(!isModalShown)
        saveToy(toy).then(savedToy => {
            // showSuccessMsg(`Todo added ${savedTodo._id}`)
            // addActivities(savedTodo, 'add')

        })
            .catch(err => {
                // showErrorMsg('cannot add todo')
            })

    }

    // function onSetIsDone(ev, todo) {
    //     ev.stopPropagation()

    //     todo.isDone = !todo.isDone

    //     saveTodo(todo).then(saveTodo => {
    //         showSuccessMsg(`Todo Changed`)

    //     })
    //         .catch(err => {

    //             showErrorMsg('cannot change todo', err)
    //         })
    // }

    // function onDeleteTodo(todo) {
    //     removeTodo(todo._id)
    //         .then(() => {
    //             showSuccessMsg('TODO removed')
    //             addActivities(todo, 'removed')
    //         })
    //         .catch(err => {
    //             showErrorMsg('cannot remove todo', err)
    //         })
    // }

    // function onSetFilter(filter) {
    //     dispatch({ type: SET_FILTER, filter })
    // }
    // if (isLoading) return <h1>loading eztrobal</h1>
    return <section>

        hello from Toy
        <main className="toy-index">
            <button onClick={onAddToy}>add toy</button>
            {/* {isLoading && <p>loading eztrobal</p>} */}
            {isModalShown && <ToyModal DefaultToy={DefaultToy} onAddToy={onAddToy} setIsModalShown={setIsModalShown} />}
            <ToyList toys={toys} />
            {/* <TodoFilter onSetFilter={onSetFilter} /> */}
        </main>
        {/* <div className="pagination-container">
            <button onClick={() => dispatch({ type: INCREMENT_PAGE, pageIdx: pageIdx + 1 })}>next</button>
            <button onClick={() => dispatch({ type: DECREMENT_PAGE, pageIdx: pageIdx - 1 })}>prev</button>
        </div> */}

    </section>

}