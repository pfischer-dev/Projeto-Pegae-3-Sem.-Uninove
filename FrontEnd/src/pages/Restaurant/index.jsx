import { useParams } from "react-router-dom";
import { Header } from "../../components/Header"

export default function RestaurantPage() {
    const { id } = useParams();
    
    
    return (
        <div className="container bg-[]">
            <Header />
            <h1>Ola</h1>
            <p>id acessado: {id}</p>
            
        </div>
        
    )
    
}