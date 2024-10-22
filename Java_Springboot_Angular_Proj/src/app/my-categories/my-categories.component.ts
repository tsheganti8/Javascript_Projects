import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Category, CategoryService } from './category-interface.component'; // Adjust path

@Component({
  selector: 'app-my-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-categories.component.html',
  styleUrls: ['./my-categories.component.css']
})
export class MyCategoriesComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}