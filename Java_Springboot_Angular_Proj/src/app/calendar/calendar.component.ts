import { Component, OnInit } from '@angular/core';
import { get } from 'http';
import { start } from 'repl';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  
  monthNames: string[] = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  
  currentDate: Date = new Date();
  days: { date: number, isCurrent: boolean, isPast: boolean, isFuture: boolean }[] = [];
  month: string = this.monthNames[this.currentDate.getMonth()];
  year: number = this.currentDate.getFullYear();

  ngOnInit(): void {
    this.renderCalendar(this.currentDate);
  }

  private renderCalendar(date: Date): void {
    const currentMonth: number = date.getMonth();
    const currentYear: number = date.getFullYear();
    
    // Get the first day and last day of the current month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0); // Last day of the month

    // Create an array of days for the calendar
    this.days = [];

    // Add previous month's days
    const previousMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    const daysInPreviousMonth = previousMonthLastDay - firstDay.getDay();
    
    for (let i = daysInPreviousMonth; i <= previousMonthLastDay; i++) {
      this.days.push({ 
        date: i, 
        isCurrent: false, 
        isPast: true, 
        isFuture: false 
      });
    }

    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const dateToCheck = new Date(currentYear, currentMonth, i);
      this.days.push({ 
        date: i, 
        isCurrent: dateToCheck.toDateString() === this.currentDate.toDateString(), 
        isPast: dateToCheck < this.currentDate, 
        isFuture: dateToCheck > this.currentDate 
      });
    }

    // Add next month's days
    const daysInNextMonth = 6 - lastDay.getDay();
    
    for (let i = 1; i <= daysInNextMonth; i++) {
      this.days.push({ 
        date: i, 
        isCurrent: false, 
        isPast: false, 
        isFuture: true 
      });
    }

    // Update the month and year displayed in the header
    this.month = this.monthNames[currentMonth];
    this.year = currentYear;
  }

  prevMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.renderCalendar(this.currentDate);
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.renderCalendar(this.currentDate);
  }
}