import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToyList } from "../cmps/toy-list.jsx";
import { loadToys } from "../store/toy.action.js";


export function Toy() {

    const toys = useSelector((storeState) => storeState.toyModule.toys)
    // const filterBy = useSelector((storeState) => storeState.todoModule.filterBy)
    // const isLoading = useSelector((storeState) => storeState.todoModule.isLoading)

    // const dispatch = useDispatch()
    // const input = useRef()
    // const [todo, setTodo] = useState(todoService.getEmptyTodo())
    // let pageIdx = filterBy.pageIdx


    useEffect(() => {
        loadToys()
    }, []);

    console.log(toys);

    // function onAddTodo(ev) {
    //     ev.preventDefault()
    //     ev.stopPropagation()
    //     saveTodo(todo).then(savedTodo => {
    //         showSuccessMsg(`Todo added ${savedTodo._id}`)
    //         input.current.value = ''
    //         setTodo(todoService.getEmptyTodo())
    //         addActivities(savedTodo, 'add')

    //     })
    //         .catch(err => {
    //             showErrorMsg('cannot add todo')
    //         })

    // }

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
            {/* {isLoading && <p>loading eztrobal</p>} */}

            <ToyList toys={toys} />
            {/* <TodoFilter onSetFilter={onSetFilter} /> */}
        </main>
        {/* <div className="pagination-container">
            <button onClick={() => dispatch({ type: INCREMENT_PAGE, pageIdx: pageIdx + 1 })}>next</button>
            <button onClick={() => dispatch({ type: DECREMENT_PAGE, pageIdx: pageIdx - 1 })}>prev</button>
        </div> */}

    </section>

}