import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Restaurants } from "../../components/Restaurants";
import { bdRestaurants } from "../../data/bdRestaurants";


export default function Home() {
    return (
        <div className="container w-full max-w-md mx-auto h-screen flex flex-col overflow-x-hidden bg-[#EFF6FF]">
            <div className="flex-shrink-0">
                <Header />
                <Nav />
            </div>
            <div className="flex-1 overflow-y-auto pb-4">
                {bdRestaurants.map((restaurant) => {
                return (
                    <Restaurants 
                    key={restaurant.id}
                    name={restaurant.name}
                    img={restaurant.image}
                    rating={restaurant.rating}
                    options={restaurant.options} />
                )
            })}
            </div>
        </div>
        
    )
}