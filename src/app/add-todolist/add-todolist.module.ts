import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTodolistPageRoutingModule } from './add-todolist-routing.module';

import { AddTodolistPage } from './add-todolist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTodolistPageRoutingModule
  ],
  declarations: [AddTodolistPage]
})
export class AddTodolistPageModule {}
