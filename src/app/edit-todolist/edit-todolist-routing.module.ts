import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTodolistPage } from './edit-todolist.page';

const routes: Routes = [
  {
    path: '',
    component: EditTodolistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTodolistPageRoutingModule {}
