import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.css',
  providers: [LoadingService] 
})
export class LoadingScreenComponent{
  isLoading: boolean = false;

  constructor(public loader: LoadingService) {}

  // ngOnInit(): void {
  //   this.loadingService.loading$.subscribe((loading: boolean) => {
  //     this.isLoading = loading;
  //   });
  // }
}
