
export interface RecipeIngredient {
  name: string;
  quantity: string;
}

export interface KidsCorner {
  title: string;
  tasks: string[];
}

export interface Recipe {
  recipeName: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  kidsCorner: KidsCorner;
  gamification: string;
}
