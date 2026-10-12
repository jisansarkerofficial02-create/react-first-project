
import logo from "../assets/Vector.svg"

const Hero = () => {
  return (
    <section id="home" className='hero relative'>
        <div className='container'>
            <div>
                <div className=' '>
                    <h1 className='text-center w-full font-bold text-[64px] text-white pt-54.75 pb-9'>Beauty Delivered to You</h1>
                    <p className='font-medium text-[18px] pb-9 px-81 text-center text-white w-full leading-[140%] '>Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!</p>
                </div>

                <div className="flex gap-3 justify-center items-center pb-74">
                    <button className='text-white cursor-pointer font-lato font-medium text-[17px] py-3 px-12 border border-[#285A43] rounded-[3px] bg-[#285A43] '>Book Now</button>
                    
                    <button className='text-white flex gap-3 cursor-pointer font-lato font-medium text-[17px] py-3 px-12 border border-white rounded-[3px]'>
                       <img src={logo} alt="icon" />
                        Watch Video
                    </button>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default Hero
