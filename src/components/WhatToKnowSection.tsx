import React, { useState } from 'react';

interface WhatToKnowSectionProps {
  // Props can be extended for future customization
}

const WhatToKnowSection: React.FC<WhatToKnowSectionProps> = () => {
  const [isPackingModalOpen, setIsPackingModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'safari' | 'kilimanjaro'>('safari');
  const infoCards = [
    {
      id: 1,
      title: "Packing list",
      description: "A full list of what you will need to ensure a comfortable trip.",
      image: "https://static.cloudsafaris.com/public/PackingList.png?action=get",
      alt: "Cartoon safari animal"
    },
    {
      id: 2,
      title: "Booking policy", 
      description: "Learn about our payment terms, cancellation and refund policy.",
      image: "https://static.cloudsafaris.com/public/BookingPolicy.png?action=get",
      alt: "Cartoon safari animal"
    }
  ];

  const openPackingModal = () => {
    setIsPackingModalOpen(true);
  };

  const closePackingModal = () => {
    setIsPackingModalOpen(false);
  };

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const safariPackingItems = [
    {
      icon: "M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM183 278.8c-27.9-13.2-48.4-39.4-53.7-70.8l39.1 0c1.6 30.4 7.7 53.8 14.6 70.8zm41.3 9.2l-.3 0-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5l47.1 0c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5zm40.7-9.2c6.8-17.1 12.9-40.4 14.6-70.8l39.1 0c-5.3 31.4-25.8 57.6-53.7 70.8zM279.6 176c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8l-39.1 0zM223.7 96l.3 0 .3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5l-47.1 0c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5zM183 105.2c-6.8 17.1-12.9 40.4-14.6 70.8l-39.1 0c5.3-31.4 25.8-57.6 53.7-70.8zM352 192A128 128 0 1 0 96 192a128 128 0 1 0 256 0zM112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0z",
      title: "Essentials",
      description: "Critical items needed for travel and health."
    },
    {
      icon: "M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z",
      title: "Clothes",
      description: "Light and breathable clothing suitable for safari conditions."
    },
    {
      icon: "M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z",
      title: "Toiletries",
      description: "Essential personal care items."
    },
    {
      icon: "M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z",
      title: "Technology",
      description: "Electronic devices and accessories."
    }
  ];

  const kilimanjaroPackingItems = [
    {
      icon: "M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM183 278.8c-27.9-13.2-48.4-39.4-53.7-70.8l39.1 0c1.6 30.4 7.7 53.8 14.6 70.8zm41.3 9.2l-.3 0-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5l47.1 0c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5zm40.7-9.2c6.8-17.1 12.9-40.4 14.6-70.8l39.1 0c-5.3 31.4-25.8 57.6-53.7 70.8zM279.6 176c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8l-39.1 0zM223.7 96l.3 0 .3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5l-47.1 0c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7 13 9.1-16.5zM183 105.2c-6.8 17.1-12.9 40.4-14.6 70.8l-39.1 0c5.3-31.4 25.8-57.6 53.7-70.8zM352 192A128 128 0 1 0 96 192a128 128 0 1 0 256 0zM112 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0z",
      title: "Essentials",
      description: "Critical items needed for high-altitude climbing."
    },
    {
      icon: "M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208l30.9 0 0-24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 55.8c0 .1 0 .2 0 .2s0 .2 0 .2L384 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-216-39.4 0c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59l4.2 0c15.6 0 27.1 14.7 23.3 29.8z",
      title: "Clothes",
      description: "Adaptive and thermal clothing for varying altitudes."
    },
    {
      icon: "M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5l0 6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5l0-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z",
      title: "Toiletries",
      description: "Essential personal care items for high-altitude conditions."
    },
    {
      icon: "M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z",
      title: "Technology",
      description: "Electronic devices and accessories."
    }
  ];

  const currentPackingItems = activeTab === 'safari' ? safariPackingItems : kilimanjaroPackingItems;

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 500,
          color: '#1a1a1a'
        }}>
          What to know
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {infoCards.map((card) => (
            <div
              key={card.id}
              onClick={card.title === "Packing list" ? openPackingModal : card.title === "Booking policy" ? openBookingModal : undefined}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fafafa',
                backgroundColor: 'white',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                target.style.transform = 'scale(1.01)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget as HTMLElement;
                target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                target.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                minHeight: '4rem',
                maxWidth: '4rem',
                position: 'relative'
              }}>
                <img
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain'
                  }}
                  src={card.image}
                  alt={card.alt}
                />
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem'
              }}>
                <div style={{
                  fontWeight: 500,
                  color: '#171717',
                  fontSize: '1rem'
                }}>
                  {card.title}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#737373',
                  lineHeight: 1.4
                }}>
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packing List Modal */}
      {isPackingModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            position: 'relative',
            transform: 'none',
            overflow: 'hidden',
            borderRadius: '1.5rem',
            backgroundColor: 'white',
            padding: '1rem 2rem 1rem 1rem',
            textAlign: 'left',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'all',
            width: 'fit-content',
            maxWidth: '90%',
            height: 'auto',
            maxHeight: '90%'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              padding: '0.5rem',
              width: 'fit-content'
            }}>
              {/* Modal Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  margin: 0
                }}>
                  Packing List
                </h2>
                <svg
                  onClick={closePackingModal}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="xmark"
                  style={{
                    cursor: 'pointer',
                    backgroundColor: '#fafafa',
                    padding: '0.5rem',
                    height: '1rem',
                    width: '1rem',
                    borderRadius: '50%'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as unknown as HTMLElement).style.backgroundColor = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as unknown as HTMLElement).style.backgroundColor = '#fafafa';
                  }}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  />
                </svg>
              </div>

              {/* Tab Buttons */}
              <div style={{
                display: 'flex',
                gap: '0.75rem'
              }}>
                <button
                  onClick={() => setActiveTab('safari')}
                  style={{
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 500,
                    padding: '0.5rem 1rem',
                    borderRadius: '1.5rem',
                    backgroundColor: activeTab === 'safari' ? '#171717' : 'white',
                    color: activeTab === 'safari' ? 'white' : '#171717',
                    border: activeTab === 'safari' ? 'none' : '1px solid #171717',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="paw"
                    style={{
                      marginRight: '0.5rem',
                      width: '1rem',
                      height: '1rem'
                    }}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                    />
                  </svg>
                  Safari
                </button>
                <button
                  onClick={() => setActiveTab('kilimanjaro')}
                  style={{
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 500,
                    padding: '0.5rem 1rem',
                    borderRadius: '1.5rem',
                    backgroundColor: activeTab === 'kilimanjaro' ? '#171717' : 'white',
                    color: activeTab === 'kilimanjaro' ? 'white' : '#171717',
                    border: activeTab === 'kilimanjaro' ? 'none' : '1px solid #171717',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== 'kilimanjaro') {
                      (e.currentTarget as HTMLElement).style.backgroundColor = '#fafafa';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== 'kilimanjaro') {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'white';
                    }
                  }}
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="mountain"
                    style={{
                      marginRight: '0.5rem',
                      width: '1rem',
                      height: '1rem'
                    }}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M256 32c12.5 0 24.1 6.4 30.8 17L503.4 394.4c5.6 8.9 8.6 19.2 8.6 29.7c0 30.9-25 55.9-55.9 55.9L55.9 480C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17zm65 192L256 120.4 176.9 246.5l18.3 24.4c6.4 8.5 19.2 8.5 25.6 0l25.6-34.1c6-8.1 15.5-12.8 25.6-12.8l49 0z"
                    />
                  </svg>
                  Kilimanjaro
                </button>
              </div>

              {/* Packing Items Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}>
                {currentPackingItems.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '1.5rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #e5e5e5',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      style={{
                        fontSize: '1.5rem',
                        marginBottom: '0.5rem',
                        width: '1.5rem',
                        height: '1.5rem'
                      }}
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path fill="currentColor" d={item.icon} />
                    </svg>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: 500,
                      margin: '0 0 0.25rem 0'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      color: '#737373',
                      fontWeight: 300,
                      margin: 0,
                      fontSize: '0.875rem',
                      lineHeight: 1.4
                    }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Policy Modal */}
      {isBookingModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            position: 'relative',
            transform: 'none',
            overflow: 'hidden',
            borderRadius: '1.5rem',
            backgroundColor: 'white',
            padding: '1.25rem 1rem 1rem 1rem',
            textAlign: 'left',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'all',
            width: 'fit-content',
            maxWidth: '90%',
            minWidth: '330px',
            height: 'auto',
            maxHeight: '90%'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '0.5rem',
              width: '100%',
              maxWidth: '112rem',
              minWidth: '330px'
            }}>
              {/* Modal Header */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  margin: 0
                }}>
                  Booking policy
                </h2>
                <div style={{
                  backgroundColor: 'transparent',
                  borderRadius: '50%',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  height: '1.5rem',
                  width: '1.5rem',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#fafafa';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
                >
                  <svg
                    onClick={closeBookingModal}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="xmark"
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '1rem',
                      height: '1rem'
                    }}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                    />
                  </svg>
                </div>
              </div>

              {/* Header Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '7rem',
                marginBottom: '1rem'
              }}>
                <img
                  src="https://static.cloudsafaris.com/public/BookingPolicy.png?action=get"
                  alt="booking policy"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    objectFit: 'contain',
                    borderRadius: '1rem',
                    backgroundColor: '#fef2f2'
                  }}
                />
              </div>

              {/* Disclaimer Text */}
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                color: '#737373',
                marginBottom: '1.5rem'
              }}>
                *Full refund (minus credit card fees of 3.0% + $0.30 if paid by credit card)
              </div>

              {/* Deposit Terms Section */}
              <div style={{
                margin: '1.5rem 0'
              }}>
                <h3 style={{
                  fontWeight: 500,
                  fontSize: '1.5rem',
                  marginTop: '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  Deposit terms
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontSize: '0.875rem'
                }}>
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      margin: '0 0 0.25rem 0'
                    }}>
                      Initial deposit
                    </h4>
                    <div style={{
                      color: '#374151'
                    }}>
                      30% deposit for booking
                    </div>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      margin: '0 0 0.25rem 0'
                    }}>
                      Remaining deposit
                    </h4>
                    <div style={{
                      color: '#374151'
                    }}>
                      Full balance due 60 days before trip start
                    </div>
                    <div style={{
                      color: '#374151',
                      marginBottom: '0.25rem'
                    }}>
                      - or -
                    </div>
                    <div style={{
                      color: '#374151'
                    }}>
                      Full payment required for bookings made within 60 days of the trip
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancellation & Refund Section */}
              <div style={{
                margin: '1.5rem 0'
              }}>
                <h3 style={{
                  fontWeight: 500,
                  fontSize: '1.5rem',
                  marginTop: '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  Cancellation & Refund
                </h3>
                <div style={{
                  fontSize: '0.875rem'
                }}>
                  <div style={{
                    marginBottom: '0.5rem',
                    color: '#374151'
                  }}>
                    If the tour is cancelled due to a certain season or other reasons:
                  </div>
                  <ul style={{
                    paddingLeft: '1.25rem',
                    margin: '0',
                    color: '#374151'
                  }}>
                    <li style={{ marginBottom: '0.25rem' }}>100% refund if cancelled 60+ days before trip</li>
                    <li style={{ marginBottom: '0.25rem' }}>50% refund if cancelled 30-59 days before trip</li>
                    <li style={{ marginBottom: '0.25rem' }}>25% refund if cancelled 7-29 days before trip</li>
                    <li style={{ marginBottom: '0.25rem' }}>No refund if cancelled within 7 days of trip</li>
                  </ul>
                </div>
              </div>

              {/* Terms Link */}
              <div style={{
                borderTop: '1px solid #fafafa',
                paddingTop: '1.5rem',
                paddingBottom: '0.75rem'
              }}>
                <a
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'underline',
                    color: '#1a1a1a',
                    cursor: 'pointer'
                  }}
                  target="_blank"
                  href="/terms"
                >
                  Read more about our Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatToKnowSection;
