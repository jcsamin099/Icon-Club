
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Announcement from '../components/Announcement'
import IconGallery from '../components/IconGallery'
import Footer from '../components/Footer'

const IconClub = () => {
  return (
    <div>
      <Header />
      <section id="home"><Hero /></section> 
      <section id="about"><About /></section>
      <section id='events'><Announcement /></section>
      <section id='gallery'><IconGallery /></section>
      <Footer />
    </div>
  )
}

export default IconClub
