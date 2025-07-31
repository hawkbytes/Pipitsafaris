import React, { useState } from 'react';

interface ExtrasTabProps {
  // Props can be extended for future customization
}

const ExtrasTab: React.FC<ExtrasTabProps> = () => {
  const [airportQuantity, setAirportQuantity] = useState(0);
  const [singleRoomQuantity, setSingleRoomQuantity] = useState(0);

  const handleQuantityChange = (type: 'airport' | 'singleRoom', increment: boolean) => {
    if (type === 'airport') {
      setAirportQuantity(prev => increment ? prev + 1 : Math.max(0, prev - 1));
    } else {
      setSingleRoomQuantity(prev => increment ? prev + 1 : Math.max(0, prev - 1));
    }
  };

  return (
    <div style={{
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      {/* Transfer from Airport */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        borderRadius: '0.75rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#6b7280',
                marginBottom: '0.25rem'
              }}>
                OPTIONAL
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#1a1a1a',
                margin: 0,
                marginBottom: '0.25rem'
              }}>
                Transfer from Kilimanjaro International Airport to Springlands Hotel
              </h3>
              <h5 style={{
                fontSize: '0.875rem',
                color: '#1a1a1a',
                margin: 0
              }}>
                Cost is for 1 traveller.
              </h5>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                textAlign: 'center',
                color: '#1a1a1a',
                margin: 0,
                marginBottom: '0.5rem'
              }}>
                Number of Units
              </h3>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <button 
                  onClick={() => handleQuantityChange('airport', false)}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #f5f5f5',
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '50%',
                    background: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    color: '#1a1a1a'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                    style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      color: '#1a1a1a'
                    }}
                  >
                    <path 
                      fill="currentColor" 
                      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                    />
                  </svg>
                </button>
                <h3 style={{
                  fontSize: '1rem',
                  margin: 0,
                  color: '#1a1a1a'
                }}>
                  {airportQuantity}
                </h3>
                <button 
                  onClick={() => handleQuantityChange('airport', true)}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #f5f5f5',
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '50%',
                    background: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    color: '#1a1a1a'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                    style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      color: '#1a1a1a'
                    }}
                  >
                    <path 
                      fill="currentColor" 
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transfer from Arusha */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        borderRadius: '0.75rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#6b7280',
                marginBottom: '0.25rem'
              }}>
                OPTIONAL
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#1a1a1a',
                margin: 0,
                marginBottom: '0.25rem'
              }}>
                Transfer from Arusha to Moshi
              </h3>
              <h3 style={{
                fontSize: '0.75rem',
                paddingTop: '0.5rem',
                margin: 0,
                color: '#1a1a1a'
              }}>
                Applies to a max of 9 travellers.
              </h3>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              textAlign: 'right',
              gap: '0.5rem',
              padding: '1rem'
            }}>
              <button style={{
                fontWeight: 500,
                borderRadius: '1.5rem',
                padding: '0.375rem 0.75rem',
                fontSize: '0.75rem',
                width: 'max-content',
                transition: 'all 0.15s ease',
                background: 'white',
                border: '1px solid #1a1a1a',
                color: '#1a1a1a',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(243, 244, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
              >
                <svg 
                  aria-hidden="true" 
                  focusable="false" 
                  role="img" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512"
                  style={{
                    width: '0.75rem',
                    height: '0.75rem',
                    color: '#1a1a1a'
                  }}
                >
                  <path 
                    fill="currentColor" 
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                  />
                </svg>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Single Room */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        borderRadius: '0.75rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                fontSize: '0.625rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                color: '#6b7280',
                marginBottom: '0.25rem'
              }}>
                OPTIONAL
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#1a1a1a',
                margin: 0,
                marginBottom: '0.25rem'
              }}>
                Single Room at Springlands Hotel
              </h3>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                textAlign: 'center',
                color: '#1a1a1a',
                margin: 0,
                marginBottom: '0.5rem'
              }}>
                Number of Units
              </h3>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <button 
                  onClick={() => handleQuantityChange('singleRoom', false)}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #f5f5f5',
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '50%',
                    background: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    color: '#1a1a1a'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                    style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      color: '#1a1a1a'
                    }}
                  >
                    <path 
                      fill="currentColor" 
                      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                    />
                  </svg>
                </button>
                <h3 style={{
                  fontSize: '1rem',
                  margin: 0,
                  color: '#1a1a1a'
                }}>
                  {singleRoomQuantity}
                </h3>
                <button 
                  onClick={() => handleQuantityChange('singleRoom', true)}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #f5f5f5',
                    width: '1.5rem',
                    height: '1.5rem',
                    borderRadius: '50%',
                    background: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    color: '#1a1a1a'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                    style={{
                      width: '0.75rem',
                      height: '0.75rem',
                      color: '#1a1a1a'
                    }}
                  >
                    <path 
                      fill="currentColor" 
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtrasTab;
