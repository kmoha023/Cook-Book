import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipe/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

 private recipes: Recipe[] = [
    new Recipe(
      "Hyderabadi Biryani", 
      "This is Hyderabadi Biryani",
      "./assets/Hyderabadi-Biryani-KhaanaKhazana.jpg",
      [
        new Ingredient('Meat', 20),
        new Ingredient('Rice with Masala', 40)
      ]),
    
    new Recipe(
      "Boti Kebab",
      "Imagine hot kebabas melting in your mouth?",
      "./assets/boti_kebabs.jpg",
      [
        new Ingredient('Meat', 5),
        new Ingredient('Onion and Lemon', 5)
      ])
  ];

  getRecipes(){
    //send copy of recipe
    return this.recipes.slice();
  }
}
