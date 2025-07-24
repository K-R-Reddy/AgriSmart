export interface MarketPrice {
  id: string;
  cropName: string;
  variety: string;
  location: string;
  state: string;
  market: string;
  currentPrice: number;
  previousPrice: number;
  priceChange: number;
  unit: string;
  quality: 'Premium' | 'Good' | 'Average';
  lastUpdated: string;
  trend: 'up' | 'down' | 'stable';
  demandLevel: 'High' | 'Medium' | 'Low';
  supply: 'High' | 'Medium' | 'Low';
  category: string;
}

export const marketPricesData: MarketPrice[] = [
  {
    id: '1',
    cropName: 'Wheat',
    variety: 'HD-2967',
    location: 'Delhi',
    state: 'Delhi',
    market: 'Azadpur Mandi',
    currentPrice: 2450,
    previousPrice: 2400,
    priceChange: 2.08,
    unit: 'per quintal',
    quality: 'Good',
    lastUpdated: '2 hours ago',
    trend: 'up',
    demandLevel: 'High',
    supply: 'Medium',
    category: 'Cereal'
  },
  {
    id: '2',
    cropName: 'Rice',
    variety: 'Basmati 1121',
    location: 'Amritsar',
    state: 'Punjab',
    market: 'Grain Market',
    currentPrice: 4200,
    previousPrice: 4150,
    priceChange: 1.20,
    unit: 'per quintal',
    quality: 'Premium',
    lastUpdated: '1 hour ago',
    trend: 'up',
    demandLevel: 'High',
    supply: 'Low',
    category: 'Cereal'
  },
  {
    id: '3',
    cropName: 'Tomato',
    variety: 'Hybrid',
    location: 'Bangalore',
    state: 'Karnataka',
    market: 'KR Market',
    currentPrice: 3200,
    previousPrice: 3500,
    priceChange: -8.57,
    unit: 'per quintal',
    quality: 'Good',
    lastUpdated: '30 minutes ago',
    trend: 'down',
    demandLevel: 'Medium',
    supply: 'High',
    category: 'Vegetable'
  },
  {
    id: '4',
    cropName: 'Onion',
    variety: 'Red',
    location: 'Nashik',
    state: 'Maharashtra',
    market: 'APMC',
    currentPrice: 1800,
    previousPrice: 1750,
    priceChange: 2.86,
    unit: 'per quintal',
    quality: 'Good',
    lastUpdated: '1 hour ago',
    trend: 'up',
    demandLevel: 'High',
    supply: 'Medium',
    category: 'Vegetable'
  },
  {
    id: '5',
    cropName: 'Cotton',
    variety: 'Bt Cotton',
    location: 'Ahmedabad',
    state: 'Gujarat',
    market: 'Cotton Exchange',
    currentPrice: 6800,
    previousPrice: 6750,
    priceChange: 0.74,
    unit: 'per quintal',
    quality: 'Premium',
    lastUpdated: '3 hours ago',
    trend: 'up',
    demandLevel: 'High',
    supply: 'Low',
    category: 'Cash Crop'
  },
  {
    id: '6',
    cropName: 'Sugarcane',
    variety: 'Co-86032',
    location: 'Lucknow',
    state: 'Uttar Pradesh',
    market: 'Sugar Mill',
    currentPrice: 380,
    previousPrice: 375,
    priceChange: 1.33,
    unit: 'per quintal',
    quality: 'Good',
    lastUpdated: '4 hours ago',
    trend: 'up',
    demandLevel: 'Medium',
    supply: 'High',
    category: 'Cash Crop'
  },
  {
    id: '7',
    cropName: 'Maize',
    variety: 'Yellow',
    location: 'Hyderabad',
    state: 'Telangana',
    market: 'Grain Market',
    currentPrice: 2100,
    previousPrice: 2080,
    priceChange: 0.96,
    unit: 'per quintal',
    quality: 'Good',
    lastUpdated: '2 hours ago',
    trend: 'up',
    demandLevel: 'Medium',
    supply: 'Medium',
    category: 'Cereal'
  },
  {
    id: '8',
    cropName: 'Soybean',
    variety: 'JS-335',
    location: 'Indore',
    state: 'Madhya Pradesh',
    market: 'APMC',
    currentPrice: 4800,
    previousPrice: 4850,
    priceChange: -1.03,
    unit: 'per quintal',
    quality: 'Good',
    lastUpdated: '1 hour ago',
    trend: 'down',
    demandLevel: 'Medium',
    supply: 'Medium',
    category: 'Oilseed'
  },
  {
    id: '9',
    cropName: 'Potato',
    variety: 'Kufri Jyoti',
    location: 'Agra',
    state: 'Uttar Pradesh',
    market: 'Vegetable Market',
    currentPrice: 1200,
    previousPrice: 1150,
    priceChange: 4.35,
    unit: 'per quintal',
    quality: 'Good',
    lastUpdated: '1 hour ago',
    trend: 'up',
    demandLevel: 'High',
    supply: 'Low',
    category: 'Vegetable'
  },
  {
    id: '10',
    cropName: 'Chickpea',
    variety: 'Kabuli',
    location: 'Jaipur',
    state: 'Rajasthan',
    market: 'Grain Market',
    currentPrice: 5200,
    previousPrice: 5180,
    priceChange: 0.39,
    unit: 'per quintal',
    quality: 'Premium',
    lastUpdated: '2 hours ago',
    trend: 'stable',
    demandLevel: 'High',
    supply: 'Low',
    category: 'Pulse'
  },
  {
    id: '11',
    cropName: 'Groundnut',
    variety: 'Bold',
    location: 'Rajkot',
    state: 'Gujarat',
    market: 'Oil Mill',
    currentPrice: 5400,
    previousPrice: 5350,
    priceChange: 0.93,
    unit: 'per quintal',
    quality: 'Premium',
    lastUpdated: '3 hours ago',
    trend: 'up',
    demandLevel: 'High',
    supply: 'Medium',
    category: 'Oilseed'
  },
  {
    id: '12',
    cropName: 'Mustard',
    variety: 'Varuna',
    location: 'Bharatpur',
    state: 'Rajasthan',
    market: 'APMC',
    currentPrice: 4900,
    previousPrice: 4920,
    priceChange: -0.41,
    unit: 'per quintal',
    quality: 'Good',
    lastUpdated: '2 hours ago',
    trend: 'down',
    demandLevel: 'Medium',
    supply: 'Medium',
    category: 'Oilseed'
  }
];

export const cropCategories = ['All', 'Cereal', 'Vegetable', 'Cash Crop', 'Oilseed', 'Pulse'];
export const qualityLevels = ['All', 'Premium', 'Good', 'Average'];
export const trends = ['All', 'up', 'down', 'stable'];
export const demandLevels = ['All', 'High', 'Medium', 'Low'];

export const generateRandomPriceUpdate = (price: MarketPrice): MarketPrice => {
  const change = (Math.random() - 0.5) * 100; // Random change between -50 to +50
  const newPrice = Math.max(price.currentPrice + change, 100); // Minimum price of 100
  const priceChange = ((newPrice - price.currentPrice) / price.currentPrice) * 100;
  
  return {
    ...price,
    previousPrice: price.currentPrice,
    currentPrice: Math.round(newPrice),
    priceChange: Math.round(priceChange * 100) / 100,
    trend: priceChange > 1 ? 'up' : priceChange < -1 ? 'down' : 'stable',
    lastUpdated: 'Just now'
  };
};