import React, { useState, useEffect } from 'react';
import { Search, MapPin, Thermometer, Droplets, Wind, Eye, Sunrise, Sunset, Clock, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

interface WeatherDay {
  date: string;
  temp_max: number;
  temp_min: number;
  precipitation: number;
}

const Weather = () => {
  const [weatherDays, setWeatherDays] = useState<WeatherDay[]>([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [input, setInput] = useState("");
  const [placeName, setPlaceName] = useState<string | null>(null);
  const { toast } = useToast();

  // Helper to get weather icon based on temp and rain
  function getWeatherIcon(day: WeatherDay) {
    if (day.precipitation > 5) return '🌧️'; // heavy rain
    if (day.precipitation > 0) return '🌦️'; // light rain
    if (day.temp_max >= 32) return '☀️'; // hot/sunny
    if (day.temp_max >= 25) return '⛅'; // sun with cloud
    return '☁️'; // cloudy
  }

  // Fetch weather for any location using geocoding
  const fetchWeatherData = async (loc: string) => {
    setLoading(true);
    setWeatherDays([]);
    setPlaceName(null);
    try {
      // Step 1: Get lat/lon from location
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(loc)}&count=1`);
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0) throw new Error("Location not found");
      const { latitude, longitude, name, admin1, country } = geoData.results[0];
      setPlaceName([name, admin1, country].filter(Boolean).join(", "));

      // Step 2: Fetch weather data
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`
      );
      const weatherData = await weatherRes.json();
      if (!weatherData.daily || !weatherData.daily.time) throw new Error("No weather data");
      const formatted: WeatherDay[] = weatherData.daily.time.map((date: string, i: number) => ({
        date,
        temp_max: weatherData.daily.temperature_2m_max[i],
        temp_min: weatherData.daily.temperature_2m_min[i],
        precipitation: weatherData.daily.precipitation_sum[i],
      }));
      setWeatherDays(formatted);
      toast({
        title: "Weather updated",
        description: `Weather data for ${loc} has been refreshed.`,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to fetch weather data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-agri-sky/30 to-agri-light-green/20">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Weather Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Get accurate daily weather for any village, city, or state in India
          </p>
        </div>
        <Card className="mb-8 max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <form className="flex gap-2" onSubmit={e => { e.preventDefault(); if (input.trim()) { setLocation(input.trim()); fetchWeatherData(input.trim()); } }}>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Enter village, city, district, or state..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Get Forecast'}
              </Button>
            </form>
            {placeName && (
              <div className="mt-2 text-muted-foreground text-sm">Showing weather for: <span className="font-semibold">{placeName}</span></div>
            )}
          </CardContent>
        </Card>
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Fetching weather data...</p>
          </div>
        ) : weatherDays.length > 0 ? (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>7-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {weatherDays.map((day, index) => (
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold mb-2">
                      {new Date(day.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                    </div>
                    <div className="text-3xl mb-2">
                      {getWeatherIcon(day)}
                    </div>
                    <div className="font-semibold text-lg">
                      {Math.round(day.temp_max)}°C / {Math.round(day.temp_min)}°C
                    </div>
                    <div className="text-sm text-blue-600 mt-1">
                      {day.precipitation} mm rain
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Weather Data Available
            </h3>
            <p className="text-gray-500 mb-4">
              Please try again later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;