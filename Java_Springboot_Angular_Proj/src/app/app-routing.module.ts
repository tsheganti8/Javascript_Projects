import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';


export const routes: Routes = [
  { path: 'dashboard', component: MainContentComponent },
  { path: 'create-task', component: CreateNewTaskComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Default route to dashboard
  { path: '**', redirectTo: '/dashboard' } ,
  { path: 'loading', component: LoadingScreenComponent },
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
