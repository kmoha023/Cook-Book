import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { ShoppingListService } from "app/services/shopping-list.service";
import { Ingredient } from "app/shared/ingredient.model";
import { RecipeService } from "app/services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipeSelectedIs: Recipe;

  private ingredients: Ingredient[];
  
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    
  }

  toShopping(){
    this.recipeService.passIngredients(this.recipeSelectedIs.ingredient);
  }
}
