import quality from "../assets/quality.png"
import quality1 from "../assets/quality1.png"
import quality2 from "../assets/quality2.png"
import quality3 from "../assets/quality3.png"
import quality4 from "../assets/quality4.png"
import Qualitycard from "./Qualitycard"

const Quality = () => {
  return (
    <section>
        <div>
           <div className="quality-grid grid grid-cols-2 mt-28.5">
                <div className="h-189.5px">
                    <img className="w-full" src={quality} alt="image" />
                </div>

                <div className="quality-cards grid grid-cols-2 ">
                    <Qualitycard image={quality1} color="bg-[#FCFCFC]" tittle={"Quality Product"} description={"Our flowers are of the highest quality, carefully selected and sourced from reputable"} />
                    <Qualitycard image={quality2} color="bg-[#F8F8F8]"  tittle={"Always Fresh"} description={"Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment."} />
                    <Qualitycard image={quality3} color="bg-[#FCFCFC]" tittle={"Work Smart"} description={"We work smart, using innovative techniques and technology to streamline our processes"} />
                    <Qualitycard image={quality4} color="bg-[#F8F8F8]" tittle={"Excelent Service"} description={"We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs"} />
                   
                </div>
           </div>
        </div>
    </section>
  )
}

export default Quality
