const fs = require('fs');
const PAGE_SIZE = 30000
var toys = require('../data/toy.json')


module.exports = {
    query,
    get,
    remove,
    save,
}

function query(filterBy) {
    console.log('filterBy', filterBy);

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
    return Promise.resolve(filteredToys)
}

function get(toyId) {
    const toy = toys.find(toy => toy._id === toyId)
    if (!toy) return Promise.reject('toy not found')
    console.log(toy);
    return Promise.resolve(toy)
}

function remove(toyId) {
    const idx = toys.findIndex(toy => toy._id === toyId)
    if (idx === -1) return Promise.reject('No Such toy')
    // const toy = toys[idx]
    // if (toy.owner._id !== loggedinUser._id) return Promise.reject('Not your toy')

    toys.splice(idx, 1)
    return _writeToysToFile()
}


function save(toy) {
    console.log('toyyyyyyyyyy', toy);

    if (toy._id) {
        const toyToUpdate = toys.find(currToy => currToy._id === toy._id)
        // if (!toyToUpdate) return Promise.reject('No such toy')
        // if (toyToUpdate.owner._id !== loggedinUser._id) return Promise.reject('Not your toy')

        toyToUpdate.name = toy.name
        toyToUpdate.price = toy.price
        toyToUpdate.labels = toy.labels
        toyToUpdate.description = toy.description
    } else {
        toy._id = _makeId()
        // toy.owner = loggedinUser
        toys.push(toy)
    }
    return _writeToysToFile().then(() => toy)
}

function _makeId(length = 5) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


function _writeToysToFile() {
    return new Promise((res, rej) => {
        const data = JSON.stringify(toys, null, 2)
        fs.writeFile('data/toy.json', data, (err) => {
            if (err) return rej(err)
            // console.log("File written successfully\n");
            res()
        });
    })
}