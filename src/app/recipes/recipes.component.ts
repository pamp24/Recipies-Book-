import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './services/recipes.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe:Recipe;

  constructor(private RecipeService: RecipeService){}
  ngOnInit(){
    this.RecipeService.recipeSelected.subscribe((Recipe: Recipe)=>{this.selectedRecipe = Recipe});
  }
}
