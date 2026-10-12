
const Aboutuscard = ({ image, bgimage, tittle,description }) => {
  return (
    <div
      className="about about-card w-90 pl-11 overflow-hidden rounded-[10px] bg-[#F8F8F8]"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="flex items-center pt-10 pb-8 gap-5">
        <img src={image} alt="customer" />
        <h4>{tittle}</h4>
      </div>
      <div>
        <p className="w-60.75 pb-18">
           {description}
        </p>
      </div>
    </div>
  )
}

export default Aboutuscard
