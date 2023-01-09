import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toyService } from "../services/toy.service";
import { saveToy } from "../store/toy.action";





export function ToyEdit() {
    const [newToy, setNewToy] = useState(toyService.getEmptyToy())
    const { toyId } = useParams()
    const navigate = useNavigate()
    // toyService.getById(toyId) || toyService.getEmptyToy()
    useEffect(() => {
        if (!toyId) return
        getToy()
    }, []);

    function getToy() {
        toyService.getById(toyId).then(toy => {

            setNewToy(toy)
        })
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setNewToy(prevToy => {
            if (field === 'label') {
                return { ...prevToy, [field]: prevToy.labels.push(value) }
            }
            return { ...prevToy, [field]: value }
        })
    }

    function onSaveToy() {
        saveToy(newToy).then(savedToy => {
            console.log('toy saved', savedToy);
            // showSuccessMsg(`Todo added ${savedTodo._id}`)
            // addActivities(savedTodo, 'add')
        })
            .catch(err => {
                // showErrorMsg('cannot add todo')
            })
    }

    function onSubmitToy(ev) {
        ev.preventDefault()
        onSaveToy()
        navigate('/toy')
    }

    return (
        <Fragment>

            <section className="toy-modal">
                <Link to='/toy'>exit</Link>
                <form onSubmit={onSubmitToy} action="name">
                    <label htmlFor=""></label>
                    <input onChange={handleChange} type="text" name="name" id="name" placeholder="enter toy name"
                        value={newToy.name}
                    />
                    <label htmlFor="price"></label>
                    <input onChange={handleChange} type="number" name="price"
                        id="price" placeholder="enter toy price"
                        value={newToy.price}
                    />
                    <select onChange={handleChange} name="label" id="label">
                        <option value="">select label</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="G">G</option>
                        <option value="F">F</option>
                    </select>
                    <label htmlFor="description"></label>
                    <textarea onChange={handleChange} name="description" id="description"
                        value={newToy.description}
                    ></textarea>
                    <button>sumbit toy</button>
                </form>
            </section>
            <Link className="background" to='/toy'></Link>
        </Fragment>
    )
}