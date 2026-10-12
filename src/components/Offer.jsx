import cactus from "../assets/cactus.png"
import cactus2 from "../assets/cactus-2.png"
import cactus3 from "../assets/cactus3.png"
import cactus4 from "../assets/cactus4.png"
import cactus5 from "../assets/cactus5.png"
import cactus6 from "../assets/cactus6.png"
import cactus7 from "../assets/cactus7.png"
import cactus8 from "../assets/cactus8.png"
import love from "../assets/Love.png"
import love2 from "../assets/love2.png"
import Offercard from "./Offercard"

const Offer = ({ onAddToCart }) => {
  return (
    <section id="planters" className="offer-section pt-30">
        <div className="container">
            <div className="flex justify-center text-center w-full pb-9">
                <h2>What we offer to you</h2>
            </div>
            <div className="offer-grid grid grid-cols-4 gap-7">
                <Offercard image={cactus} image2={love} onAddToCart={onAddToCart} />
                <Offercard image={cactus2} image2={love2} onAddToCart={onAddToCart} />
                <Offercard image={cactus3} image2={love2} onAddToCart={onAddToCart} />
                <Offercard image={cactus4} image2={love2} onAddToCart={onAddToCart} />
                <Offercard image={cactus5} image2={love2} onAddToCart={onAddToCart} />
                <Offercard image={cactus6} image2={love2} onAddToCart={onAddToCart} />
                <Offercard image={cactus7} image2={love2} onAddToCart={onAddToCart} />
                <Offercard image={cactus8} image2={love2} onAddToCart={onAddToCart} />
                
            </div>
        </div>
    </section>
  )
}

export default Offer
