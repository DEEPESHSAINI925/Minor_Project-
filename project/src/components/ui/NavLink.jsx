const NavLink = ({ href, children, isScrolled, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`relative px-3 py-2 transition-colors duration-300 
        ${isScrolled ? 'text-gray-800 hover:text-accent-950' : 'text-white hover:text-accent-400'}
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
        after:bg-accent-950 after:transition-all after:duration-300 hover:after:w-full`}
    >
      {children}
    </a>
  )
}

export default NavLink