import { Ingredient } from "app/shared/ingredient.model";

export class Recipe {

    public name: String;
    public description: String;
    public imagepath: String;
    public ingredient: Ingredient[];

    constructor(name1: String, desc: String, imgurl: String, ingredient: Ingredient[]) {
        this.name = name1;
        this.description = desc;
        this.imagepath = imgurl;
        this.ingredient = ingredient;
    }
}