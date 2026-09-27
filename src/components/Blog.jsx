import blog from "../assets/blog.png"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import calender from "../assets/calender.png"
import arrow from "../assets/arrow.png"
import Blogcard from './Blogcard'

const Blog = () => {
  return (
    <section>
        <div className='container'>

            <div className="flex justify-center text-center">
                <h2 className="pt-30 pb-9">Interesting blog to read</h2>
            </div>

            <div className='grid grid-cols-3 mb-30'>
                <Blogcard image1={blog} image2={calender} image3={arrow} tittle={"More productive with an atmosphere of greenery"} description={"An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress..."} text={"January 20, 2023"} />
                <Blogcard image1={blog1} image2={calender} image3={arrow} tittle={"More productive with an atmosphere of greenery"} description={"An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress..."} text={"January 20, 2023"} />
                <Blogcard image1={blog2} image2={calender} image3={arrow} tittle={"More productive with an atmosphere of greenery"} description={"An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress..."} text={"January 20, 2023"} />
                
            </div>
        </div>
    </section>
  )
}

export default Blog