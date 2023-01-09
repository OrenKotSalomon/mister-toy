import { Link } from "react-router-dom";
import { ToyPreview } from "./toy-preview";



export function ToyList({ toys, onDeleteToy }) {

    if (!toys) return <h1>loading</h1>
    return (

        <section className="toy-list">
            <div className="toys-container">
                {
                    toys.map(toy =>
                        <ToyPreview key={toy._id} toy={toy} onDeleteToy={onDeleteToy} />
                    )
                }
            </div>
        </section>



    )
}