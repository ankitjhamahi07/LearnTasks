import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SecondListComponent } from './second-list/second-list.component';
import { ThirdListComponent } from './third-list/third-list.component';

const routes: Routes = [
  { path: 'task1', 
    component: ListComponent 
  },
  {
    path: 'task2',
    component: SecondListComponent
  },
  {
    path: 'task3',
    component: ThirdListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
