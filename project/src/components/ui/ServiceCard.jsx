import { useState, useEffect } from 'react'

const ServiceCard = ({ title, description, icon, percentage }) => {
  const [showProgress, setShowProgress] = useState(false)
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    // Trigger animation when component is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowProgress(true)
      }
    }, { threshold: 0.1 })
    
    const element = document.getElementById(`service-${title.replace(/\s+/g, '-').toLowerCase()}`)
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [title])
  
  useEffect(() => {
    if (showProgress) {
      const timer = setTimeout(() => {
        setProgress(percentage)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [showProgress, percentage])

  return (
    <div 
      id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
    >
      <div className="text-accent-950 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-xs font-semibold inline-block text-primary-800">
              Success Rate
            </span>
          </div>
          <div>
            <span className="text-xs font-semibold inline-block text-primary-800">
              {progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <div 
            style={{ width: `${progress}%` }} 
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent-950 transition-all duration-1000 ease-out"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard