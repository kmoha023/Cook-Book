import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from "app/services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  /*@ViewChild You can use ViewChild to get the first element or the 
  *directive matching the selector from the view DOM. 
  *If the view DOM changes, and a new child matches the selector, the property will be updated.*/
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
  

  }

  onAddedRecipe(){
    //const are not changed and are not variables
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient =  new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredient(newIngredient);
  }
}
