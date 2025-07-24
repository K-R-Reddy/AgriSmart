import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Thermometer, Droplets, TrendingUp, Leaf, Calendar, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { cropsDatabase, cropCategories, seasons, waterRequirements, profitabilityLevels, type Crop } from '@/data/cropsData';
import { locations, soilTypes, climateZones, states, regions } from '@/data/locationsData';

const CropRecommendations = () => {
  const [filteredCrops, setFilteredCrops] = useState<Crop[]>([]);
  const [hasFiltered, setHasFiltered] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    soilType: '',
    season: '',
    category: '',
    waterRequirement: '',
    profitability: '',
    searchTerm: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const applyFilters = () => {
    let filtered = cropsDatabase;

    // Filter by search term
    if (filters.searchTerm) {
      filtered = filtered.filter(crop =>
        crop.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        crop.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(crop =>
        crop.regions.some(region => region.toLowerCase().includes(filters.location.toLowerCase()))
      );
    }

    // Filter by soil type
    if (filters.soilType) {
      const selectedSoil = soilTypes.find(soil => soil.name === filters.soilType);
      if (selectedSoil) {
        filtered = filtered.filter(crop =>
          crop.soilTypes.some(soilType => 
            soilType.toLowerCase().includes(selectedSoil.id.toLowerCase())
          )
        );
      }
    }

    // Filter by season
    if (filters.season) {
      filtered = filtered.filter(crop =>
        crop.season.includes(filters.season)
      );
    }

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(crop => crop.category === filters.category);
    }

    // Filter by water requirement
    if (filters.waterRequirement) {
      filtered = filtered.filter(crop => crop.waterRequirement === filters.waterRequirement);
    }

    // Filter by profitability
    if (filters.profitability) {
      filtered = filtered.filter(crop => crop.profitability === filters.profitability);
    }

    setFilteredCrops(filtered);
    setHasFiltered(true);
  };

  useEffect(() => {
    // Only apply filters if any filter is set (not initial render)
    const isAnyFilter = Object.values(filters).some(
      v => v && v !== ''
    );
    if (isAnyFilter) {
      applyFilters();
    } else {
      setFilteredCrops([]);
      setHasFiltered(false);
    }
  }, [filters]);

  const updateFilter = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      soilType: '',
      season: '',
      category: '',
      waterRequirement: '',
      profitability: '',
      searchTerm: ''
    });
  };

  const getProfitabilityColor = (profitability: string) => {
    switch (profitability) {
      case 'High': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getWaterRequirementColor = (requirement: string) => {
    switch (requirement) {
      case 'High': return 'text-blue-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              Smart Crop Recommendations
            </h1>
            <p className="text-gray-600">Find the perfect crops for your location and conditions</p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search crops..."
                    value={filters.searchTerm}
                    onChange={(e) => updateFilter('searchTerm', e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:w-auto"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </div>

              {showFilters && (
                <div className="border-t pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <Select value={filters.location} onValueChange={(value) => updateFilter('location', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select State" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map(state => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={filters.soilType} onValueChange={(value) => updateFilter('soilType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Soil Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {soilTypes.map(soil => (
                          <SelectItem key={soil.id} value={soil.name}>{soil.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={filters.season} onValueChange={(value) => updateFilter('season', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Season" />
                      </SelectTrigger>
                      <SelectContent>
                        {seasons.map(season => (
                          <SelectItem key={season} value={season}>{season}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={filters.category} onValueChange={(value) => updateFilter('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {cropCategories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <Select value={filters.waterRequirement} onValueChange={(value) => updateFilter('waterRequirement', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Water Requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        {waterRequirements.map(requirement => (
                          <SelectItem key={requirement} value={requirement}>{requirement}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={filters.profitability} onValueChange={(value) => updateFilter('profitability', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Profitability" />
                      </SelectTrigger>
                      <SelectContent>
                        {profitabilityLevels.map(level => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Button variant="outline" onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Summary and Crop Cards */}
          {hasFiltered ? (
            <>
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-primary">{filteredCrops.length}</span> crop recommendations
                  {filters.location && filters.location !== 'All States' && (
                    <span> for <span className="font-semibold">{filters.location}</span></span>
                  )}
                </p>
              </div>
              {filteredCrops.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCrops.map((crop) => (
                    <Card key={crop.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <span className="text-2xl">{crop.image}</span>
                            <span>{crop.name}</span>
                          </CardTitle>
                          <Badge className={getProfitabilityColor(crop.profitability)}>
                            {crop.profitability}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 text-sm">{crop.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Target className="h-4 w-4 text-gray-500" />
                            <span>{crop.category}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span>{crop.season.join(', ')}</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Droplets className={`h-4 w-4 ${getWaterRequirementColor(crop.waterRequirement)}`} />
                            <span>{crop.waterRequirement} Water</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Growth Duration:</span>
                            <span className="font-medium">{crop.growthDuration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Expected Yield:</span>
                            <span className="font-medium">{crop.yield}</span>
                          </div>
                        </div>
                        <div className="border-t pt-3">
                          <p className="text-xs text-gray-500 mb-2">Suitable Regions:</p>
                          <div className="flex flex-wrap gap-1">
                            {crop.regions.slice(0, 3).map((region, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {region}
                              </Badge>
                            ))}
                            {crop.regions.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{crop.regions.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Thermometer className="h-3 w-3" />
                          <span>{crop.temperature.min}°C - {crop.temperature.max}°C</span>
                          <Droplets className="h-3 w-3 ml-2" />
                          <span>{crop.rainfall.min}-{crop.rainfall.max}mm</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <div className="text-gray-400 mb-4">
                      <Leaf className="h-12 w-12 mx-auto mb-2" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No crops found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your filters to find suitable crops for your conditions.
                    </p>
                    <Button onClick={clearFilters}>Clear All Filters</Button>
                  </CardContent>
                </Card>
              )}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CropRecommendations;
