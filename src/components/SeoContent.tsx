import React from 'react';
import { Gem, Scale, Calculator, BookOpen, Target, HelpCircle } from 'lucide-react';

export default function SeoContent() {
  return (
    <div className="mt-16">
      <div className="bg-gradient-to-b from-yellow-50 to-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Complete Guide to Gold Karat Calculations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Gem className="h-6 w-6 text-yellow-600 mr-2" />
              <h3 className="text-xl font-semibold">Karat Calculator</h3>
            </div>
            <p className="text-gray-600">Our karat calculator helps jewelers and gold enthusiasts determine gold purity with precision and ease.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-yellow-600 mr-2" />
              <h3 className="text-xl font-semibold">Gold Purity Measurements</h3>
            </div>
            <p className="text-gray-600">Convert between karats, millesimal fineness, and gold percentage with our comprehensive calculator.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-yellow-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Understanding Gold Karats</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Gold purity is measured in karats, with 24 karats representing pure gold (100%). The karat scale helps determine the proportion of gold in jewelry and other precious items.</p>
              <p className="text-gray-600">Our karat calculator simplifies the conversion between different gold purity measurements for jewelers and collectors.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-yellow-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Common Gold Purities</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">24K Gold:</span>
                  Pure gold (100% purity, 1000 fineness)
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">18K Gold:</span>
                  75% pure gold (750 fineness)
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">14K Gold:</span>
                  58.5% pure gold (585 fineness)
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">10K Gold:</span>
                  41.7% pure gold (417 fineness)
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use Our Karat Calculator?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Instant conversion between karats and other purity measurements</li>
            <li>Accurate millesimal fineness calculations</li>
            <li>Percentage purity determination</li>
            <li>Free online tool for jewelers</li>
            <li>Mobile-friendly interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
}