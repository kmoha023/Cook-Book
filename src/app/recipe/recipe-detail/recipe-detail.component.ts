import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from "app/services/shopping-list.service";
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipeSelectedIs: Recipe;

  ingredients: Ingredient[];
  
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {

  }

  toShopping(){
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientChanged
        .subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
  }
}
