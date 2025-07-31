import React from 'react';

interface Hotel {
  name: string;
  type: string;
  category: string;
  image: string;
  meals?: string;
}

interface DestinationsTabProps {
  title: string;
  hotel?: Hotel;
}

const DestinationsTab: React.FC<DestinationsTabProps> = ({ title, hotel }) => {
  const getDestinationName = () => {
    if (hotel) return hotel.name;
    if (title.includes('Mandara')) return 'Mandara Hut';
    if (title.includes('Horombo')) return 'Horombo Huts';
    if (title.includes('Kibo')) return 'Kibo Huts';
    if (title.includes('Uhuru')) return 'Uhuru Peak';
    if (title.includes('Marangu Gate')) return 'Marangu Gate';
    return 'Destination';
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem',
      paddingBottom: '1.5rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        marginBottom: '0'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'radial-gradient(circle, #f5f5f5 0%, #e5e5e5 100%)',
              borderRadius: '50%',
              height: '1.5rem',
              width: '1.5rem'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '50%',
                height: '0.75rem',
                width: '0.75rem',
                border: '1px solid #e5e5e5'
              }} />
            </div>
            <div style={{
              height: '2.5rem',
              width: '50%',
              borderRight: '1px solid #e5e5e5',
              marginLeft: '0.03125rem'
            }} />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}>
            <div style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.025em',
              color: '#6b7280',
              marginBottom: '0.25rem'
            }}>
              START
            </div>
            <h5 style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: '#1a1a1a',
              margin: 0,
              lineHeight: 1.4
            }}>
              Pick-up Location
            </h5>
          </div>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        marginBottom: '0'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'radial-gradient(circle, #f5f5f5 0%, #e5e5e5 100%)',
              borderRadius: '50%',
              height: '1.5rem',
              width: '1.5rem'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '50%',
                height: '0.75rem',
                width: '0.75rem',
                border: '1px solid #e5e5e5'
              }} />
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}>
            <div style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.025em',
              color: '#6b7280',
              marginBottom: '0.25rem'
            }}>
              END
            </div>
            <h5 style={{
              fontSize: '0.875rem',
              fontWeight: 400,
              color: '#1a1a1a',
              margin: 0,
              lineHeight: 1.4
            }}>
              {getDestinationName()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsTab;
