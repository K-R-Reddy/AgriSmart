export interface SoilType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  suitableFor: string[];
}

export interface ClimateZone {
  id: string;
  name: string;
  description: string;
  temperature: { min: number; max: number };
  rainfall: { min: number; max: number };
}

export interface Location {
  id: string;
  name: string;
  state: string;
  region: string;
  latitude: number;
  longitude: number;
  soilTypes: string[];
  climateZone: string;
  averageRainfall: number;
  averageTemp: { min: number; max: number };
}

export const soilTypes: SoilType[] = [
  {
    id: 'loamy',
    name: 'Loamy Soil',
    description: 'Well-balanced mixture of sand, silt, and clay with good drainage and fertility.',
    characteristics: ['Good drainage', 'High fertility', 'Easy to work with', 'Good water retention'],
    suitableFor: ['Most crops', 'Cereals', 'Vegetables', 'Fruits']
  },
  {
    id: 'clay',
    name: 'Clay Soil',
    description: 'Fine-textured soil with excellent water retention but poor drainage.',
    characteristics: ['High water retention', 'Rich in nutrients', 'Poor drainage', 'Heavy texture'],
    suitableFor: ['Rice', 'Wheat', 'Sugarcane', 'Cotton']
  },
  {
    id: 'sandy',
    name: 'Sandy Soil',
    description: 'Light, well-draining soil with large particles and low water retention.',
    characteristics: ['Excellent drainage', 'Easy to work', 'Low water retention', 'Quick warming'],
    suitableFor: ['Groundnut', 'Watermelon', 'Carrots', 'Root vegetables']
  },
  {
    id: 'sandy-loam',
    name: 'Sandy Loam',
    description: 'Ideal agricultural soil with good drainage and moderate water retention.',
    characteristics: ['Good drainage', 'Moderate fertility', 'Easy cultivation', 'Good aeration'],
    suitableFor: ['Vegetables', 'Fruits', 'Cereals', 'Cash crops']
  },
  {
    id: 'clay-loam',
    name: 'Clay Loam',
    description: 'Fertile soil with good structure and moderate drainage.',
    characteristics: ['Good structure', 'High fertility', 'Moderate drainage', 'Good nutrient retention'],
    suitableFor: ['Wheat', 'Maize', 'Sugarcane', 'Vegetables']
  },
  {
    id: 'black-soil',
    name: 'Black Soil',
    description: 'Dark, fertile soil rich in clay and organic matter, ideal for cotton.',
    characteristics: ['High clay content', 'Rich in nutrients', 'Good water retention', 'Self-mulching'],
    suitableFor: ['Cotton', 'Soybean', 'Wheat', 'Sugarcane']
  },
  {
    id: 'red-soil',
    name: 'Red Soil',
    description: 'Iron-rich soil with good drainage, suitable for various crops.',
    characteristics: ['Iron-rich', 'Good drainage', 'Moderate fertility', 'Acidic nature'],
    suitableFor: ['Cotton', 'Groundnut', 'Millets', 'Pulses']
  },
  {
    id: 'alluvial',
    name: 'Alluvial Soil',
    description: 'Highly fertile soil deposited by rivers, excellent for agriculture.',
    characteristics: ['Highly fertile', 'Rich in nutrients', 'Good water retention', 'Easy to cultivate'],
    suitableFor: ['Rice', 'Wheat', 'Sugarcane', 'Cotton']
  }
];

export const climateZones: ClimateZone[] = [
  {
    id: 'tropical',
    name: 'Tropical',
    description: 'Hot and humid climate with high temperatures and heavy rainfall.',
    temperature: { min: 20, max: 35 },
    rainfall: { min: 1000, max: 3000 }
  },
  {
    id: 'sub-tropical',
    name: 'Sub-tropical',
    description: 'Moderate climate with warm summers and mild winters.',
    temperature: { min: 15, max: 35 },
    rainfall: { min: 600, max: 1500 }
  },
  {
    id: 'temperate',
    name: 'Temperate',
    description: 'Cool climate with distinct seasons and moderate rainfall.',
    temperature: { min: 5, max: 30 },
    rainfall: { min: 400, max: 1200 }
  },
  {
    id: 'semi-arid',
    name: 'Semi-Arid',
    description: 'Dry climate with low rainfall and high temperature variations.',
    temperature: { min: 10, max: 40 },
    rainfall: { min: 200, max: 750 }
  },
  {
    id: 'arid',
    name: 'Arid',
    description: 'Very dry climate with minimal rainfall and extreme temperatures.',
    temperature: { min: 5, max: 45 },
    rainfall: { min: 50, max: 300 }
  }
];

export const locations: Location[] = [
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    region: 'Western India',
    latitude: 19.0760,
    longitude: 72.8777,
    soilTypes: ['loamy', 'clay-loam', 'red-soil'],
    climateZone: 'tropical',
    averageRainfall: 2400,
    averageTemp: { min: 19, max: 32 }
  },
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    region: 'Northern India',
    latitude: 28.7041,
    longitude: 77.1025,
    soilTypes: ['alluvial', 'loamy', 'sandy-loam'],
    climateZone: 'semi-arid',
    averageRainfall: 650,
    averageTemp: { min: 6, max: 40 }
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    region: 'Southern India',
    latitude: 12.9716,
    longitude: 77.5946,
    soilTypes: ['red-soil', 'loamy', 'clay-loam'],
    climateZone: 'sub-tropical',
    averageRainfall: 900,
    averageTemp: { min: 15, max: 28 }
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    region: 'Eastern India',
    latitude: 22.5726,
    longitude: 88.3639,
    soilTypes: ['alluvial', 'clay', 'loamy'],
    climateZone: 'tropical',
    averageRainfall: 1600,
    averageTemp: { min: 13, max: 34 }
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    region: 'Southern India',
    latitude: 13.0827,
    longitude: 80.2707,
    soilTypes: ['red-soil', 'sandy-loam', 'clay-loam'],
    climateZone: 'tropical',
    averageRainfall: 1200,
    averageTemp: { min: 20, max: 35 }
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    region: 'Western India',
    latitude: 18.5204,
    longitude: 73.8567,
    soilTypes: ['black-soil', 'red-soil', 'loamy'],
    climateZone: 'semi-arid',
    averageRainfall: 650,
    averageTemp: { min: 12, max: 32 }
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    region: 'Southern India',
    latitude: 17.3850,
    longitude: 78.4867,
    soilTypes: ['red-soil', 'black-soil', 'sandy-loam'],
    climateZone: 'semi-arid',
    averageRainfall: 800,
    averageTemp: { min: 15, max: 35 }
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    region: 'Western India',
    latitude: 23.0225,
    longitude: 72.5714,
    soilTypes: ['black-soil', 'sandy-loam', 'alluvial'],
    climateZone: 'semi-arid',
    averageRainfall: 500,
    averageTemp: { min: 12, max: 38 }
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    region: 'Northern India',
    latitude: 26.8467,
    longitude: 80.9462,
    soilTypes: ['alluvial', 'loamy', 'clay-loam'],
    climateZone: 'sub-tropical',
    averageRainfall: 1000,
    averageTemp: { min: 8, max: 35 }
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    region: 'Northern India',
    latitude: 26.9124,
    longitude: 75.7873,
    soilTypes: ['sandy', 'sandy-loam', 'red-soil'],
    climateZone: 'semi-arid',
    averageRainfall: 400,
    averageTemp: { min: 8, max: 40 }
  }
];

export const states = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry'
];

export const regions = [
  'All Regions',
  'Northern India',
  'Southern India',
  'Eastern India',
  'Western India',
  'Central India'
];