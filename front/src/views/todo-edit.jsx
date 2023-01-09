import { todoService } from "../services/todo.service.js";
import { saveTodo } from "../store/todo.action.js";
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { addActivities, updateActivitie } from "../store/user.action.js";

const { useState, useEffect } = React
const { Link, useNavigate, useParams } = ReactRouterDOM
export function TodoEdit() {
    const [todo, setTodo] = useState(null)
    const { todoId } = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        getCurrTodo()
    }, []);
    function handleChange({ target }) {
        let { value, name: field } = target
        setTodo(prev => {
            return { ...prev, [field]: value }
        })
    }


    // need to make this store function
    function getCurrTodo() {

        todoService.getById(todoId).then(todo => {
            setTodo(todo)
        })
    }


    function onEditTodo(ev) {
        ev.preventDefault()
        console.log(todo);
        saveTodo(todo).then(saveTodo => {
            showSuccessMsg(`Todo Changed`)
            addActivities(saveTodo, 'edit')
            navigate('/todo')
        }).catch(err => {
            showErrorMsg('cannot change todo', err)
        })
    }


    if (!todo) return <h1>loading...</h1>
    return (
        <section>
            <h2>{todo.owner.fullname}</h2>
            <form onSubmit={onEditTodo}>
                <label htmlFor="txt"></label>
                need to change ?  <input onChange={handleChange} value={todo.txt} type="text" id="txt" name="txt" />
                <button>sumbit</button>
            </form>
        </section>
    )
}