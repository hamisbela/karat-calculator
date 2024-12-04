import React from 'react';
import { Gem, Scale, Shield, Calculator } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Gem className="h-8 w-8 text-yellow-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Welcome to KaratCalculator.com, your trusted resource for gold purity calculations and precious metal measurements.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="flex flex-col items-center text-center p-4">
                <Calculator className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To provide accurate and reliable gold purity calculations for jewelers, collectors, and enthusiasts.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Scale className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Precision, reliability, and user-friendly tools for the jewelry community.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Shield className="h-12 w-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Commitment</h3>
                <p className="text-gray-600">Providing accurate calculations and educational resources for gold purity assessment.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose Our Calculator</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Accurate karat to fineness conversions</li>
              <li>Multiple purity measurement formats</li>
              <li>Intuitive user interface</li>
              <li>Mobile-friendly design</li>
              <li>Free and accessible to everyone</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Expertise</h2>
            <p className="text-gray-600">Our team combines deep knowledge of precious metals with software development expertise to deliver accurate and reliable gold purity calculations. We understand the importance of precise measurements in the jewelry industry and aim to provide tools that make these calculations more accessible.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Understanding Gold Purity</h2>
            <p className="text-gray-600">Gold purity is typically measured in karats, with 24 karats representing pure gold. The karat system is crucial for determining the value and quality of gold jewelry and other precious items. Our calculator helps convert between different measurement systems including karats, millesimal fineness, and percentage purity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}