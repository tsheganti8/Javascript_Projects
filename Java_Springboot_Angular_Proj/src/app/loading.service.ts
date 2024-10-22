// loading.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false); // Initialize as false
  loading$ = this.loadingSubject.asObservable(); // Expose loading state as observable

  constructor() {}

  showLoading() {
    this.loadingSubject.next(true); // Set loading to true
  }

  hideLoading() {
    this.loadingSubject.next(false); // Set loading to false
  }
}