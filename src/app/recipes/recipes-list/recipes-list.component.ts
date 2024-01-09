import { Component, OnInit,} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../services/recipes.services';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  
  recipes: Recipe[];

  constructor(private RecipeService: RecipeService){

  }
  ngOnInit(){
      this.recipes = this.RecipeService.getRecipes();
  }
  

}
