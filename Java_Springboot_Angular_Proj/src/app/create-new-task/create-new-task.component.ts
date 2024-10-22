import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Category, CategoryService } from '../my-categories/category-interface.component';

@Component({
  selector: 'app-create-new-task', // Ensure this is used correctly
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent {

  categories: Category[] = [];
  taskName: string = '';
  selectedCategory: string = '';
  startDate: string = '';

  constructor(private categoryService: CategoryService) {}

  onSubmit() {
    // Here you would typically handle the submission logic
    const newTask = {
      taskName: this.taskName,
      selectedCategory: this.selectedCategory,
      startDate: this.startDate,
    };
    console.log('Task Created:', newTask);

    // Optionally, you can reset the form after submission
    this.resetForm();
  }

  resetForm() {
    this.taskName = '';
    this.selectedCategory = '';
    this.startDate = '';
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

}
