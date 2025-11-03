
import React, { useState, useCallback } from 'react';
import { generateRecipe, identifyIngredientsFromImage } from './services/geminiService';
import type { Recipe } from './types';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import Loader from './components/Loader';
import InfoPanel from './components/InfoPanel';
import CameraModal from './components/CameraModal';

const CUISINE_OPTIONS = ['Any', 'North Indian', 'South Indian', 'Italian', 'Mexican', 'Chinese', 'Thai'];
const OCCASION_OPTIONS = ['None', 'Diwali', 'Fasting Friday', 'Navratri', 'Birthday', 'Game Night', 'Christmas'];
const DIET_OPTIONS = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Elderly-Friendly (Low Spice/Soft)', 'Jain'];

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 6a2 2 0 012-2h1.172a2 2 0 011.414.586l.828.828A2 2 0 008.828 6H12a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    <path d="M15 8a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);


const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('Any');
  const [occasion, setOccasion] = useState<string>('None');
  const [dietaryNeeds, setDietaryNeeds] = useState<string[]>([]);
  
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isIdentifying, setIsIdentifying] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState<boolean>(false);

  const handleDietChange = (diet: string) => {
    setDietaryNeeds(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };

  const handleImageCapture = useCallback(async (imageDataUrl: string) => {
    setIsCameraOpen(false);
    setIsIdentifying(true);
    setError(null);
    try {
      const base64Data = imageDataUrl.split(',')[1];
      const identifiedItems = await identifyIngredientsFromImage(base64Data);
      setIngredients(prev => prev ? `${prev}, ${identifiedItems}` : identifiedItems);
    } catch (err) {
      console.error(err);
      setError('Could not identify ingredients from the image. Please try again or type them manually.');
    } finally {
      setIsIdentifying(false);
    }
  }, []);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    if (!ingredients.trim()) {
      setError('Please list some ingredients to get started!');
      return;
    }

    setIsLoading(true);
    setError(null);
    setRecipe(null);

    try {
      const result = await generateRecipe(ingredients, cuisine, occasion, dietaryNeeds);
      setRecipe(result);
    } catch (err) {
      console.error(err);
      setError('Sorry, the Genie is having trouble thinking of a recipe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [ingredients, cuisine, occasion, dietaryNeeds]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-rose-100 to-emerald-100 font-sans text-gray-800">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-white">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="ingredients" className="block text-lg font-semibold text-gray-700">
                    What ingredients do you have?
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsCameraOpen(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    aria-label="Scan ingredients with camera"
                  >
                    <CameraIcon />
                    Scan
                  </button>
                </div>
                <div className="relative">
                  <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="e.g., leftover rice, 2 tomatoes, paneer, 1 onion..."
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-shadow disabled:bg-gray-100"
                    rows={4}
                    disabled={isIdentifying}
                  />
                  {isIdentifying && (
                    <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center rounded-lg border border-green-200">
                      <Loader />
                      <span className="mt-2 text-sm font-medium text-gray-600">Identifying ingredients...</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cuisine" className="block text-md font-medium mb-2 text-gray-700">Cuisine Style</label>
                  <select id="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {CUISINE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="occasion" className="block text-md font-medium mb-2 text-gray-700">Special Occasion</label>
                  <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {OCCASION_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>
              
              <div>
                <span className="block text-md font-medium mb-2 text-gray-700">Dietary Needs</span>
                <div className="flex flex-wrap gap-3">
                  {DIET_OPTIONS.map(diet => (
                    <label key={diet} className="flex items-center space-x-2 cursor-pointer p-2 bg-white/80 rounded-lg border border-gray-200 hover:bg-green-50 transition-colors">
                      <input 
                        type="checkbox" 
                        checked={dietaryNeeds.includes(diet)}
                        onChange={() => handleDietChange(diet)}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <span className="text-sm">{diet}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button 
                type="submit" 
                disabled={isLoading || isIdentifying}
                className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300"
              >
                {isLoading ? <Loader /> : 'Ask the Genie!'}
              </button>
            </div>
          </form>

          <div className="mt-10">
            {error && <div className="text-center p-4 bg-red-100 text-red-700 rounded-lg shadow-md">{error}</div>}
            {recipe && <RecipeCard recipe={recipe} />}
          </div>
        </div>
        <InfoPanel />
      </main>
      {isCameraOpen && (
        <CameraModal 
          onClose={() => setIsCameraOpen(false)}
          onCapture={handleImageCapture}
        />
      )}
    </div>
  );
};

export default App;
