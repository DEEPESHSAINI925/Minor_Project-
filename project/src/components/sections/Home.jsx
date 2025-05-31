import { useState, useEffect } from 'react'
import Header from "../layout/Header"
import Footer from '../layout/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Attorneys from '../sections/Attorneys'
import Testimonials from '../sections/Testimonials'
import CaseResults from '../sections/CaseResults'
import Contact from '../sections/Contact'
import ScrollToTop from '../ui/ScrollToTop'

function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    // Initialize animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })
    
    animatedElements.forEach(element => {
      observer.observe(element)
    })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      animatedElements.forEach(element => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <>
      <Header scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Services />
        <Attorneys />
        <CaseResults />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop showBelow={300} />
    </>
  )
}

export default Home