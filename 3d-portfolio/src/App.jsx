import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Experience from './sections/Experience'
import StarsCanvas from './components/StarsCanvas'

const App = () => {
  return (
      <main className='max-w-7xl mx-auto relative z-0'>
        <Navbar />
        <div className='relative z-0'>
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <Projects />
        <Clients />
        <Experience />
        <Contact />
        <Footer />
      </main>
  )
}

export default App