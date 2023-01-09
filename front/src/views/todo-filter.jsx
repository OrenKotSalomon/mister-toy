import { todoService } from "../services/todo.service.js";
import { utilService } from "../services/util.service.js";



const { useState, useRef, useEffect } = React



export function TodoFilter({ onSetFilter }) {
    const [filter, setFilter] = useState(todoService.getDefaultFilter())

    const input = useRef()
    onSetFilter = useRef(utilService.debounce(onSetFilter))

    useEffect(() => {
        onSetFilter.current(filter)
    }, [filter]);


    function handleChange({ target }) {
        let { value, name: field } = target
        if (field === 'txt') {
            setFilter(prev => {
                return { ...prev, [field]: value, criteria: field }
            })
        } else {
            setFilter(prev => {
                return { ...prev, txt: '', criteria: field }
            })
            input.current.value = ''
        }
    }



    return (
        <section className="todo-filter">

            <label htmlFor="txt"></label>
            <input ref={input} onChange={handleChange} type="text" id="txt" name="txt" placeholder="Search TODO" />

            <h1>items left</h1>

            <div className="btn-filter">
                <button onClick={handleChange} name='all'>all</button>
                <button onClick={handleChange} name='active'>active</button>
                <button onClick={handleChange} name='completed'>completed</button>
            </div>

            <button>Clear completed</button>
        </section>


    )
}