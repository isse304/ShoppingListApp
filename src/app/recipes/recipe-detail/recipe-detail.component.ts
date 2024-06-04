import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute, private router: Router) { }
  onAddToList() {
    this.recipesService.addIngToShoppingList(this.recipe.ingredients);
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipe(this.id);
    });


  }
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
