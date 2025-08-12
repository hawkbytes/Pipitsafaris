import { useState } from 'react'
import {
  AppContainer,
  TopBanner,
  BannerText,
  BannerArrow,
  HeroSection,
  Logo,
  Tagline,
  MainQuestion,
  CountriesContainer,
  CountryCard,
  CardBackground,
  CountryName,
  CountryDescription,
  CheckmarkIcon,
  ContinueButton,
  BackButton,
  DestinationCard,
  DestinationImage,
  DestinationInfo,
  DestinationTitle,
  DestinationSubtitle,
  DestinationDescription,
  ElephantIcon
} from './styles/AppStyles'

import {
  TravelersContainer,
  RoomCard,
  RoomTitle,
  CounterRow,
  CounterInfo,
  CounterLabel,
  CounterSubtext,
  CounterControls,
  CounterButton,
  CounterDisplay,
  AddRoomButton,
  DateContainer,
  DateOptionsContainer,
  DateOptionButton,
  CalendarCard,
  TripTypeContainer,
  TripTypeSubtitle,
  TripTypeButtonsContainer,
  TripTypeButton,
  HelperText,
  HelperButton
} from './styles/ResponsiveComponents'

interface Room {
  adults: number
  children: number
  infants: number
}

function App() {
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])
  const [showDestinations, setShowDestinations] = useState(false)
  const [showBudget, setShowBudget] = useState(false)
  const [selectedBudget, setSelectedBudget] = useState<string>('')
  const [showTravelers, setShowTravelers] = useState(false)
  const [rooms, setRooms] = useState<Room[]>([{ adults: 2, children: 0, infants: 0 }])
  const [showDates, setShowDates] = useState(false)
  const [dateOption, setDateOption] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [showTripType, setShowTripType] = useState(false)
  const [selectedTripType, setSelectedTripType] = useState<string>('')
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: ''
  })

  const budgetOptions = [
    {
      name: "Value",
      price: "$2.5K USD per person",
      description: "Basic, comfortable lodging at an affordable price.",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Comfort", 
      price: "$2.5K - $4.5K USD per person",
      description: "Mid-range accommodations with extra amenities.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Luxury",
      price: "$4.5K - $9K USD per person", 
      description: "High-end lodges offering premium service.",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Exclusive",
      price: "$10K+ USD per person",
      description: "Top-tier, private, and personalized luxury.",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const destinations = {
    TANZANIA: [
      {
        name: "Tarangire National Park",
        subtitle: "Tarangire National Park",
        description: "Tarangire National Park is a wildlife sanctuary in northern Tanzania known for its diverse landscape of savanna, swamps, and baobab trees.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Mount Kilimanjaro",
        subtitle: "Mount Kilimanjaro", 
        description: "Africa's highest peak, offering treks through diverse ecosystems.",
        image: "https://images.unsplash.com/photo-1585741019003-0b019b03ee88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Ngorongoro Crater",
        subtitle: "Ngorongoro Crater",
        description: "Ngorongoro Crater is a natural amphitheater of unparalleled beauty",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Serengeti National Park",
        subtitle: "Serengeti National Park", 
        description: "Home to Africa's most fascinating wildlife phenomenon, the Great Migration.",
        image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    KENYA: [
      {
        name: "Maasai Mara",
        subtitle: "Maasai Mara National Reserve",
        description: "World-famous for the Great Migration and incredible wildlife viewing.",
        image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Amboseli National Park",
        subtitle: "Amboseli National Park",
        description: "Best views of Mount Kilimanjaro and large elephant herds.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    UGANDA: [
      {
        name: "Bwindi Impenetrable Forest",
        subtitle: "Bwindi Impenetrable National Park",
        description: "Home to endangered mountain gorillas in ancient rainforest.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Queen Elizabeth National Park", 
        subtitle: "Queen Elizabeth National Park",
        description: "Uganda's most popular savanna park with diverse ecosystems.",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    RWANDA: [
      {
        name: "Volcanoes National Park",
        subtitle: "Volcanoes National Park", 
        description: "Mountain gorilla trekking in the Virunga Mountains.",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Akagera National Park",
        subtitle: "Akagera National Park",
        description: "Rwanda's only savanna park with the Big Five.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  }

  const countries = [
    {
      name: "TANZANIA",
      description: "Experience the Serengeti and Mount Kilimanjaro",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "KENYA", 
      description: "The heart of safari adventures",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "UGANDA",
      description: "The Pearl of Africa", 
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "RWANDA",
      description: "Land of a thousand hills",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const handleCountryClick = (countryName: string) => {
    if (selectedCountry === countryName) {
      setSelectedCountry('')
    } else {
      setSelectedCountry(countryName)
    }
  }

  const handleDestinationClick = (destinationName: string) => {
    setSelectedDestinations(prev => {
      if (prev.includes(destinationName)) {
        return prev.filter(dest => dest !== destinationName)
      } else {
        return [...prev, destinationName]
      }
    })
  }

  const handleBudgetClick = (budgetName: string) => {
    if (selectedBudget === budgetName) {
      setSelectedBudget('')
    } else {
      setSelectedBudget(budgetName)
    }
  }

  const updateRoomCount = (roomIndex: number, type: 'adults' | 'children' | 'infants', increment: boolean) => {
    setRooms(prev => {
      const newRooms = [...prev]
      const currentValue = newRooms[roomIndex][type]
      
      if (increment) {
        newRooms[roomIndex][type] = currentValue + 1
      } else {
        newRooms[roomIndex][type] = Math.max(0, currentValue - 1)
        // Ensure at least 1 adult per room
        if (type === 'adults' && newRooms[roomIndex][type] === 0) {
          newRooms[roomIndex][type] = 1
        }
      }
      
      return newRooms
    })
  }

  const addRoom = () => {
    setRooms(prev => [...prev, { adults: 1, children: 0, infants: 0 }])
  }

  const handleContinue = () => {
    if (showContactInfo) {
      console.log('Contact information:', contactInfo)
      alert(`Thank you ${contactInfo.firstName}! Your safari booking request has been submitted. We'll contact you within 24 hours to finalize your ${selectedTripType.toLowerCase()} safari experience!`)
    } else if (showTripType) {
      console.log('Selected trip type:', selectedTripType)
      setShowContactInfo(true)
    } else if (showDates) {
      console.log('Selected date option:', dateOption, 'Selected date:', selectedDate)
      setShowTripType(true)
    } else if (showTravelers) {
      console.log('Rooms configuration:', rooms)
      setShowDates(true)
} else if (showBudget) {
      console.log('Selected budget:', selectedBudget)
      setShowTravelers(true)
    } else if (showDestinations) {
      console.log('Selected destinations:', selectedDestinations)
      setShowBudget(true)
    } else {
      console.log('Selected country:', selectedCountry)
      setShowDestinations(true)
    }
  }

  const handleBack = () => {
    if (showContactInfo) {
      setShowContactInfo(false)
      setContactInfo({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        specialRequests: ''
      })
    } else if (showTripType) {
      setShowTripType(false)
      setSelectedTripType('')
    } else if (showDates) {
      setShowDates(false)
      setDateOption('')
      setSelectedDate('')
    } else if (showTravelers) {
      setShowTravelers(false)
    } else if (showBudget) {
      setShowBudget(false)
      setSelectedBudget('')
    } else if (showDestinations) {
      setShowDestinations(false)
      setSelectedDestinations([])
    }
  }

  const hasValidSelections = () => {
    if (showContactInfo) {
      return contactInfo.firstName !== '' && contactInfo.lastName !== '' && contactInfo.email !== '' && contactInfo.phone !== ''
    } else if (showTripType) {
      return selectedTripType !== ''
    } else if (showDates) {
      return dateOption !== '' && (dateOption === 'preferred_month' || selectedDate !== '')
    } else if (showTravelers) {
      return rooms.some(room => room.adults > 0)
    } else if (showBudget) {
      return selectedBudget !== ''
    } else if (showDestinations) {
      return selectedDestinations.length > 0
    } else {
      return selectedCountry !== ''
    }
  }

  return (
    <AppContainer>
      <TopBanner>
        <BannerText>
          Are you a travel agency or a travel agent? Check us{' '}
          <a 
            href="/for-advisors" 
            style={{ 
              color: 'inherit', 
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            out here!
          </a>
        </BannerText>
        <BannerArrow>▼</BannerArrow>
      </TopBanner>

      <HeroSection>
        {(showDestinations || showBudget || showTravelers || showDates || showTripType || showContactInfo) && (
          <BackButton onClick={handleBack}>
            ← BACK
          </BackButton>
        )}
        
        <Logo>
          PIPITSAFARIS
          <span className="script">Concierge</span>
        </Logo>
        
        <Tagline>YOUR PERSONAL SAFARI PLANNER</Tagline>
        
        <MainQuestion>
          {showContactInfo
            ? "TELL US ABOUT YOURSELF"
            : showTripType
            ? "WOULD YOU PREFER A GROUP OR PRIVATE TRIP?"
            : showDates
            ? "WHEN DO YOU WANT TO ARRIVE?"
            : showTravelers 
            ? "HOW MANY TRAVELERS AND ROOMS?"
            : showBudget 
            ? "WHAT BUDGET FITS YOUR TRAVEL STYLE?"
            : showDestinations 
            ? "WHICH DESTINATIONS DO YOU WANT TO SEE?"
            : "WHICH COUNTRIES DO YOU WANT TO VISIT?"
          }
        </MainQuestion>

        {!showDestinations && !showBudget && !showTravelers && !showDates && !showTripType && !showContactInfo && (
          <>
            <CountriesContainer>
              {countries.map((country, index) => (
                <CountryCard 
                  key={index} 
                  isSelected={selectedCountry === country.name}
                  onClick={() => handleCountryClick(country.name)}
                >
                  <CardBackground bgImage={country.image}>
                    <CheckmarkIcon show={selectedCountry === country.name} />
                    <CountryName>{country.name}</CountryName>
                    <CountryDescription>{country.description}</CountryDescription>
                  </CardBackground>
                </CountryCard>
              ))}
            </CountriesContainer>
          </>
        )}

        {showDestinations && !showBudget && !showTravelers && !showDates && !showTripType && !showContactInfo && selectedCountry && (
          <>
            <HelperText>
              Not sure what you want to see?
            </HelperText>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <HelperButton>
                Pick destinations for me
              </HelperButton>
            </div>
            
            <CountriesContainer>
              {destinations[selectedCountry as keyof typeof destinations]?.map((destination, index) => (
                <DestinationCard 
                  key={index}
                  isSelected={selectedDestinations.includes(destination.name)}
                  onClick={() => handleDestinationClick(destination.name)}
                >
                  <DestinationImage bgImage={destination.image}>
                    <CheckmarkIcon show={selectedDestinations.includes(destination.name)} />
                    {(destination.description.toLowerCase().includes('elephant') || 
                      destination.name.toLowerCase().includes('amboseli') ||
                      destination.name.toLowerCase().includes('tarangire') ||
                      index === 0) && (
                      <ElephantIcon />
                    )}
                  </DestinationImage>
                  <DestinationInfo>
                    <DestinationTitle>{destination.name}</DestinationTitle>
                    <DestinationSubtitle>{destination.subtitle}</DestinationSubtitle>
                    <DestinationDescription>{destination.description}</DestinationDescription>
                  </DestinationInfo>
                </DestinationCard>
              ))}
            </CountriesContainer>
          </>
        )}

        {showBudget && !showTravelers && !showDates && !showTripType && !showContactInfo && (
          <>            
            <CountriesContainer>
              {budgetOptions.map((budget, index) => (
                <DestinationCard 
                  key={index}
                  isSelected={selectedBudget === budget.name}
                  onClick={() => handleBudgetClick(budget.name)}
                >
                  <DestinationImage bgImage={budget.image}>
                    <CheckmarkIcon show={selectedBudget === budget.name} />
                  </DestinationImage>
                  <DestinationInfo>
                    <DestinationTitle>{budget.name}</DestinationTitle>
                    <DestinationSubtitle>{budget.price}</DestinationSubtitle>
                    <DestinationDescription>{budget.description}</DestinationDescription>
                  </DestinationInfo>
                </DestinationCard>
              ))}
            </CountriesContainer>
          </>
        )}

        {showTravelers && !showDates && !showTripType && !showContactInfo && (
          <TravelersContainer>
            {rooms.map((room, roomIndex) => (
              <RoomCard key={roomIndex}>
                <RoomTitle>
                  ROOM {roomIndex + 1}
                </RoomTitle>
                
                {/* Adults */}
                <CounterRow>
                  <CounterInfo>
                    <CounterLabel>ADULTS</CounterLabel>
                    <CounterSubtext>Ages 13+</CounterSubtext>
                  </CounterInfo>
                  <CounterControls>
                    <CounterButton
                      onClick={() => updateRoomCount(roomIndex, 'adults', false)}
                    >
                      −
                    </CounterButton>
                    <CounterDisplay>
                      {room.adults}
                    </CounterDisplay>
                    <CounterButton
                      onClick={() => updateRoomCount(roomIndex, 'adults', true)}
                    >
                      +
                    </CounterButton>
                  </CounterControls>
                </CounterRow>

                {/* Children */}
                <CounterRow>
                  <CounterInfo>
                    <CounterLabel>CHILDREN</CounterLabel>
                    <CounterSubtext>Ages 3 - 12</CounterSubtext>
                  </CounterInfo>
                  <CounterControls>
                    <CounterButton
                      onClick={() => updateRoomCount(roomIndex, 'children', false)}
                    >
                      −
                    </CounterButton>
                    <CounterDisplay>
                      {room.children}
                    </CounterDisplay>
                    <CounterButton
                      onClick={() => updateRoomCount(roomIndex, 'children', true)}
                    >
                      +
                    </CounterButton>
                  </CounterControls>
                </CounterRow>

                {/* Infants */}
                <CounterRow style={{ marginBottom: 0 }}>
                  <CounterInfo>
                    <CounterLabel>INFANTS</CounterLabel>
                    <CounterSubtext>Ages 0 - 2</CounterSubtext>
                  </CounterInfo>
                  <CounterControls>
                    <CounterButton
                      onClick={() => updateRoomCount(roomIndex, 'infants', false)}
                    >
                      −
                    </CounterButton>
                    <CounterDisplay>
                      {room.infants}
                    </CounterDisplay>
                    <CounterButton
                      onClick={() => updateRoomCount(roomIndex, 'infants', true)}
                    >
                      +
                    </CounterButton>
                  </CounterControls>
                </CounterRow>
              </RoomCard>
            ))}
            
            <AddRoomButton onClick={addRoom}>
              ADD ROOM +
            </AddRoomButton>
          </TravelersContainer>
        )}

        {showDates && !showTripType && !showContactInfo && (
          <DateContainer>
            {/* Date Option Buttons */}
            <DateOptionsContainer>
              <DateOptionButton
                isSelected={dateOption === 'specific_date'}
                onClick={() => setDateOption('specific_date')}
              >
                I HAVE A SPECIFIC DATE
              </DateOptionButton>
              <DateOptionButton
                isSelected={dateOption === 'preferred_month'}
                onClick={() => setDateOption('preferred_month')}
              >
                I HAVE A PREFERRED MONTH TO TRAVEL
              </DateOptionButton>
            </DateOptionsContainer>

            {/* Calendar */}
            {dateOption === 'specific_date' && (
              <CalendarCard>
                <div style={{
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>‹</button>
                  <span>August, 2025</span>
                  <button style={{ background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer' }}>›</button>
                </div>
                
                {/* Calendar Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center' }}>
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', padding: '8px' }}>
                      {day}
                    </div>
                  ))}
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(date => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(`August ${date}, 2025`)}
                      style={{
                        background: selectedDate === `August ${date}, 2025` ? 'rgba(255, 255, 255, 0.3)' : 'none',
                        border: 'none',
                        color: 'white',
                        padding: '8px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        fontSize: '14px',
                        minHeight: '32px'
                      }}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </CalendarCard>
            )}

            {dateOption === 'preferred_month' && (
              <div style={{
                color: 'white',
                fontSize: '16px',
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '8px',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}>
                Great! We'll work with you to find the perfect time within your preferred month.
              </div>
            )}
          </DateContainer>
        )}

        {showTripType && !showContactInfo && (
          <TripTypeContainer>
            {/* Subtitle */}
            <TripTypeSubtitle>
              For groups of fewer than 3, joining others can make your safari more affordable.
            </TripTypeSubtitle>

            {/* Trip Type Option Buttons */}
            <TripTypeButtonsContainer>
              <TripTypeButton
                isSelected={selectedTripType === 'GROUP TRIP'}
                onClick={() => setSelectedTripType('GROUP TRIP')}
              >
                GROUP TRIP
              </TripTypeButton>
              <TripTypeButton
                isSelected={selectedTripType === 'PRIVATE SAFARI'}
                onClick={() => setSelectedTripType('PRIVATE SAFARI')}
              >
                PRIVATE SAFARI
              </TripTypeButton>
            </TripTypeButtonsContainer>
          </TripTypeContainer>
        )}

        {showContactInfo && (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '20px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(0, 0, 0, 0.7)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '8px',
              padding: '40px',
              width: '100%',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{ 
                    color: 'white', 
                    fontSize: '14px', 
                    fontWeight: 'bold',
                    display: 'block',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    value={contactInfo.firstName}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, firstName: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label style={{ 
                    color: 'white', 
                    fontSize: '14px', 
                    fontWeight: 'bold',
                    display: 'block',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    LAST NAME *
                  </label>
                  <input
                    type="text"
                    value={contactInfo.lastName}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, lastName: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                  placeholder="Enter email address"
                />
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <div>
                  <label style={{ 
                    color: 'white', 
                    fontSize: '14px', 
                    fontWeight: 'bold',
                    display: 'block',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label style={{ 
                    color: 'white', 
                    fontSize: '14px', 
                    fontWeight: 'bold',
                    display: 'block',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    COUNTRY
                  </label>
                  <input
                    type="text"
                    value={contactInfo.country}
                    onChange={(e) => setContactInfo(prev => ({ ...prev, country: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '4px',
                      color: 'white',
                      fontSize: '16px',
                      outline: 'none'
                    }}
                    placeholder="Enter country"
                  />
                </div>
              </div>

              <div>
                <label style={{ 
                  color: 'white', 
                  fontSize: '14px', 
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  SPECIAL REQUESTS OR DIETARY REQUIREMENTS
                </label>
                <textarea
                  value={contactInfo.specialRequests}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, specialRequests: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '4px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    minHeight: '100px',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us about any special requests, dietary requirements, or accessibility needs..."
                />
              </div>
            </div>
          </div>
        )}

        <ContinueButton 
          show={hasValidSelections()}
          onClick={handleContinue}
        >
          Continue
        </ContinueButton>
      </HeroSection>
    </AppContainer>
  )
}

export default App
