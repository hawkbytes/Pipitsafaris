import React from 'react';

interface InclusionsSectionProps {
  // Props can be extended for future customization
}

const InclusionsSection: React.FC<InclusionsSectionProps> = () => {
  const includedItems = [
    "Transportation from Moshi to the starting point on the mountain and return to Moshi.",
    "National park gate fees, hut/camping fees.",
    "Rescue fees, tents and sleeping mattress.",
    "Guides salaries, porters salaries & all meals on the mountain.",
    "Guides, porters, cook accommodation and entry fees on the mountain.",
    "Qualified guides for all the routes."
  ];

  const excludedItems = [
    "Guides, Porters, Cook Tips, Gears eg. Sleeping Bags, Clothes and Shoes."
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      paddingBottom: '2.5rem',
      borderBottom: '1px solid #f5f5f5',
      paddingTop: '0.5rem'
    }}>
      {/* What's included */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'center'
        }}>
          <h3 style={{
            fontWeight: 500,
            fontSize: '1.125rem',
            margin: 0,
            color: '#1a1a1a'
          }}>
            What's included
          </h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            aria-hidden="true"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              color: '#1a1a1a'
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {includedItems.map((item, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.75rem',
                alignItems: 'center'
              }}
            >
              <svg 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="check" 
                className="svg-inline--fa fa-check text-safari-green text-sm" 
                role="img" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                style={{
                  width: '0.875rem',
                  height: '0.875rem',
                  color: '#22c55e', // safari-green equivalent
                  flexShrink: 0
                }}
              >
                <path 
                  fill="currentColor" 
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                />
              </svg>
              <h5 style={{
                fontWeight: 300,
                fontSize: '1rem',
                margin: 0,
                color: '#1a1a1a',
                lineHeight: 1.5
              }}>
                {item}
              </h5>
            </div>
          ))}
        </div>
      </div>

      {/* What's excluded */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'center'
        }}>
          <h3 style={{
            fontWeight: 500,
            fontSize: '1.125rem',
            margin: 0,
            color: '#1a1a1a'
          }}>
            What's excluded
          </h3>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            aria-hidden="true"
            data-slot="icon"
            className="w-6 h-6"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              color: '#1a1a1a'
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M5 12h14"
            />
          </svg>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {excludedItems.map((item, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.75rem',
                alignItems: 'center'
              }}
            >
              <svg 
                aria-hidden="true" 
                focusable="false" 
                data-prefix="fas" 
                data-icon="x" 
                className="svg-inline--fa fa-x text-red-600 text-sm" 
                role="img" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 384 512"
                style={{
                  width: '0.875rem',
                  height: '0.875rem',
                  color: '#dc2626', // red-600 equivalent
                  flexShrink: 0
                }}
              >
                <path 
                  fill="currentColor" 
                  d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                />
              </svg>
              <h5 style={{
                fontWeight: 300,
                fontSize: '1rem',
                margin: 0,
                color: '#1a1a1a',
                lineHeight: 1.5
              }}>
                {item}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InclusionsSection;
