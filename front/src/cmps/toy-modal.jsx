import { useState } from "react";





export function ToyModal({ DefaultToy, onAddToy, setIsModalShown }) {

    const [newToy, setNewToy] = useState(DefaultToy)



    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setNewToy(prevToy => {
            if (field === 'label') {
                return { ...prevToy, [field]: prevToy.labels.push(value) }
            }
            return { ...prevToy, [field]: value }
        })
        console.log(newToy);
    }
    function onSubmitToy(ev) {
        ev.preventDefault()
        onAddToy(newToy)
        setIsModalShown(false)
        setNewToy(DefaultToy)
    }

    return (
        <section className="toy-modal">
            <form onSubmit={onSubmitToy} action="name">
                <label htmlFor=""></label>
                <input onChange={handleChange} type="text" name="name" id="name" placeholder="enter toy name" />
                <label htmlFor="price"></label>
                <input onChange={handleChange} type="number" name="price" id="price" placeholder="enter toy price" />
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
                <button>sumbit toy</button>
            </form>

        </section>
    )
}