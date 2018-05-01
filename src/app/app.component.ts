import { Component } from '@angular/core';
import { RecipeComponent } from './recipe/recipe.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

recipeArray: RecipeComponent[] = [
  new RecipeComponent('Apple Pie', ['apples', 'sugar', 'cinnamon', 'butter', 'america', 'love'], ['turn on the oven', 'mix ingredients in the bowl', 'place mix in a pan', 'place pan in the oven']),
  new RecipeComponent('Pumpkin Pie', ['pumpkin', 'sugar', 'cinnamon', 'butter', 'america', 'love'], ['turn on the oven', 'mix ingredients in the bowl', 'place mix in a pan', 'place pan in the oven']),
  new RecipeComponent('Pecan Pie', ['pecans', 'sugar', 'cinnamon', 'butter', 'america', 'love'], ['turn on the oven', 'mix ingredients in the bowl', 'place mix in a pan', 'place pan in the oven'])
];

recipeAdd(titleInput, ingredientInput, instructionsInput,){

  let recipe = new RecipeComponent(titleInput, ingredientInput, instructionsInput);
  console.log(recipe);
  // console.log(recipeArray)
}
}
