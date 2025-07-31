import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './DayByDay.css';

interface DayData {
  day: number;
  date: string;
  title: string;
  description: string;
  hotel?: {
    name: string;
    type: string;
    category: string;
    image: string;
    meals?: string;
  };
  note?: string;
}

interface DayByDayProps {
  itineraryDays: DayData[];
}

const DayByDay: React.FC<DayByDayProps> = ({ itineraryDays }) => {
  const [selectedDay, setSelectedDay] = useState(1);

  const selectedDayData = itineraryDays.find(day => day.day === selectedDay);

  return (
    <div className="day-by-day-section">
      <h2 className="day-by-day-title">Day by day</h2>
      
      {/* Day Selector */}
      <div className="day-selector">
        {Array.from({length: 7}, (_, i) => i + 1).map(day => (
          <button
            key={day}
            className={`day-button ${selectedDay === day ? 'day-button-active' : 'day-button-inactive'}`}
            onClick={() => setSelectedDay(day)}
          >
            Day {day}
          </button>
        ))}
      </div>

      {/* Selected Day Content */}
      {selectedDayData && (
        <div className="day-content">
          <div className="day-header">
            <h3 className="day-title">{selectedDayData.title}</h3>
            <p className="day-description">{selectedDayData.description}</p>
          </div>

          {/* Map Container */}
          <div className="map-container">
            <div className="map-wrapper">
              <div className="map-placeholder">
                {/* This would be replaced with actual Google Maps integration */}
                <div className="map-content">
                  <div className="map-marker">
                    <img 
                      src="https://static.cloudsafaris.com/public/OrgElps.png?action=get" 
                      alt="Map marker" 
                      className="marker-icon"
                    />
                    <div className="marker-label">S/E</div>
                  </div>
                  <div className="map-controls">
                    <div className="zoom-controls">
                      <button className="zoom-btn zoom-in" aria-label="Zoom in">+</button>
                      <div className="zoom-divider"></div>
                      <button className="zoom-btn zoom-out" aria-label="Zoom out">-</button>
                    </div>
                    <button className="fullscreen-btn" aria-label="Toggle fullscreen">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="#666">
                        <path d="M0 0v6h2V2h4V0H0zm16 0h-4v2h4v4h2V0h-2zm0 16h-4v2h6v-6h-2v4zM2 12H0v6h6v-2H2v-4z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="map-attribution">
                    <div className="google-logo">
                      <img 
                        src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 69 29'%3E%3Cg opacity='.6' fill='%23fff' stroke='%23fff' stroke-width='1.5'%3E%3Cpath d='M17.4706 7.33616L18.0118 6.79504 17.4599 6.26493C16.0963 4.95519 14.2582 3.94522 11.7008 3.94522c-4.613699999999999 0-8.50262 3.7551699999999997-8.50262 8.395779999999998C3.19818 16.9817 7.0871 20.7368 11.7008 20.7368 14.1712 20.7368 16.0773 19.918 17.574 18.3689 19.1435 16.796 19.5956 14.6326 19.5956 12.957 19.5956 12.4338 19.5516 11.9316 19.4661 11.5041L19.3455 10.9012H10.9508V14.4954H15.7809C15.6085 15.092 15.3488 15.524 15.0318 15.8415 14.403 16.4629 13.4495 17.1509 11.7008 17.1509 9.04835 17.1509 6.96482 15.0197 6.96482 12.341 6.96482 9.66239 9.04835 7.53119 11.7008 7.53119 13.137 7.53119 14.176 8.09189 14.9578 8.82348L15.4876 9.31922 16.0006 8.80619 17.4706 7.33616z'/%3E%3C/g%3E%3C/svg%3E" 
                        alt="Google" 
                        width="66" 
                        height="26"
                      />
                    </div>
                    <div className="map-terms">
                      <span>Map data ©2025 Google</span>
                      <a href="https://www.google.com/intl/en-US_US/help/terms_maps.html" target="_blank" rel="noopener">Terms</a>
                      <a href="#" target="_blank" rel="noopener">Report a map error</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Information */}
          {selectedDayData.hotel && (
            <Card className="hotel-card">
              <Card.Body className="hotel-card-body">
                <div className="hotel-content">
                  <div className="hotel-image-wrapper">
                    <img 
                      src={selectedDayData.hotel.image} 
                      alt={selectedDayData.hotel.name} 
                      className="hotel-image"
                    />
                  </div>
                  <div className="hotel-details">
                    <div className="hotel-category">{selectedDayData.hotel.type.toUpperCase()}</div>
                    <h4 className="hotel-name">{selectedDayData.hotel.name}</h4>
                    <div className="hotel-meta">
                      <span>{selectedDayData.hotel.type}</span>
                      <div className="meta-dot"></div>
                      <span>{selectedDayData.hotel.category}</span>
                    </div>
                    {selectedDayData.hotel.meals && (
                      <p className="hotel-meals">{selectedDayData.hotel.meals}</p>
                    )}
                    <a href="#" className="view-hotel-link">
                      <span>View hotel</span>
                      <svg width="16" height="16" viewBox="0 0 320 512" fill="currentColor">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          )}

          {/* Day Note */}
          {selectedDayData.note && (
            <div className="day-note">
              <div className="note-header">
                <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                </svg>
                <span className="note-title">Note</span>
              </div>
              <p className="note-text">{selectedDayData.note}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DayByDay;
