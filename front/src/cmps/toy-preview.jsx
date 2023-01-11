import { Link } from "react-router-dom"
import { utilService } from "../services/util.service"




export function ToyPreview({ toy, onDeleteToy }) {




    return (
        <div className="toy-preview" >

            <div className="toy-img-container">
                <img src={`https://robohash.org/${toy.name}.png?set=set1`} alt="" />
            </div >
            <div className="toy-container">
                <h1 className="toy-name">{toy.name}</h1>
                <div className="price" >Price: {toy.price}$</div>
                <div className={`in-stock ${toy.inStock ? 'green' : 'red'}`} >{toy.inStock ? 'In stock' : 'Out of stock'}</div>
                <div className="label-container">
                    {toy.labels.map((label, idx) => <div key={idx}>{label}</div>)}
                </div>
                <div className="preview-link-container">
                    <button onClick={() => onDeleteToy(toy)}>delete</button>
                    <Link to={`/toy/edit/${toy._id}`}>edit</Link>
                    <Link to={`/toy/details/${toy._id}`}>details</Link>
                </div>
            </div>

        </div>
    )
}