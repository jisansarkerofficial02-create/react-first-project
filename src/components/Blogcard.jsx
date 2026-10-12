

const Blogcard = ({ image1, image2, image3, tittle, description, text }) => {
  return (
    <div className="blog-card overflow-hidden">
        
        <div >
            <div>
                <img src={image1} alt="image" />
            </div>
            <h5 className="w-90 pt-4 pb-1.5">{tittle}</h5>
            <p className="w-90 pb-2.5">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-25 ">
            <div className='flex items-center gap-1.5'>
                <img src={image2} alt="image" />
                <p>{text}</p>
            </div>
            <div className='flex items-center  gap-1.5'>
                <h6>Read More</h6>
                <img className="h-3 w-4" src={image3} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Blogcard
