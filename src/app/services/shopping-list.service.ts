import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Injectable()
export class ShoppingListService {

  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
        new Ingredient('Apples', 20),
        new Ingredient('Tomatoes', 30)
    ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }


  addIngredients(ingredients:Ingredient[]){
  //   for(let ingredient of ingredients){
  //     this.addIngredients(ingredient);
  //   }
           
  //    (OR)
    
    //Coming from recipe.service.ts    
    //... is spread operator which will transform [] of elements ->
    // List of elements. To access single
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(ingredients.slice());
  }

}
