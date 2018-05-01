import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component'
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(public name: string, public ingredients: string[], public instructions: string[]) {

   }

  ngOnInit() {
  }

}
