
import React from 'react';
import { Cloud, DollarSign, Lightbulb, Users, BarChart3, MapPin } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Weather Forecasting',
      description: 'Get accurate 7-day weather forecasts with agricultural-specific insights and alerts.',
      color: 'bg-blue-500'
    },
    {
      icon: DollarSign,
      title: 'Market Prices',
      description: 'Track real-time commodity prices and market trends to make informed selling decisions.',
      color: 'bg-green-500'
    },
    {
      icon: Lightbulb,
      title: 'Crop Recommendations',
      description: 'Crop suggestions for optimal crop selection based on your land and conditions.',
      color: 'bg-yellow-500'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Smart Farming
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and insights you need to make data-driven 
            farming decisions and increase your agricultural productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`${feature.color} p-3 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
