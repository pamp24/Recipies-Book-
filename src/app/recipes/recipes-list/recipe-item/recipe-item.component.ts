import { Component, OnInit, Input,} from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../services/recipes.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
@Input() recipe: Recipe;

  constructor(private RecipeService: RecipeService){}

  ngOnInit(): void {
      
  }
  onSelected(){
    this.RecipeService.recipeSelected.emit(this.recipe);
  }

}
