import SectionTitle from '../ui/SectionTitle'
import CaseResultCard from '../ui/CaseResultCard'

const CaseResults = () => {
  const caseResults = [
    {
      id: 1,
      title: "Corporate Merger",
      category: "Corporate Law",
      amount: "$15.2M",
      description: "Successfully negotiated and closed a complex cross-border merger between two technology companies.",
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Personal Injury Settlement",
      category: "Personal Injury",
      amount: "$4.7M",
      description: "Secured a substantial settlement for a client severely injured in a construction site accident.",
      image: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Real Estate Development",
      category: "Real Estate",
      amount: "$22M",
      description: "Facilitated the acquisition and development of a mixed-use commercial property in the heart of downtown.",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Criminal Defense Victory",
      category: "Criminal Law",
      amount: "Not Guilty",
      description: "Successfully defended a client wrongfully accused of fraud, resulting in all charges being dismissed.",
      image: "https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]

  return (
    <section id="results" className="section-padding bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <SectionTitle>Our Success Stories</SectionTitle>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Recent <span className="text-accent-950">Case Results</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Our track record speaks for itself. Here are some of our recent successes
            representing clients across various practice areas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseResults.map((caseResult) => (
            <CaseResultCard 
              key={caseResult.id}
              caseResult={caseResult}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseResults