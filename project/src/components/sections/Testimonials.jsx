import SectionTitle from '../ui/SectionTitle'
import TestimonialCard from '../ui/TestimonialCard'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      name: "Michael Thompson",
      title: "CEO, Thompson Enterprises",
      content: "The team at ZEAL provided exceptional legal counsel during our company's merger. Their attention to detail and strategic thinking saved us from potential pitfalls and ensured a smooth transition.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 2,
      name: "Jennifer Wilson",
      title: "Personal Injury Client",
      content: "After my accident, I was overwhelmed with medical bills and insurance claims. ZEAL fought tirelessly for me and secured a settlement that covered all my expenses and compensated me for my suffering.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 3,
      name: "Robert Garcia",
      title: "Small Business Owner",
      content: "As a small business owner, I needed reliable legal advice without breaking the bank. ZEAL provided excellent guidance on contracts and employment issues at a reasonable cost. I highly recommend them.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])
  
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section 
      className="section-padding relative py-24"
      style={{
        background: 'linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.95)), url("https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <SectionTitle>Client Testimonials</SectionTitle>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Our <span className="text-accent-950">Clients Say</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Our clients' satisfaction is our greatest achievement. Here's what some of them have to say about working with us.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                  currentSlide === index ? 'bg-accent-950' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials