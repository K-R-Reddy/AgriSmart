import React, { useState, useEffect } from 'react';
import { Search, MapPin, TrendingUp, TrendingDown, Minus, Leaf, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

interface MarketPrice {
  crop: string;
  variety: string;
  price: number;
  unit: string;
  change: number;
  changePercent: number;
  market: string;
  quality: string;
  lastUpdated: string;
}

interface MarketData {
  location: string;
  date: string;
  prices: MarketPrice[];
  marketInfo: {
    totalMarkets: number;
    activeTraders: number;
    volumeToday: string;
  };
}

const MarketPrices = () => {
  const [location, setLocation] = useState('Delhi, India');
  const [searchLocation, setSearchLocation] = useState('');
  const [cropFilter, setCropFilter] = useState('');
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Real API call for market prices
  const fetchMarketPrices = async (loc: string, crop?: string): Promise<MarketData> => {
    const apiKey = "579b464db66ec23bdd00000188ce137c5b994cd56ff8ddd4f6b192ca";
    let url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${apiKey}&format=json&filters[state]=${encodeURIComponent(loc)}`;
    if (crop && crop.trim()) {
      url += `&filters[commodity]=${encodeURIComponent(crop.trim())}`;
    }
    const response = await fetch(url);
    if (!response.ok) throw new Error("API error");
    const data = await response.json();

    // Map API response to MarketData
    const prices: MarketPrice[] = (data.records || []).map((item: any) => ({
      crop: item.commodity || "-",
      variety: item.variety || "-",
      price: Number(item.modal_price) || 0,
      unit: "₹/quintal",
      change: 0, // API may not provide change; set to 0 or calculate if possible
      changePercent: 0,
      market: item.market || "-",
      quality: item.grade || "-",
      lastUpdated: item.arrival_date || "-"
    }));

    return {
      location: loc,
      date: new Date().toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      prices,
      marketInfo: {
        totalMarkets: prices.length,
        activeTraders: 0, // Not available from API
        volumeToday: '-', // Not available from API
      }
    };
  };

    const handleSearch = async () => {
      const trimmed = searchLocation.trim();
      const cropTrimmed = cropFilter.trim();
      if (!trimmed) {
        toast({
          title: "Location Required",
          description: "Please enter a state name to search market prices",
          variant: "destructive",
        });
        return;
      }

      setLoading(true);
      try {
        const data = await fetchMarketPrices(trimmed, cropTrimmed);
        if (!data.prices.length) {
          toast({
            title: "No Data",
            description: `No market prices found for ${trimmed}${cropTrimmed ? ` and crop ${cropTrimmed}` : ''}`,
            variant: "destructive",
          });
        }
        setMarketData(data);
        setLocation(trimmed);
        toast({
          title: "Market Prices Updated",
          description: `Showing current prices for ${trimmed}${cropTrimmed ? ` and crop ${cropTrimmed}` : ''}`,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch market prices. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const getTrendColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-500';
  };

  // Load default data on component mount
  useEffect(() => {
    const loadDefaultData = async () => {
      setLoading(true);
      try {
        const data = await fetchMarketPrices(location);
        setMarketData(data);
      } catch (error) {
        console.error('Failed to load default market data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDefaultData();
  }, []);

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <ShoppingCart className="h-8 w-8 text-primary" />
            Market Prices
          </h1>
          <p className="text-gray-600">Real-time agricultural commodity prices</p>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Location
                </label>
                <Input
                  type="text"
                  placeholder="Enter state name (e.g. Delhi, Maharashtra)"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full mb-2"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Input
                  type="text"
                  placeholder="Filter by crop (e.g. Wheat, Rice)"
                  value={cropFilter}
                  onChange={(e) => setCropFilter(e.target.value)}
                  className="w-full"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  style={{ marginTop: 8 }}
                />
              </div>
              <Button 
                onClick={handleSearch}
                disabled={loading}
                className="px-6"
              >
                <Search className="h-4 w-4 mr-2" />
                {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Fetching market prices...</p>
          </div>
        ) : marketData ? (
          <>
            {/* Current Location & Market Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium">Location</span>
                  </div>
                  <p className="text-lg font-semibold">{marketData.location}</p>
                  <p className="text-sm text-gray-500">{marketData.date}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                    <span className="font-medium">Active Markets</span>
                  </div>
                  <p className="text-lg font-semibold">{marketData.marketInfo.totalMarkets}</p>
                  <p className="text-sm text-gray-500">{marketData.marketInfo.activeTraders} traders</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium">Volume Today</span>
                  </div>
                  <p className="text-lg font-semibold">{marketData.marketInfo.volumeToday}</p>
                  <p className="text-sm text-gray-500">Total traded</p>
                </CardContent>
              </Card>
            </div>

            {/* Market Prices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Current Market Prices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {marketData.prices.map((price, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{price.crop}</h3>
                            <p className="text-sm text-gray-500">{price.variety}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {price.quality}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-primary">
                            {price.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500">{price.unit}</span>
                        </div>

                        <div className="flex items-center justify-between mb-2">
                          <div className={`flex items-center gap-1 ${getTrendColor(price.change)}`}>
                            {getTrendIcon(price.change)}
                            <span className="text-sm font-medium">
                              {price.change > 0 ? '+' : ''}{price.change} ({price.changePercent > 0 ? '+' : ''}{price.changePercent}%)
                            </span>
                          </div>
                        </div>

                        <div className="border-t pt-2 mt-2">
                          <p className="text-xs text-gray-500 mb-1">{price.market}</p>
                          <p className="text-xs text-gray-400">Updated {price.lastUpdated}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Market Data Available
            </h3>
            <p className="text-gray-500 mb-4">
              Please search for a location to view market prices
            </p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default MarketPrices;