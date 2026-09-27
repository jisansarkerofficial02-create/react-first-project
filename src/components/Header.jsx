

const Header = () => {
  return (
    <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-10  w-full ">
        <div className='container'>
            <div className="flex justify-between items-center  bg-transparent ">
              <div className="py-9">
                <a href="#">
                  <img src="/nav_logo.svg" alt="logo" />
                </a>
              </div>

              <div className="flex justify-end items-center gap-17">
                <ul className=" flex cursor-pointer justify-center items-center gap-12 text-[18px] font-medium text-white font-lato py-13">
                  <li className="relative hover:text-green-900 after:absolute after:content-[''] after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white ">Home</li>
                  <li className="hover:text-green-900">About Us</li>
                  <li className="hover:text-green-900">Planters</li>
                  <li className="hover:text-green-900">Contact</li>
                </ul>

                <button className="text-white cursor-pointer font-lato font-medium text-[17px] py-3 px-12 border border-white rounded-[3px]">call us</button>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Header