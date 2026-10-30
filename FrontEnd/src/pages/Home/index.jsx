import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Stores } from "../../components/Stores";
import { bdRestaurants } from "../../data/bdRestaurants";

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-white">
            
            <div className="min-h-dvh w-full max-w-2xl mx-auto flex flex-col overflow-x-hidden bg-[#EFF6FF] shadow-sm">
           
                <header className="flex-shrink-0">
                    <Header />
                    <Nav />
                </header>   
            
                <main className="flex-1 min-h-0 overflow-y-auto bg-[#F3F4F6] pb-6">
                    <div className="w-full flex flex-col pb-10">
                        {bdRestaurants.map((restaurant) => (
                        <Stores 
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        img={restaurant.image}
                        rating={restaurant.rating}
                        options={restaurant.options} />
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