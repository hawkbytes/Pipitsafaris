

const HowPipitsafarisWorks = () => {
  return (
    <section className="py-16 flex flex-col max-w-7xl mx-auto px-6 w-full">
      <h2 className="text-4xl font-bold mb-8">How Pipit Safari works</h2>

      <div className="mx-auto space-y-8">
        {/* Step 1 */}

        <div className="flex flex-col lg:flex-row items-center rounded-3xl hover:scale-102 hover:shadow-lg transition" style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
          <div className="p-12">
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mb-0 min-w-10 max-w-10 h-10 flex items-center justify-center bg-neutral-900 text-white rounded-full mr-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold">Find or build the perfect trip</h3>
            </div>
            <p className="text-neutral-900">
              Discover authentic African safari experiences with Pipit Safari across Kenya, Tanzania, Uganda, and Rwanda.
              Explore curated packages or create a custom adventure from the Great Migration to gorilla trekking.
              Enjoy personalized journeys, expert guides, and unforgettable wildlife and cultural encounters.
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
        <div className="flex flex-col lg:flex-row items-center rounded-3xl hover:scale-102 hover:shadow-lg transition" style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
          <div className="p-12">
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mb-0 min-w-10 max-w-10 h-10 flex items-center justify-center bg-neutral-900 text-white rounded-full mr-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold">See your safari details</h3>
            </div>
            <p className="text-neutral-900">
              Plan your dream safari with confidence Pipit Safari offers transparent, professional service from start to finish.
              Enjoy detailed itineraries, handpicked accommodations, and expertly guided adventures across East Africa.
              From gorilla trekking to Big Five game drives, we tailor every detail to your interests with no hidden costs.
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
        <div className="flex flex-col lg:flex-row items-center rounded-3xl hover:scale-102 hover:shadow-lg transition" style={{ backgroundColor: 'rgb(242, 242, 242)' }}>
          <div className="p-12">
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mb-0 min-w-10 max-w-10 h-10 flex items-center justify-center bg-neutral-900 text-white rounded-full mr-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold">Experience unforgettable adventures</h3>
            </div>
            <p className="text-neutral-900">
              Explore East Africa’s stunning landscapes with expert-guided safaris, luxury stays, and 24/7 personalized support.
              From upscale lodges to starlit camping, we create unforgettable wildlife adventures rooted in sustainability.
              Trust our experienced team to ensure your comfort, safety, and lasting memories across every destination.





              Ask ChatGPT

            </p>
          </div>
          <div className="min-w-96 max-w-md">
            <img
              src="https://static.cloudsafaris.com/public/spoil.png?action=get"
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