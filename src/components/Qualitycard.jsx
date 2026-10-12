

const Qualitycard = ({image,tittle, description, color}) => {
  return (
    <div className={`quality-card pl-17 ${color}`}>
        <div className=" pt-13 pb-2.5">
            <img className="" src={image} alt="" />
        </div>
        <a className="pb-2 text-[#285A43] font-lato font-bold text-[17px] leading-[140%]" href="#">{tittle}</a>
        <p className="pt-3 w-60.75">{description}</p>
    </div>
  )
}

export default Qualitycard
