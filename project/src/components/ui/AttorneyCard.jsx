import { useState, useEffect } from 'react'

const AttorneyCard = ({ attorney, delay, isVisible }) => {
  const [showContent, setShowContent] = useState(false)
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, delay])

  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-500 ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="aspect-w-2 aspect-h-3 relative group">
        <img 
          src={attorney.image} 
          alt={attorney.name}
          className="w-full h-80 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300 text-white">
          <h3 className="text-xl font-semibold">{attorney.name}</h3>
          <p className="text-accent-400">{attorney.title}</p>
          <p className="mt-2 text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{attorney.bio}</p>
          
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-wrap gap-2">
              {attorney.specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="inline-block bg-accent-950/20 text-white text-xs px-2 py-1 rounded-md"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttorneyCard