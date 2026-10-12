
import Aboutus from './components/Aboutus'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Help from './components/Help'
import Hero from './components/Hero'
import Offer from './components/Offer'
import Quality from './components/Quality'
import Submit from './components/Submit'

const App = () => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <main>
      <Header cartCount={cartCount} />
      <Hero></Hero>
      <Help></Help>
      <Offer onAddToCart={() => setCartCount((count) => count + 1)} />
      <Quality/>
      <Gallery/>
      <Aboutus/>
      <Submit/>
      <Blog/>
      <Footer/>
    </main>
  )
}

export default App
import { useState } from 'react'
