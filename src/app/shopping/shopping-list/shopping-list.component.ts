import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({

selector: 'app-shopping-list',
styleUrls: ['./shopping-list.component.css'],
templateUrl: './shopping-list.component.html'


})

export class ShoppinglistComponent{
ingredients: Ingredient[] = [
new Ingredient('Apples', 20),
new Ingredient('Tomatoes', 30)
];



constructor(){

}

}