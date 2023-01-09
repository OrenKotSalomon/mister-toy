
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'


const STORAGE_KEY = 'toyDB'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery', 'Powered']
const toys = [
    {
        '_id': 't101',
        'name': 'Talking Doll',
        'price': 123,
        'labels': ['Doll', 'Battery Powered', 'Baby'],
        'createdAt': 1631031801011,
        'inStock': true
    }, {
        '_id': 't102',
        'name': 'Talking Doll',
        'price': 123,
        'labels': ['Doll', 'Battery Powered', 'Baby'],
        'createdAt': 1631031801011,
        'inStock': true
    }, {
        '_id': 't103',
        'name': 'Talking Doll',
        'price': 123,
        'labels': ['Doll', 'Battery Powered', 'Baby'],
        'createdAt': 1631031801011,
        'inStock': true
    },
]

// storageService._save(STORAGE_KEY, toys)


// const PAGE_SIZE = 5
export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter
}

function query(filterBy = getDefaultFilter()) {
    // return axios.get(BASE_URL).then(res => res.data)
    console.log(filterBy);

    return storageService.query(STORAGE_KEY).then(toys => {
        let filteredToys = toys
        if (filterBy.name) {
            const regex = new RegExp(filterBy.name, 'i')
            filteredToys = filteredToys.filter(toy => regex.test(toy.name))
        }
        if (filterBy.inStock) {
            filteredToys = filteredToys.filter(toy => toy.inStock)
            // console.log('filteredToys', filteredToys);
        }
        if (filterBy.label) {
            filteredToys = filteredToys.filter(toy => toy.labels.includes(filterBy.label))
        }
        if (filterBy.sortType === 'name') filteredToys.sort((a, b) => a.name.localeCompare(b.name) * filterBy.desc)
        if (filterBy.sortType === 'price') filteredToys.sort((a, b) => (b.price - a.price) * filterBy.desc)
        if (filterBy.sortType === 'created') filteredToys.sort((a, b) => (b.price - a.price) * filterBy.desc)

        return filteredToys
    })
}
function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}
function remove(toyId) {

    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {

    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        // when switching to backend - remove the next line
        toy._id = utilService.makeId()
        return storageService.post(STORAGE_KEY, toy)
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
        inStock: true
    }

}
// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))



