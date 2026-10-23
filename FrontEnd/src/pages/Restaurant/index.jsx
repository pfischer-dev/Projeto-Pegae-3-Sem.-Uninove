import { useParams } from "react-router-dom";
import { bdRestaurants } from "../../data/bdRestaurants";
import { HeaderNav } from "../../components/HeaderNav";
import { Stores } from "../../components/Stores";
import { Input } from "../../components/Input";
import { Keywords } from "../../components/Keywords";
import { Product } from "../../components/Product";
import { Footer } from "../../components/Footer";
import search from "../../assets/icons/search.png";


export default function RestaurantPage() {
    const { id } = useParams();
    const restaurant = bdRestaurants.find((item) => String(item.id) === id);
    
    return (

        <div className="container h-screen bg-[#F3F4F6] flex flex-col gap-1 items-center">
            <HeaderNav name={restaurant?.name}/>
            <Stores 
                    key={restaurant.id}
                    id={restaurant.id}
                    name={restaurant.name}
                    img={restaurant.image}
                    rating={restaurant.rating}
                    options={restaurant.options} />
                <Input 
                iconSrc={search} 
                iconAlt="icone localizaçao" 
                type="text" 
                placeholder="Buscar no Cardápio"
                name="buscar_menu"
                />
                <Keywords />
                <div id="products">
                    <Product />
                </div>

            

            <footer className="flex-shrink-0 w-full">
                <Footer />
            </footer>
        </div>
        
    )
    
}