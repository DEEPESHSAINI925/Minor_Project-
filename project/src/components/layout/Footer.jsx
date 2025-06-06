const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">ZEAL</h3>
            <p className="text-gray-400 mb-6">
              Providing exceptional legal services with integrity, dedication, and expertise for over 18 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Corporate Law
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Family Law
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Criminal Defense
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Personal Injury
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Employment Law
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Our Attorneys
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Case Results
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
                  Legal Resources
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for legal updates and insights.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-primary-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white placeholder-gray-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-4 py-3 bg-accent-950 hover:bg-accent-900 text-white font-medium rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} ZEAL Law Firm. All rights reserved.
          </div>
          <div className="space-x-6">
            <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-950 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer