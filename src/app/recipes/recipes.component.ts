import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from './services/recipes.services';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit{


  constructor() { }

  ngOnInit() {}
 

}
