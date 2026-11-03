import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { Stores } from "../../components/Stores";
import { AppLayout } from "../../components/AppLayout";
import { bdRestaurants } from "../../data/bdRestaurants";

export default function Home() {
    return (
        <AppLayout>
            <header className="shrink-0">
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
            <footer className="shrink-0 w-full">
                <Footer />
            </footer>
        </AppLayout>

    )
}