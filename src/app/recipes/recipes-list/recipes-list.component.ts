import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'this is a test',
    'https://www.myrecipemagic.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd3d3Lml0aXNha2VlcGVyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxMC8wMy9HcmlsbGVkLVBvcmstdGVuZGVybG9pbi1tYXJpbmFkZS1IRVJPLmpwZyIsImV4cGlyZXNfYXQiOjE2NjQ4NDM3OTJ9.VWdrQ5VnwLQHCuPv38Cnn1GZmYfFEjgEzbvsr-f181M/image.jpg?width=2000&height=2000',)
  ];
  constructor(){

  }
  ngOnInit(): void {
      
  }

}
