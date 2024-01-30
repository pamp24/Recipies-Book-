import { Component, OnInit, Input,} from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../services/recipes.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
