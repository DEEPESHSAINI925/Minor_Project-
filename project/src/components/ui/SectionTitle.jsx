const SectionTitle = ({ children }) => {
  return (
    <div className="inline-block relative mb-4">
      <span className="text-accent-950 uppercase font-medium tracking-wider text-sm relative z-10">
        {children}
      </span>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-accent-950/20 -z-10"></div>
    </div>
  )
}

export default SectionTitle