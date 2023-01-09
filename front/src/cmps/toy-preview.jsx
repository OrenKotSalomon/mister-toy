import { Link } from "react-router-dom"




export function ToyPreview({ toy, onDeleteToy }) {




    return (
        <div className="toy-container" >
            <div className="toy-name">{toy.name}</div>
            <div className="toy-name">{toy.description}</div>
            <div className="toy-name">{toy.price}</div>
            <div className="toy-name">{toy.createdAt}</div>
            <div className="toy-name">{toy.inStock ? 'In stock' : 'Out of stock'}</div>
            <div>
                {toy.labels.map((label, idx) => <div key={idx}>{label}</div>)}

            </div>
            <button onClick={() => onDeleteToy(toy)}>delete</button>
            <Link to={`/toy/edit/${toy._id}`}>edit</Link>
        </div>
    )
}