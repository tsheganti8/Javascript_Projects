import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { routes } from './app-routing.module'; // Import your routes
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    // other components...
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AppRoutingModule, // Register your routes
    HttpClientModule,
  ],
  // No bootstrap property is needed here for standalone components
})
export class AppModule {}
