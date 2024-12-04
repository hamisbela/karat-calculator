import React, { useState } from 'react';
import { Gem } from 'lucide-react';
import { calculateKaratProperties, COMMON_KARATS } from '../utils/karat';

export default function Calculator() {
  const [karats, setKarats] = useState<string>('24');
  const [result, setResult] = useState(calculateKaratProperties(24));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const karatValue = parseFloat(karats);
    if (karatValue >= 0 && karatValue <= 24) {
      setResult(calculateKaratProperties(karatValue));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Gem className="h-8 w-8 text-yellow-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Karat Calculator</h1>
      </div>

      <div className="bg-yellow-50 p-4 rounded-md mb-6">
        <div className="flex items-center mb-2">
          <Gem className="h-5 w-5 text-yellow-600 mr-2" />
          <h2 className="text-lg font-semibold text-yellow-800">Gold Purity Calculator</h2>
        </div>
        <p className="text-yellow-700">
          Calculate gold purity in different measurements including millesimal fineness and percentage.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Karat Value (0-24K)
          </label>
          <input
            type="number"
            value={karats}
            onChange={(e) => setKarats(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            required
            min="0"
            max="24"
            step="0.1"
            placeholder="Enter karat value (e.g., 24)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        >
          Calculate
        </button>
      </form>

      <div className="mt-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-gray-700 mb-2">Purity Ratio</h3>
            <p className="text-2xl font-bold text-yellow-600">{result.purity.toFixed(3)}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-gray-700 mb-2">Millesimal Fineness</h3>
            <p className="text-2xl font-bold text-yellow-600">{result.millesimal.toFixed(1)}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-gray-700 mb-2">Gold Percentage</h3>
            <p className="text-2xl font-bold text-yellow-600">{result.percentage.toFixed(2)}%</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Karat Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COMMON_KARATS.map((item) => (
              <div key={item.karat} className="bg-yellow-50 p-4 rounded-md">
                <h4 className="font-medium text-yellow-800">{item.karat}K - {item.name}</h4>
                <p className="text-sm text-yellow-600">
                  {calculateKaratProperties(item.karat).millesimal.toFixed(1)} Fineness
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}