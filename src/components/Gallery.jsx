import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"
import gallery3 from "../assets/gallery3.png"
import gallery4 from "../assets/gallery4.png"
import gallery5 from "../assets/gallery5.png"

const Gallery = () => {
  return (
    <section className="w-full">
        <div className=" flex justify-center text-center mt-31 mb-9">
            <h2>Our Gallery View</h2>
        </div>

        <div className="grid grid-cols-[1fr_2fr] w-full  gap-2.5  ">
            <div className="w-125 h-165">
                <img className="w-full h-full object-cover" src={gallery1} alt="image" />
            </div>
            <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-2.5 ">
                <div className=" h-81.25 ">
                    <img className="w-full h-full object-cover pb-2.5" src={gallery2} alt="image" />
                    <img className="w-full h-full object-cover" src={gallery4} alt="image" />
                </div>
                <div className="h-81.25">
                    <img className="w-full h-full object-cover pb-2.5" src={gallery3} alt="image" />
                    <img className="w-full h-full object-cover" src={gallery5} alt="image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery