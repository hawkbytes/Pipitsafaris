// Custom React hooks for Pipit Safaris
import { useState, useEffect } from 'react';
import { BookingService } from '../services/api';
import type { Booking } from '../types';

// Hook for managing safari bookings
export const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [error, setError] = useState<string | null>(null);

  const createBooking = async (packageId: string, customerData: any) => {
    setLoading(true);
    setError(null);
    
    try {
      const newBooking = await BookingService.createBooking(packageId, customerData);
      setBooking(newBooking);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  return {
    createBooking,
    loading,
    booking,
    error,
    clearBooking: () => setBooking(null),
    clearError: () => setError(null),
  };
};

// Hook for fetching safari packages
export const useSafariPackages = () => {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPackages = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const safariPackages = await BookingService.getPackages();
      setPackages(safariPackages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load packages');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return {
    packages,
    loading,
    error,
    refetch: fetchPackages,
  };
};

// Hook for local storage management
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
};

// Hook for responsive design
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('desktop');

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint('mobile');
      } else if (width < 1024) {
        setBreakpoint('tablet');
      } else {
        setBreakpoint('desktop');
      }
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  return breakpoint;
};
