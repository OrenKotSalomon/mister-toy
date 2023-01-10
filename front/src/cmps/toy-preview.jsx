import { Link } from "react-router-dom"
import { utilService } from "../services/util.service"




export function ToyPreview({ toy, onDeleteToy }) {




    return (
        <div className="toy-container" >
            <h2 className="toy-name">{toy.name}</h2>
            <div className="toy-img-container">
                <img src={`https://robohash.org/${toy.name}.png?set=set1`} alt="" />
            </div >
            <div className="toy-container">

                <div className="toy-name">{toy.description}</div>
                <div className={`toy-name ${toy.price > 150 ? 'red' : 'green'}`} >Price {toy.price}$</div>
                <div className="toy-name">created at: {utilService.time_ago(toy.createdAt)}</div>
                <div className="toy-name">{toy.inStock ? 'In stock' : 'Out of stock'}</div>
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