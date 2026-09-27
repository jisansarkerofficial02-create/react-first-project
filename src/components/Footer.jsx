import insta from "../assets/Instagram.png"
import fb from "../assets/Facebook.png"
import twit from "../assets/Twitter.png"

const Footer = () => {
  return (
    <footer className='footer bg-[#285A43] py-12 text-white'>
      <div className='container mx-auto flex flex-col items-center justify-center text-center'>
        <h3 className='mb-6 text-2xl font-semibold'>Feel free to contact us</h3>

        <div className='mb-8 flex items-center justify-center gap-14'>
          <img src={insta} alt='Instagram icon' className='h-8 w-8 object-contain' />
          <img src={fb} alt='Facebook icon' className='h-8 w-8 object-contain' />
          <img src={twit} alt='Twitter icon' className='h-8 w-8 object-contain' />
        </div>

        <ul className='flex flex-wrap items-center text-[12px] justify-center gap-x-12 gap-y-3 text-[#FFFFFF]'>
          <li>Home</li>
          <li>About Us</li>
          <li>Plants</li>
          <li>Delivery</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer