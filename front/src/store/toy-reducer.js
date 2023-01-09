import { toyService } from "../services/toy.service.js"

export const SET_TOYS = 'SET_TOYS'
export const ADD_TOY = 'ADD_TOY'
export const REMOVE_TOY = 'REMOVE_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_FILTER = 'SET_FILTER'
// export const INCREMENT_PAGE = 'INCREMENT_PAGE'
// export const DECREMENT_PAGE = 'DECREMENT_PAGE'

const initialState = {
    toys: [],
    filterBy: toyService.getDefaultFilter()
}




export function toyReducer(state = initialState, action) {
    let toys
    let filterBy
    switch (action.type) {


        case SET_TOYS:
            return { ...state, toys: action.toys }
        // case SET_IS_LOADING:
        //     return { ...state, isLoading: action.isLoading }


        case ADD_TOY:
            toys = [...state.toys, action.toy]
            return { ...state, toys }
        case REMOVE_TOY:
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys }
        case UPDATE_TOY:
            toys = state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            return { ...state, toys }

        // filter
        case SET_FILTER:
            filterBy = { ...state, updatedFilter: action.updatedFilter }
            return { ...state, filterBy: filterBy.updatedFilter }


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

