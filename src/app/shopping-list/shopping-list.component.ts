import { Component, OnInit } from '@angular/core';
import { ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: ingredient[] = [
new ingredient('akki', 2),
new ingredient('onion', 5),  
];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdd(ingredient: ingredient){
    this.ingredients.push(ingredient);
  }

}
