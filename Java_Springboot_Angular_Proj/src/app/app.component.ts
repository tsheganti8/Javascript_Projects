import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { MyCategoriesComponent } from './my-categories/my-categories.component';
import { MyTrackingComponent } from './my-tracking/my-tracking.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoadingService } from './loading.service';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { MockDataService } from './mock-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule,
    CalendarComponent, 
    MyTasksComponent, 
    MyCategoriesComponent, 
    MyTrackingComponent, 
    CreateNewTaskComponent, 
    MainContentComponent, 
    LoadingScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Java_Springboot_Angular_Proj';
  isCollapsed = false; // Tracks whether the navigation bar is collapsed or not

  constructor(
    private router: Router,
    public loadingService: LoadingService,
    private mockDataService: MockDataService
  ) {}

  ngOnInit(): void {
    this.loadingService.showLoading(); // Show loading screen on initialization

    this.mockDataService.getData().subscribe({
      next: (response) => {
        console.log('Mock data loaded:', response);
        this.loadingService.hideLoading(); // Hide loading screen on data load
      },
      error: (error) => {
        console.error('Error loading data:', error);
        this.loadingService.hideLoading(); // Hide loading screen on error
      }
    });
  }

  toggleNav(): void {
    this.isCollapsed = !this.isCollapsed;
    console.log('Navigation collapsed:', this.isCollapsed);
  }

  navigateToCreateNewTask(): void {
    this.router.navigate(['/loading']).then(() => {
      // Simulate a delay before navigating to the new task page
      setTimeout(() => {
        this.router.navigate(['/create-task']);
      }, 4000); // Adjust the delay time as needed
    });
  }
  
  navigateToDashboard(): void {
    this.router.navigate(['/loading']).then(() => {
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 4000); // Adjust the delay time as needed
    });
  }
}
