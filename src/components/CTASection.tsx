
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const benefits = [
    'Increase crop yields by up to 30%',
    'Reduce farming costs and risks',
    'Access to expert agricultural advice',
    'Real-time weather and market data'
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Revolutionize Your Farming?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Join thousands of farmers who have already transformed their agricultural 
              practices with AgriSmart's intelligent farming solutions.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <div className="text-primary">
                  <h3 className="text-2xl font-bold mb-4">Success Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">500+</div>
                      <div className="text-sm text-gray-600">Active Farmers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">30%</div>
                      <div className="text-sm text-gray-600">Yield Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">25%</div>
                      <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
