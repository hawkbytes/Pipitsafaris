// API service functions for Pipit Safaris
// This file will contain functions to interact with the booking and safari APIs

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.pipitsafaris.com/v1';

export class APIService {
  static async get(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }

  static async post(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }
}

// Booking Service functions (to be implemented)
export class BookingService {
  static async createBooking(packageId: string, customerData: any) {
    // This will integrate with booking APIs when backend is ready
    return {
      id: Date.now().toString(),
      customerId: 'customer-' + Date.now(),
      packageId: packageId,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days later
      groupSize: customerData.groupSize || 2,
      totalPrice: 2500, // Mock price
      status: 'pending' as const,
      specialRequests: customerData.specialRequests || '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  static async getPackages() {
    // Mock safari packages
    return [
      {
        id: 'serengeti-luxury',
        name: 'Luxury Serengeti Safari',
        description: 'Experience the Great Migration in luxury',
        duration: 7,
        price: 3500,
      },
    ];
  }
}

export default APIService;
