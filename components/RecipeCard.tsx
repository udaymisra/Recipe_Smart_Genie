
import React from 'react';
import type { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white animate-fade-in">
      <h2 className="text-3xl font-bold text-green-800 mb-2">{recipe.recipeName}</h2>
      <p className="text-gray-600 italic mb-6">{recipe.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-green-200 pb-2 mb-3">Ingredients</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>
                <span className="font-medium">{ing.name}:</span> {ing.quantity}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-green-200 pb-2 mb-3">Instructions</h3>
          <ol className="space-y-3 list-decimal list-inside text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="leading-relaxed">{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-orange-100/50 p-4 rounded-xl border border-orange-200">
          <h4 className="text-lg font-bold text-orange-700 mb-2">{recipe.kidsCorner.title}</h4>
          <ul className="space-y-1 list-disc list-inside text-orange-800">
            {recipe.kidsCorner.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="bg-emerald-100/50 p-4 rounded-xl border border-emerald-200">
          <h4 className="text-lg font-bold text-emerald-700 mb-2">🏆 Gamification Challenge!</h4>
          <p className="text-emerald-800">{recipe.gamification}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
