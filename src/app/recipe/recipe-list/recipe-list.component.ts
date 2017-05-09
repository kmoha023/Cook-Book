import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  selectedRecipe = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("Hyderabadi Biryani", "This is Hyderabadi Biryani","./assets/Hyderabadi-Biryani-KhaanaKhazana.jpg"),
    new Recipe("Hyderabadi Biryani", "This is Hyderabadi Biryani","./assets/Hyderabadi-Biryani-KhaanaKhazana.jpg")

  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(feature: Recipe){
    this.selectedRecipe.emit(feature)
  }

}
