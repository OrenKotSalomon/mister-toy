
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'


const STORAGE_KEY = 'toyDB'
const BASE_URL = 'toy/'



// const PAGE_SIZE = 5
export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultLabels,
    getDefaultFilter,
}

function query(filterBy = getDefaultFilter()) {
    const queryParams = `?name=${filterBy.name}
&inStock=${filterBy.inStock}
&label=${filterBy.label}
&sortType=${filterBy.sortType}`
    console.log(filterBy);
    return httpService.get(BASE_URL + queryParams)

}
function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}
function remove(toyId) {

    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    console.log('toy', toy);

    if (toy._id) {
        return httpService.put(BASE_URL, toy)
    } else {
        // when switching to backend - remove the next line
        return httpService.post(BASE_URL, toy)
    }
}



function getDefaultFilter() {
    return { name: '', inStock: false, label: '', sortType: '', desc: -1 }
}


function getEmptyToy() {
    return {

        name: '',
        price: '',
        labels: [],
        createdAt: Date.now(),
        inStock: true,
        msgs: [
            "Can i help you ?",
            "please contact support",
            "rate this toy"
        ],
    }

}


function getDefaultLabels() {
    return [

        { value: 'On wheels', label: 'On wheels' },
        { value: 'Box game', label: 'Box game' },
        { value: 'Art', label: 'Art' },
        { value: 'Baby', label: 'Baby' },
        { value: 'Doll', label: 'Doll' },
        { value: 'Puzzle', label: 'Puzzle' },
        { value: 'Outdoor', label: 'Outdoor' },
        { value: 'Battery Powered', label: 'Battery Powered' },
    ]


}

// TEST DATA
// storageService.post(BASE_URL, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))



