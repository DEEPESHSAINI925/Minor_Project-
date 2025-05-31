import { useState, useEffect } from 'react'

const ScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > showBelow) {
        if (!show) setShow(true)
      } else {
        if (show) setShow(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [show, showBelow])
  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button 
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-accent-950 text-white shadow-md transition-all duration-300 z-50 ${
        show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}

export default ScrollToTop