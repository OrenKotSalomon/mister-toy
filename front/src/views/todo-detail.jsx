import { todoService } from "../services/todo.service.js"

const { Link, NavLink, useParams } = ReactRouterDOM


const { useState, useEffect } = React

export function TodoDetail() {
    const [currTodo, setCurrTodo] = useState(null)
    const { todoId } = useParams()

    useEffect(() => {
        getCurrTodo()
    }, []);
    // need to do store for this one
    function getCurrTodo() {

        todoService.getById(todoId).then(todo => {
            setCurrTodo(todo)
        })
    }

    if (!currTodo) return <h1>loading...</h1>
    return (
        <section>
            <h2>Owner: {currTodo.owner.fullname} </h2>
            <h3>todo detail: {currTodo.txt}</h3>
            <h3>todo status {currTodo.isDone ? "Done" : "In progress"}</h3>
            <Link to="/todo">Go Back</Link>
        </section>
    )
}