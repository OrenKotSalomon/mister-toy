import { store } from './store.js'

import { toyService } from "../services/toy.service.js"
import { SET_TOYS } from "./toy-reducer.js"



export function loadToys() {

    // store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return toyService.query()
        .then((toys) => {
            store.dispatch({ type: SET_TOYS, toys: toys })
        })
        .catch(err => {
            console.log('Had issues loading todos', err)
            throw err
        })
    // .finally(() => {
    //     store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    // })
}



// export function removeTodo(todoId) {
//     return todoService.remove(todoId)
//         .then(() => {
//             store.dispatch({ type: REMOVE_TODO, todoId })
//         })
//         .catch(err => {
//             console.log('cannot remove TODO ', err)
//             throw err
//         })
// }


// export function saveTodo(todo) {
//     const type = (todo._id) ? UPDATE_TODO : ADD_TODO
//     return todoService.save(todo)
//         .then(savedTodo => {
//             store.dispatch({ type, todo: savedTodo })
//             return savedTodo
//         })
//         .catch(err => {
//             console.log('cannot add todo', err)
//             throw err

//         })

// }