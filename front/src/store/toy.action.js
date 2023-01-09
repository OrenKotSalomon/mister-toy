import { store } from './store.js'

import { toyService } from "../services/toy.service.js"
import { ADD_TOY, REMOVE_TOY, SET_TOYS, UPDATE_TOY } from "./toy-reducer.js"



export function loadToys() {
    let filter = store.getState().toyModule.filterBy
    // store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return toyService.query(filter)
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



export function removeToy(toyId) {
    return toyService.remove(toyId)
        .then(() => {
            store.dispatch({ type: REMOVE_TOY, toyId })
        })
        .catch(err => {
            console.log('cannot remove TODO ', err)
            throw err
        })
}


export function saveToy(toy) {
    const type = (toy._id) ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy)
        .then(savedToy => {
            store.dispatch({ type, toy: savedToy })
            return savedToy
        })
        .catch(err => {
            console.log('cannot add todo', err)
            throw err

        })

}