const CaseResultCard = ({ caseResult }) => {
  return (
    <div className="card overflow-hidden h-full animate-on-scroll">
      <div className="relative">
        <img 
          src={caseResult.image} 
          alt={caseResult.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-accent-950 text-white text-sm px-2 py-1 rounded">
          {caseResult.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{caseResult.title}</h3>
          <span className="text-accent-950 font-bold">{caseResult.amount}</span>
        </div>
        <p className="text-gray-700">{caseResult.description}</p>
      </div>
    </div>
  )
}

export default CaseResultCard