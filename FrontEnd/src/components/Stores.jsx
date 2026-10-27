import { Link } from "react-router-dom"
import { StarRating } from "./StarRating"

export function Stores(props) {
    return (
        <div className="w-full flex justify-center px-3 mt-3 bg-[#F3F4F6]">
            
            <Link 
            to={`/restaurant/${props.id}`}
            className="w-full max-w-xl">

                <div id="stores" 
                className="w-full min-w-0 flex items-center gap-2 sm:gap-3 p-2 border border-[#1E3A8A] bg-white rounded-2xl cursor-pointer transition-shadow hover:shadow-md"
                >
                    <img 
                    src={props.img} alt="logo lanchonete" 
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover shrink-0 rounded-xl" 
                    />

                    <div id="description_restaurant" 
                    className="flex flex-col flex-1 min-w-0 justify-center items-start gap-1"
                    >
                        <p className="text-xs sm:text-sm text-gray-600 bg-emerald-300/20 border-1 border-emerald-700/50 rounded-2xl px-1.5 py-0.5">
                            Aberta - Retirada - 5min
                        </p>

                        <h3 
                        className="font-bold text-sm sm:text-base truncate w-full">
                            {props.name}
                        </h3>
                        
                        <div id="rating_restaurant" 
                        className="flex flex-wrap items-center gap-1 sm:gap-2 min-w-0"
                        >  
                            
                            <StarRating 
                                key={props.id}
                                id={props.id} 
                                stars={props.rating.stars}
                                rate={props.rating.rate}
                                peopleRating={props.rating.peopleRating}
                            />
                            
                            <p className="text-sm">{props.rating.rate}</p>
                            <p className="text-xs sm:text-sm text-gray-600">
                                ({props.rating.peopleRating})
                            </p>
                        </div>

                        <div className="flex min-w-0 gap-1 text-xs sm:text-sm">
                            <p className="truncate">{props.options}</p> 
                        </div>
                    </div>
                </div>
            
            </Link>
        </div>
    );
}