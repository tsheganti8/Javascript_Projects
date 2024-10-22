// src/app/mock-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  getData(): Observable<any> {
    const mockResponse = [
      // Replace with your mock data structure
      { id: 1, name: 'Mock Item 1' },
      { id: 2, name: 'Mock Item 2' },
    ];
    return of(mockResponse); // Simulate HTTP response with Observable
  }
}
