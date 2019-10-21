import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ("test recipe", "This is a just test recipe", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIzBu7CHYj6mHxohDWbRWrcAa5hWoiQMzTOzT1ArTOjrb1kmv2A")
  ];

  constructor() { }

  ngOnInit() {
  }

}
