import starFull from "../assets/icons/star.png";
import starHalf from "../assets/icons/starHalfRating.png";
import starEmpty from "../assets/icons/emptyStar.png";

export function StarRating(rating) {
    const totalStars = rating.stars; //total 5 estrelas
    const rate = rating.rate; //4.8
    const peopleRating = rating.peopleRating; //qtdade de pessoas q votaram

    const roundedRate = Math.round(rate * 2) / 2;

    return (
        <div id="rating_restaurant" className="flex items-center gap-1.5 text-xs text-gray-600">
            <div className="flex gap-0.5">
                {Array.from({ length: totalStars }).map((_, index) => {
                    const starValue = index + 1; //valor de 1 a 5
                    let starImage = starEmpty;
    
                    if(starValue <= roundedRate) {
                        starImage = starFull;
                    }
                    else if(starValue - 0.5 === roundedRate) {
                        starImage = starHalf;
                    }
                    return (
                        <img
                        key={index}
                        src={starImage}
                        alt="Estrela"
                        className="w-4 h-4" 
                        />
                    )
                })}
            </div>
        </div>
    );
}