import { toyService } from "../services/toy.service.js"

export const SET_TOYS = 'SET_TOYS'
export const ADD_TOY = 'ADD_TOY'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_FILTER = 'SET_FILTER'
export const INCREMENT_PAGE = 'INCREMENT_PAGE'
export const DECREMENT_PAGE = 'DECREMENT_PAGE'

const initialState = {
    toys: []
}




export function toyReducer(state = initialState, action) {
    let toys
    switch (action.type) {


        case SET_TOYS:
            return { ...state, toys: action.toys }
        // case SET_IS_LOADING:
        //     return { ...state, isLoading: action.isLoading }


        case ADD_TOY:
            toys = [...state.toys, action.toy]
            return { ...state, toys }
        // case REMOVE_TODO:
        //     todos = state.todos.filter(todo => todo._id !== action.todoId)
        //     return { ...state, todos }
        // case UPDATE_TODO:
        //     todos = state.todos.map(todo => todo._id === action.todo._id ? action.todo : todo)
        //     return { ...state, todos }

        // // filter
        // case SET_FILTER:
        //     filterBy = { ...state.filterBy, txt: action.filter.txt, criteria: action.filter.criteria }
        //     return { ...state, filterBy }
        // case INCREMENT_PAGE:
        //     filterBy = { ...state.filterBy, pageIdx: action.pageIdx }
        //     console.log('filterBy', filterBy);

        //     return { ...state, filterBy }
        // case DECREMENT_PAGE:
        //     filterBy = { ...state.filterBy, pageIdx: action.pageIdx }
        //     return { ...state, filterBy }

        default:
            return { ...state }
    }
}

