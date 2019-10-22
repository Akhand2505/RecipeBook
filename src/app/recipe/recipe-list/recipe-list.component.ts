import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ("test recipe", "This is a just test recipe", "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/sweetandsourstickythaiboneless-3a944d.jpg"),
    new Recipe ("test recipe", "This is a just test recipe", "https://bigoven-res.cloudinary.com/image/upload/sweetandsourstickythaiboneless-3a944d.jpg"),
    new Recipe ("test recipe", "This is a just test recipe", "https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/white-chocolate-peppermint-bark-18.jpg")
  ];

  constructor() { }
@Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }
  onRecipeSelect(recipe: Recipe){
    this.theRecipe.emit(recipe);
  }

}
