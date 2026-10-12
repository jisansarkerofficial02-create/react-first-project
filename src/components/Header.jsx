
import { useState } from "react"

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="site-header absolute top-0 left-1/2 -translate-x-1/2 z-10 w-full">
        <div className='container'>
            <div className="header-inner flex justify-between items-center bg-transparent">
              <div className="py-9">
                <a href="#">
                  <img src="/nav_logo.svg" alt="logo" />
                </a>
              </div>

              <button
                type="button"
                className="menu-toggle"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span></span><span></span><span></span>
              </button>

              <div className={`header-actions flex justify-end items-center gap-17${menuOpen ? " is-open" : ""}`}>
                <ul id="primary-navigation" className="nav-links flex cursor-pointer justify-center items-center gap-12 text-[18px] font-medium text-white font-lato py-13">
                  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                  <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
                  <li><a href="#planters" onClick={() => setMenuOpen(false)}>Planters</a></li>
                  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>

                <div className="header-utilities">
                  <span className="cart-count" aria-live="polite">Cart: {cartCount}</span>
                  <a href="tel:+10000000000" className="call-button text-white cursor-pointer font-lato font-medium text-[17px] py-3 px-12 border border-white rounded-[3px]">Call us</a>
                </div>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Header
