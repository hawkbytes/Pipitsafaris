// TypeScript type definitions for Pipit Safaris
// This file contains interfaces and types for the safari tourism application

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  preferences: CustomerPreferences;
  bookingHistory: Booking[];
}

export interface CustomerPreferences {
  accommodationType: 'luxury' | 'standard' | 'budget';
  groupSize: number;
  activities: SafariActivity[];
  dietaryRequirements: string[];
  mobilityNeeds: string[];
}

export interface SafariPackage {
  id: string;
  name: string;
  description: string;
  duration: number; // days
  maxGroupSize: number;
  price: number;
  destinations: Destination[];
  activities: SafariActivity[];
  accommodations: Accommodation[];
  images: string[];
  difficulty: 'easy' | 'moderate' | 'challenging';
  bestSeason: string[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  description: string;
  wildlife: string[];
  bestTimeToVisit: string[];
  activities: SafariActivity[];
}

export interface SafariActivity {
  id: string;
  name: string;
  type: 'game_drive' | 'walking_safari' | 'boat_safari' | 'cultural_visit' | 'photography' | 'birdwatching';
  duration: number; // hours
  difficulty: 'easy' | 'moderate' | 'challenging';
  equipment: string[];
  description: string;
}

export interface Accommodation {
  id: string;
  name: string;
  type: 'lodge' | 'tented_camp' | 'mobile_camp' | 'hotel';
  rating: number;
  amenities: string[];
  description: string;
  images: string[];
  pricePerNight: number;
  maxOccupancy: number;
}

export interface Booking {
  id: string;
  customerId: string;
  packageId: string;
  startDate: Date;
  endDate: Date;
  groupSize: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  specialRequests: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WeatherInfo {
  destination: string;
  date: Date;
  temperature: {
    min: number;
    max: number;
  };
  humidity: number;
  rainfall: number;
  conditions: string;
}

export interface SafariConfig {
  apiUrl: string;
  version: string;
  supportedCurrencies: string[];
  maxBookingAdvance: number; // days
  minBookingAdvance: number; // days
  cancellationPolicy: string;
}

// More types will be added as the application grows
