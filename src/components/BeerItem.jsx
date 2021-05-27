const BeerItem = ({ beer }) => {

    return (
        <div className="flex flex-col shadow-sm p-6">
            <div className="flex justify-center items-center bg-gray-100 p-4">
                <img className="h-64 w-full object-contain ..." src={beer.image_url} />
            </div>
            <div className="flex flex-col mt-6">
                <h1 className="font-bold text-2xl">{beer.name}</h1>
                {beer.description.length > 150 ? (
                    <p className="mt-4 text-gray-500 font-light">{beer.description.slice(0, 150)}...</p>
                ): (
                    <p className="mt-4 text-gray-500 font-light">{beer.description}</p>
                )}
                <div className="flex flex-row items-center mt-4 pt-4 space-x-4 border-t-2 border-gray-100">
                    <p className="rounded-full border-solid border-2 border-black px-6 py-1">{beer.abv}%</p>
                    <a href="#">More info...</a>
                </div>
            </div>
        </div>
    )
}

export default BeerItem
