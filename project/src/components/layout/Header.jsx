import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import NavLink from '../ui/NavLink'

const Header = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Update header style on scroll
  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            <span className={`transition-colors duration-300 ${isScrolled ? 'text-primary-950' : 'text-white'}`}>
              ZEAL
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink 
              href="#home" 
              isScrolled={isScrolled} 
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              href="#about" 
              isScrolled={isScrolled} 
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              href="#services" 
              isScrolled={isScrolled} 
              onClick={closeMenu}
            >
              Practice Areas
            </NavLink>
            <NavLink 
              href="#attorneys" 
              isScrolled={isScrolled} 
              onClick={closeMenu}
            >
              Attorneys
            </NavLink>
            <NavLink 
              href="/search/lawer" 
              isScrolled={isScrolled} 
              onClick={closeMenu}
            >
              Find Attorneys
            </NavLink>
            <NavLink 
              href="#contact" 
              isScrolled={isScrolled} 
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Login and Register Button*/}
        <div className='hidden  md:flex gap-2 items-center'>
        <button onClick={()=>{window.location.href="/login"}} className='px-4 py-2 rounded-md bg-blue-500 text-white '>
          <h4 className='text-white text-sm'>Login</h4>
         </button>
        {
          sessionStorage.getItem("token") ?  <button onClick={()=>{
            sessionStorage.removeItem("token")
            sessionStorage.removeItem("user")
            window.location.href="/"
          }} className='px-4 py-2 rounded-md bg-blue-500 text-white '>
          <h4 className='text-white text-sm'>logout</h4>
         </button> : ( <button onClick={()=>{window.location.href="/register"}} className='px-4 py-2 rounded-md bg-blue-500 text-white '>
          <h4 className='text-white text-sm'>Register</h4>
         </button>)
        }
        </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className={`text-2xl ${isScrolled ? 'text-primary-950' : 'text-white'}`} />
            ) : (
              <FaBars className={`text-2xl ${isScrolled ? 'text-primary-950' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white absolute w-full transition-all duration-300 shadow-lg ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          <a 
            href="#home" 
            className="block py-2 text-primary-900 hover:text-accent-950 transition-colors duration-300"
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block py-2 text-primary-900 hover:text-accent-950 transition-colors duration-300"
            onClick={closeMenu}
          >
            About
          </a>
          <a 
            href="#services" 
            className="block py-2 text-primary-900 hover:text-accent-950 transition-colors duration-300"
            onClick={closeMenu}
          >
            Practice Areas
          </a>
          <a 
            href="#attorneys" 
            className="block py-2 text-primary-900 hover:text-accent-950 transition-colors duration-300"
            onClick={closeMenu}
          >
            Attorneys
          </a>
          <a 
            href="#results" 
            className="block py-2 text-primary-900 hover:text-accent-950 transition-colors duration-300"
            onClick={closeMenu}
          >
            Results
          </a>
          <a 
            href="#contact" 
            className="block py-2 text-primary-900 hover:text-accent-950 transition-colors duration-300"
            onClick={closeMenu}
          >
            Contact
          </a>
          <div className="pt-4 border-t border-gray-200">
            <a 
              href="tel:+18001234567" 
              className="text-accent-950 font-medium"
            >
              Call us at: (800) 123-4567
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header