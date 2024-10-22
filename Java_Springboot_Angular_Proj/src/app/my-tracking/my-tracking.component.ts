import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-my-tracking',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './my-tracking.component.html',
  styleUrl: './my-tracking.component.css'
})
export class MyTrackingComponent {
  
  tracks = [
    { name: 'Create Wireframe', time: { hours: 0, minutes: 0, seconds: 0 }, intervalId: null, isPlaying: false, isEditing: false },
    { name: 'Dashboard Design', time: { hours: 0, minutes: 0, seconds: 0 }, intervalId: null, isPlaying: false, isEditing: false },
    { name: 'Logo Design', time: { hours: 0, minutes: 0, seconds: 0 }, intervalId: null, isPlaying: false, isEditing: false },
    { name: 'UI Development', time: { hours: 0, minutes: 0, seconds: 0 }, intervalId: null, isPlaying: false, isEditing: false },
    { name: 'UI Design', time: { hours: 0, minutes: 0, seconds: 0 }, intervalId: null, isPlaying: false, isEditing: false }
  ];

  // Toggle play/pause functionality
  togglePlayPause(track: any): void {
    if (track.isPlaying) {
      clearInterval(track.intervalId);  // Pause the timer
    } else {
      track.intervalId = setInterval(() => this.incrementTime(track), 1000);  // Start the timer
    }
    track.isPlaying = !track.isPlaying;
  }

  // Increment time by seconds, then minutes and hours
  incrementTime(track: any): void {
    track.time.seconds++;
    if (track.time.seconds === 60) {
      track.time.seconds = 0;
      track.time.minutes++;
    }
    if (track.time.minutes === 60) {
      track.time.minutes = 0;
      track.time.hours++;
    }
  }

  // Reset timer for a track
  resetTimer(track: any): void {
    clearInterval(track.intervalId);  // Stop timer
    track.isPlaying = false;
    track.time = { hours: 0, minutes: 0, seconds: 0 };  // Reset time
  }

  // Enable renaming mode for a track
  enableRename(track: any): void {
    track.isEditing = true;
  }

  // Handle renaming the track
  renameTrack(event: any, track: any): void {
    if (event.key === 'Enter') {
      track.isEditing = false;  // Stop editing mode on Enter key
    }
  }
}