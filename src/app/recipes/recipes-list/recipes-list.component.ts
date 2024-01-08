import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('ROASTED VEGGIE GLOW BOWLS',
    'Roasted Veggie Glow Bowls feature a mix of cauliflower',
    'https://th.bing.com/th/id/OIP.4LyJ-zFChn39BWHHPkEqYgHaLH?rs=1&pid=ImgDetMain'),
    new Recipe('QUINOA POWER BOWLS',
    'Quinoa Power Bowls with Maple Chipotle Brussels',
    'https://twohealthykitchens.com/wp-content/uploads/2020/11/QuinaPowerBowls2.jpg')
  ];
  constructor(){

  }
  ngOnInit(): void {
      
  }
  onRecipeSelected(Recipe: Recipe){
    this.recipeWasSelected.emit(Recipe);
  }

}
