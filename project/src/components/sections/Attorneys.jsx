import SectionTitle from '../ui/SectionTitle'
import AttorneyCard from '../ui/AttorneyCard'
import { useEffect, useState } from 'react'

const Attorneys = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1 })
    
    const element = document.getElementById('attorneys-section')
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])
  
  const attorneys = [
    {
      id: 1,
      name: "Jonathan Roberts",
      title: "Senior Partner",
      specialties: ["Corporate Law", "Mergers & Acquisitions"],
      image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With over 20 years of experience, Jonathan leads our corporate law practice with expertise in complex business transactions."
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "Partner",
      specialties: ["Criminal Defense", "Civil Litigation"],
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sarah is renowned for her tenacious courtroom advocacy and has successfully defended clients in high-profile criminal cases."
    },
    {
      id: 3,
      name: "David Williams",
      title: "Associate",
      specialties: ["Real Estate", "Property Law"],
      image: "https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "David specializes in complex real estate transactions and has helped clients navigate challenging property matters."
    },
    {
      id: 4,
      name: "Olivia Martinez",
      title: "Partner",
      specialties: ["Family Law", "Divorce"],
      image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Olivia brings compassion and expertise to family law matters, focusing on achieving the best outcomes for families in transition."
    }
  ]

  return (
    <section id="attorneys" className="section-padding bg-gray-50">
      <div id="attorneys-section" className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <SectionTitle>Our Expert Team</SectionTitle>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Our <span className="text-accent-950">Attorneys</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Our team of experienced attorneys is dedicated to providing exceptional legal representation
            and personalized service to every client.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney, index) => (
            <AttorneyCard 
              key={attorney.id}
              attorney={attorney}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default Attorneys