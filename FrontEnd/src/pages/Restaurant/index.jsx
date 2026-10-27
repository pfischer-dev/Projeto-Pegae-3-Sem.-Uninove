import { useParams } from "react-router-dom";
import { useState } from "react";
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
    const [ category, setCategory ] = useState("all");
    
    const products =
        category === "all" ?
        [
            ...restaurant.menu.foods,
            ...restaurant.menu.drinks,
            ...restaurant.menu.candys
        ] : restaurant.menu[category] ?? [];
        
    return (
        <div className="min-h-screen w-full bg-[#F3F4F6]">
            
            <div className="min-h-dvh w-full max-w-2xl mx-auto flex flex-col overflow-x-hidden bg-[#F3F4F6] shadow-sm">
                
                <header className="flex-shrink-0">
                    <HeaderNav name={restaurant?.name}/>

                    <div className="w-full pt-3">
                        <Stores 
                            key={restaurant.id}
                            id={restaurant.id}
                            name={restaurant.name}
                            img={restaurant.image}
                            rating={restaurant.rating}
                            options={restaurant.options} 
                        />
                        <div className="w-full px-4 mt-3">
                            <Input 
                                iconSrc={search} 
                                iconAlt="icone localizaçao" 
                                type="text" 
                                placeholder="Buscar no Cardápio"
                                name="buscar_menu"
                            />
                        </div>
                        
                        <div className="w-full mt-3">
                            <Keywords
                                category={category}
                                setCategory={setCategory}
                            />
                        </div>

                    </div>
                    
                </header>

                <main className="flex-1 min-h-0 overflow-y-auto bg-[#F3F4F6] pb-4">
                    <div className="w-full flex flex-col pb-10">
                        
                        {products.map((product) => (
                            <Product 
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                image={product.image}
                                description={product.description}
                                value={product.value}
                                restaurant={restaurant}
                            />
                        ))}
                        
                    </div>
                </main>
                <footer className="flex-shrink-0 w-full">
                    <Footer />
                </footer>
            </div>
        </div>





        
        
    )
    
}
