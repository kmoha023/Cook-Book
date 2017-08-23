import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipe/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/services/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService:ShoppingListService) { }

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

passIngredients(recipeIngredients:Ingredient[]){
  this.shoppingListService.addIngredients(recipeIngredients);
  }
}
