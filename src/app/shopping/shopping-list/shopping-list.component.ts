import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from "app/services/shopping-list.service";

@Component({

    selector: 'app-shopping-list',
    styleUrls: ['./shopping-list.component.css'],
    templateUrl: './shopping-list.component.html'
})

export class ShoppinglistComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppingService: ShoppingListService) {
    }

    ngOnInit() {
        this.ingredients = this.shoppingService.getIngredients();
        this.shoppingService.ingredientChanged
        .subscribe(
            (ingredients: Ingredient[]) => {
                this.ingredients = ingredients;
            }
        );
    }
}