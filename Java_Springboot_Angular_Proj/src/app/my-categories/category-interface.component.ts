import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Category {
  name: string;
  icon: string;
  imgClass: string;
  spanClass: string;
  alt: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoriesSubject = new BehaviorSubject<Category[]>([
    { name: 'Work', icon: 'https://img.icons8.com/ios/50/business--v1.png', imgClass: 'work-img', spanClass: 'work-text', alt: 'business--v1' },
    { name: 'Family', icon: 'https://img.icons8.com/ios/50/defend-family--v2.png', imgClass: 'family-img', spanClass: 'family-text', alt: 'defend-family--v2' },
    { name: 'Freelancing Work', icon: 'https://img.icons8.com/ios/50/artist.png', imgClass: 'free-img', spanClass: 'free-text', alt: 'artist' },
    { name: 'Meeting Scheduling', icon: 'https://img.icons8.com/ios/50/appointment-scheduling.png', imgClass: 'meeting-img', spanClass: 'meeting-text', alt: 'appointment-scheduling' },
  ]);

  getCategories(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }
}
