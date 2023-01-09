



export function TodoPreview({ todo, onSetIsDone }) {


    function onCheck(todo) {
        return todo.isDone ? true : false
    }


    return (
        <div className="todo-preview" onClick={(ev) => onSetIsDone(ev, todo)}>
            <label htmlFor="checkbox" className="todo-label"> </label>
            <input type="checkbox" name="checkbox" id="checkbox" onChange={onCheck} checked={onCheck(todo)} />

            <div className={todo.isDone ? 'done' : ''}>{todo.txt}</div>
            {/* <div>{todo.txt}</div> */}
        </div>
    )
}