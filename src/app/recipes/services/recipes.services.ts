import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes.model";
import { Ingredient } from "../../shared/ingredient.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
        'ROASTED VEGGIE GLOW BOWLS',
        'Roasted Veggie Glow Bowls feature a mix of cauliflower',
        'https://th.bing.com/th/id/OIP.4LyJ-zFChn39BWHHPkEqYgHaLH?rs=1&pid=ImgDetMain',
        [new Ingredient ('Meat',10),
        new Ingredient ('Eggs',15),
        new Ingredient ('Lemon',20)]
        ),
        new Recipe(
        'QUINOA POWER BOWLS',
        'Quinoa Power Bowls with Maple Chipotle Brussels',
        'https://twohealthykitchens.com/wp-content/uploads/2020/11/QuinaPowerBowls2.jpg',
        [new Ingredient ('Meat',10),
        new Ingredient ('Eggs',15),
        new Ingredient ('Lemon',20)]),
        new Recipe(
        'ONE POT THAI PASTA',
        'One Pot Thai Pasta is whole wheat spaghetti',
        'https://twohealthykitchens.com/wp-content/uploads/2020/11/one-pot-thai-peanut-veggie-pasta1.jpg',
        [new Ingredient ('Meat',10),
        new Ingredient ('Eggs',15),
        new Ingredient ('Lemon',20)]),
      ];
    getRecipes(){
        return this.recipes.slice();
    }

}