import about1 from "../assets/about1.svg"
import about2 from "../assets/about2.svg"
import about3 from "../assets/about3.svg"
import bgimage from "../assets/bg-image.png"
import bgimage2 from "../assets/bgimage2.png"
import bgimage3 from "../assets/bgimage3.png"
import Aboutuscard from "./Aboutuscard"


const Aboutus = () => {
  return (
    <section>
        <div className="container">
            <div className="pt-30 pb-9 flex justify-center text-center">
                <h2>What do they say about us</h2>
            </div>
            <div className="grid grid-cols-3">
                <Aboutuscard image={about1} bgimage={bgimage} tittle={"Doris Watson"} description={"“ Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service. ”"} />
                <Aboutuscard image={about2} bgimage={bgimage2} tittle={"Kate Szu"} description={"“ Great service, beautiful flowers, timely delivery. Highly recommend. ”"} />
                <Aboutuscard image={about3} bgimage={bgimage3} tittle={"Dyness "} description={"“ I am very happy with my purchase from this website, the plants were healthy and arrived on time. ”"} />
                
            </div>
        </div>
    </section>
  )
}

export default Aboutus