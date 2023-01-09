


export function ToyList({ toys, onDeleteToy }) {


    let num = 0
    console.log(toys);

    return (

        <section className="toy-list">
            <div className="toys-container">

                {
                    toys.map(toy => <div className="toy-container" key={toy._id}>
                        <div className="toy-name">{toy.name}</div>
                        <div className="toy-name">{toy.price}</div>
                        <div className="toy-name">{toy.createdAt}</div>
                        <div className="toy-name">{toy.inStock ? 'In stock' : 'Out of stock'}</div>
                        <div>
                            {toy.labels.map(label => <div key={'gello' + `${num++}`}>{label}</div>)}

                        </div>
                        <button onClick={() => onDeleteToy(toy)}>delete</button>
                        <button>edit</button>
                    </div>

                    )
                }

            </div>
        </section>



    )
}