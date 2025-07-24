
import React from 'react';
import { ArrowRight, Sprout, TrendingUp, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Crop Decisions
            <span className="block text-agri-light-green"></span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-100">
            Revolutionize your farming with crop recommendations, real-time weather data, 
            and market intelligence to maximize your harvest and profits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
           
          </div>
        </div>

        {/* Feature icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up">
          <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 animate-float">
            <div className="bg-white/20 p-4 rounded-full">
              <Sprout className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Smart Crop Selection</h3>
            <p className="text-gray-200 text-center">Crop recommendations based on soil, climate, and market data</p>
          </div>
          
          <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/20 p-4 rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Market Intelligence</h3>
            <p className="text-gray-200 text-center">Real-time pricing and demand forecasts to maximize profits</p>
          </div>
          
          <div className="flex flex-col items-center space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-white/20 p-4 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Risk Management</h3>
            <p className="text-gray-200 text-center">Weather alerts and crop protection strategies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
