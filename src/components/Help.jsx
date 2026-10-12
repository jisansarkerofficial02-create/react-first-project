import image from "../assets/Indoor_Plant.svg"
import image2 from "../assets/Outdoor_Plant.svg"
import image3 from "../assets/Bamboo.svg"

const Help = () => {
  return (
    <section>
        <div className='container'>
            <div>
                <div className='help-intro flex pt-30 justify-between'>
                    <h2>We Help choose the most suitable plants for you</h2>
                    <p>Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. </p>
                </div>

                <div className="help-cards grid grid-cols-3 gap-3 pt-22 pb-30">
                    <div className="help-card border cursor-pointer group pl-12 rounded-[10px] border-[#D9D9D9] shadow-lg transition-all duration-300 hover:bg-[#337A5B] hover:text-white hover:shadow-2xl hover:-translate-y-1 ">
                        <div className="pt-9 pb-7">
                            <img src={image} alt="image" className="transition-all duration-300 group-hover:brightness-0 group-hover:inverted-colors:bg-white" />
                        </div>
                        <h4 className="group-hover:text-white">Indoor Plants</h4>
                        <p className="pt-5 group-hover:text-white w-64.75 pb-26">Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants</p>
                    </div>

                    <div className="help-card border cursor-pointer group pl-12 rounded-[10px] border-[#D9D9D9] shadow-lg transition-all duration-300 hover:bg-[#337A5B] hover:text-white hover:shadow-2xl hover:-translate-y-1 ">
                        <div className="pt-9 pb-7">
                            <img src={image2} alt="image" className="transition-all duration-300 group-hover:brightness-0 brightness-0 " />
                        </div>
                        <h4 className="group-hover:text-white">Outdoor Plants</h4>
                        <p className="pt-5 group-hover:text-white w-64.75 pb-26">Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.</p>
                    </div>

                    <div className="help-card border cursor-pointer group pl-12 rounded-[10px] border-[#D9D9D9] shadow-lg transition-all duration-300 hover:bg-[#337A5B] hover:text-[#ffffff] hover:shadow-2xl hover:-translate-y-1 ">
                        <div className="pt-9 pb-7">
                            <img src={image3} alt="image" className="transition-all duration-300 group-hover:brightness-0 group-hover:inverted-colors:bg-white" />
                        </div>
                        <h4 className="group-hover:text-white">Plants Pots</h4>
                        <p className="pt-5 group-hover:text-white w-64.75 pb-26">Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Help
