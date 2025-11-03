
import { GoogleGenAI, Type } from "@google/genai";
import type { Recipe } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const recipeSchema = {
  type: Type.OBJECT,
  properties: {
    recipeName: { type: Type.STRING },
    description: {
      type: Type.STRING,
      description: "A short, enticing description of the dish",
    },
    ingredients: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          quantity: { type: Type.STRING },
        },
        required: ["name", "quantity"],
      },
    },
    instructions: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    kidsCorner: {
      type: Type.OBJECT,
      properties: {
        title: {
          type: Type.STRING,
          description: "A fun title, e.g., 'Little Chef's Mission!'",
        },
        tasks: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "2-3 fun, safe tasks for kids.",
        },
      },
      required: ["title", "tasks"],
    },
    gamification: {
      type: Type.STRING,
      description: "A short, fun gamification idea.",
    },
  },
  required: [
    "recipeName",
    "description",
    "ingredients",
    "instructions",
    "kidsCorner",
    "gamification",
  ],
};

export const identifyIngredientsFromImage = async (imageDataBase64: string): Promise<string> => {
  const imagePart = {
    inlineData: {
      mimeType: 'image/jpeg',
      data: imageDataBase64,
    },
  };

  const textPart = {
    text: "Identify all the food ingredients in this image. List them as a comma-separated string. If there are no identifiable food items, return an empty string."
  };

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [imagePart, textPart] },
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error identifying ingredients from image:", error);
    throw new Error("Failed to identify ingredients from the image via API.");
  }
};


export const generateRecipe = async (
  ingredients: string,
  cuisine: string,
  occasion: string,
  dietaryNeeds: string[]
): Promise<Recipe> => {
  const prompt = `
    You are a "Leftover Smart Recipe Genie". Your task is to create a unique and delicious recipe based on a list of leftover ingredients. You must also tailor the recipe to the user's specific preferences.

    **User's Available Ingredients:**
    ${ingredients}

    **User's Preferences:**
    - Cuisine Style: ${cuisine === 'Any' ? 'Be creative!' : cuisine}
    - Special Occasion: ${occasion === 'None' ? 'A regular meal' : occasion}
    - Dietary Needs: ${dietaryNeeds.length > 0 ? dietaryNeeds.join(', ') : 'None specified'}

    **Your Task:**

    Generate a complete recipe based on the provided details. The recipe must:
    1.  Primarily use the ingredients provided by the user. You can suggest a few common pantry staples (like salt, pepper, oil, basic spices) if necessary.
    2.  Fit the specified cuisine style, occasion, and dietary restrictions. For "Elderly-Friendly", ensure the recipe is low-spice, not too oily, and easy to chew. For fasting recipes (Navratri, Fasting Friday), adhere to common restrictions (e.g., no grains, onions, garlic for Navratri).
    3.  Include a "Kids Corner" section with 2-3 fun, safe, and age-appropriate tasks for children to help with during the cooking process. This should be playful.
    4.  Include a "Gamification" idea, like a fun challenge or a scoring system for the dish.

    Respond with a valid JSON object that adheres to the provided schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: recipeSchema,
      },
    });
    
    const jsonText = response.text.trim();
    // In case the API returns the JSON wrapped in markdown ```json ... ```
    const cleanedJsonText = jsonText.replace(/^```json\s*|```$/g, '');
    const recipeData: Recipe = JSON.parse(cleanedJsonText);
    return recipeData;
  } catch (error) {
    console.error("Error generating recipe from Gemini API:", error);
    throw new Error("Failed to generate recipe. Please check the API response format.");
  }
};
