import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient [] = [
    new ingredient('Apples', 5),
    new ingredient('Tomatoes', 10),
    new ingredient('Onions', 15)
  ];

  constructor(){

  }
  ngOnInit(): void {
      
  }

}
