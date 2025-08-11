

const HowPipitsafarisWorks = () => {
  return (
    <section className="py-16 flex flex-col max-w-7xl mx-auto px-6 w-full">
      <h2 className="text-4xl font-bold mb-8">How Pipitsafaris works</h2>
      
      <div className="mx-auto space-y-8">
        {/* Step 1 */}

<div className="flex flex-col lg:flex-row items-center rounded-3xl hover:scale-102 hover:shadow-lg transition" style={{backgroundColor: 'rgb(242, 242, 242)'}}>
          <div className="p-12">
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mb-0 min-w-10 max-w-10 h-10 flex items-center justify-center bg-neutral-900 text-white rounded-full mr-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold">Find or build the perfect trip</h3>
            </div>
            <p className="text-neutral-900">
              After signing-up, browse curated, advisor-ready safaris - or build your own with select live 
              availability, pricing, and DMC support. Whether you need plug-and-play or fully custom, we've 
              got you covered.
            </p>
          </div>
          <div className="min-w-96 max-w-md">
            <img 
              src="https://static.cloudsafaris.com/public/trips.png?action=get" 
              alt="Trip builder UI" 
              className="mx-auto w-full"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center rounded-3xl hover:scale-102 hover:shadow-lg transition" style={{backgroundColor: 'rgb(242, 242, 242)'}}>
          <div className="p-12">
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mb-0 min-w-10 max-w-10 h-10 flex items-center justify-center bg-neutral-900 text-white rounded-full mr-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold">See your commissions</h3>
            </div>
            <p className="text-neutral-900">
              No guesswork, no chasing. See your earnings upfront on every trip and track commissions all the way through to payout.
            </p>
          </div>
          <div className="min-w-96 max-w-md">
            <img 
              src="https://static.cloudsafaris.com/public/commission.png?action=get" 
              alt="Commission dashboard" 
              className="mx-auto w-full"
            />
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col lg:flex-row items-center rounded-3xl hover:scale-102 hover:shadow-lg transition" style={{backgroundColor: 'rgb(242, 242, 242)'}}>
          <div className="p-12">
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mb-0 min-w-10 max-w-10 h-10 flex items-center justify-center bg-neutral-900 text-white rounded-full mr-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold">Spoil your clients</h3>
            </div>
            <p className="text-neutral-900">
              Deliver stunning itineraries, seamless logistics, branded safari vehicles, and concierge-level service - all backed by trusted local teams. You focus on the relationship, we handle the rest.
            </p>
          </div>
          <div className="min-w-96 max-w-md">
            <img 
              src="https://static.cloudsafaris.com/public/client-service.png?action=get" 
              alt="Client service dashboard" 
              className="mx-auto w-full"
            />
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default HowPipitsafarisWorks;