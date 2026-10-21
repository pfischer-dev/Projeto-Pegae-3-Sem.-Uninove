export function Restaurants(props) {
    return (
        <div className="container bg-[#EFF6FF] rounded-2xl w-full flex justify-center mt-2">
            <div id="restaurante" className="min-w-0 flex border-1 w-80 max-w-sm overflow-hidden border-[#1E3A8A] bg-[#FFFFFF] w-90 rounded-2xl cursor-pointer">
                <img src={props.img} alt="logo lanchonete" className="flex-shrink-0 h-25 m-2 rounded-2xl" />
                <div id="description_restaurant" className="flex flex-col w-full justify-center items-start p-1 gap-1">
                    <p>Aberta - Retirada - 5min</p>   
                    <h3 className="font-bold truncate w-full overflow-hidden text-[clamp(8px,3.5vw,14px)]">{props.name}</h3>
                    <div id="rating_restaurant" className="flex gap-2">
                        <p>{props.rating.stars}</p>
                        <p>{props.rating.rate}</p>
                        <p>({props.rating.peopleRating})</p>
                    </div>
                    <div className="flex  gap-1 text-sm">
                        <p>{props.options}</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}