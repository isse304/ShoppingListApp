import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  recipes: any;
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService){}
  onDisplay() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }


}
