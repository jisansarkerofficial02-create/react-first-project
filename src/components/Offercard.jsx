


import { useState } from "react"

const Offercard = ({image, image2, onAddToCart}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="offer-card">
        <div className='offer-image overflow-hidden relative'>
            <img src={image} alt="Cactus plant" className="w-full h-full object-cover" />
            <button
              type="button"
              className={`favorite-button size-7 rounded-2xl flex justify-center items-center bg-white absolute top-5 right-5${isFavorite ? " is-favorite" : ""}`}
              aria-label={isFavorite ? "Remove cactus from favorites" : "Add cactus to favorites"}
              aria-pressed={isFavorite}
              onClick={() => setIsFavorite((favorite) => !favorite)}
            >
              <img src={image2} alt="" />
            </button>
        </div>

        <div className="offer-details grid grid-cols-2 gap-2">
            <div className="offer-description pt-2.5 pl-3">
                <a href="#" className="pb-2 font-lato font-bold text-[17px] leading-[140%]">Cactus Plant</a>
                <p>
                    ( <span className='line-through'>$10</span> ) $8
                </p>
            </div>
            <div className="offer-action pt-4 pb-6">
                <button type="button" onClick={onAddToCart} className="text-[#285A43] font-lato font-medium text-[17px] py-2 px-4 border border-[#285A43] rounded-[3px] bg-white hover:bg-[#285A43] hover:text-white cursor-pointer">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Offercard
