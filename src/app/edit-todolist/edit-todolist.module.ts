import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTodolistPageRoutingModule } from './edit-todolist-routing.module';

import { EditTodolistPage } from './edit-todolist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTodolistPageRoutingModule
  ],
  declarations: [EditTodolistPage]
})
export class EditTodolistPageModule {}
