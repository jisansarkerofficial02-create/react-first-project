



const Offercard = ({image, image2}) => {
  return (
    <div>
        <div className='overflow-hidden relative h-62.5'>
            <img src={image} alt="image" className="w-full object-cover" />
            <div className='size-7 rounded-2xl flex justify-center items-center bg-white hover:bg-gray-500 absolute top-5 right-5'>
               <img src={image2} alt="icon" />
                
            </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
            <div className="pt-2.5 pl-6">
                <a href="#" className="pb-2 font-lato font-bold text-[17px] leading-[140%]">Cactus Plant</a>
                <p>
                    ( <span className='line-through'>$10</span> ) $8
                </p>
            </div>
            <div className="pt-4  pb-6">
                <button className="'text-white  font-lato font-medium text-[17px] py-2 px-6 border border-[#285A43] rounded-[3px] bg-white hover:bg-[#285A43] cursor-pointer">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Offercard