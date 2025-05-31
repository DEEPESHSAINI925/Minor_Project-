import SectionTitle from '../ui/SectionTitle'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <SectionTitle>About Our Firm</SectionTitle>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Committed To <span className="text-accent-950">Excellence</span> In Legal Representation
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2005, ZEAL Law Firm has been providing exceptional legal services for over 18 years. 
              Our team of expert attorneys is dedicated to fighting for justice and protecting our clients' rights.
            </p>
            <p className="text-gray-700 mb-8">
              We pride ourselves on our client-centered approach, combining extensive legal knowledge with compassionate 
              understanding of each case's unique circumstances. Our commitment to excellence has earned us recognition 
              as one of the top legal firms in the region.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent-950/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Integrity</h3>
                  <p className="text-sm text-gray-600">Our foundation</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent-950/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Efficiency</h3>
                  <p className="text-sm text-gray-600">Fast solutions</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent-950/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teamwork</h3>
                  <p className="text-sm text-gray-600">Collaborative approach</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent-950/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Innovation</h3>
                  <p className="text-sm text-gray-600">Modern solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-on-scroll">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-accent-950/10 rounded-full -z-10"></div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5668857/pexels-photo-5668857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team of attorneys" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary-950/80 p-6">
                <div className="flex items-center">
                  <div className="mr-4">
                    <p className="text-4xl font-bold text-white">35+</p>
                  </div>
                  <div>
                    <p className="text-white text-sm">Years of Combined</p>
                    <p className="text-white font-medium">Legal Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About