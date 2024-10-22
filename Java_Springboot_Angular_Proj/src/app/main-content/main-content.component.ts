import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CalendarComponent } from '../calendar/calendar.component';
import { MyTasksComponent } from '../my-tasks/my-tasks.component';
import { MyCategoriesComponent } from '../my-categories/my-categories.component';
import { MyTrackingComponent } from '../my-tracking/my-tracking.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, CalendarComponent, MyTasksComponent, MyCategoriesComponent,MyTrackingComponent, AppComponent ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  
}
