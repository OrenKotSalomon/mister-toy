import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toyService } from "../services/toy.service";




export function ToyDetails() {

    const { toyId } = useParams()
    const [toy, setToy] = useState(null)

    useEffect(() => {

        getToy()
    }, []);


    function getToy() {
        toyService.getById(toyId).then(toy => {
            setToy(toy)
        })
    }



    if (!toy) return <h1>loading...</h1>
    return (
        <section className="toy-details">
            <h2>{toy.name}</h2>
            <h2>{toy.description}</h2>
            <h2>{toy.price}</h2>
            <h2>{toy.createdAt}</h2>
            {toy.labels.map((label, idx) =>
                <div key={idx}> {label}</div>
            )}

        </section>
    )
}