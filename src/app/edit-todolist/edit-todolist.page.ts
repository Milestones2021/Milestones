import { Component, OnInit } from '@angular/core';
import { Todolist } from '../models/todolist.model';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-edit-todolist',
  templateUrl: './edit-todolist.page.html',
  styleUrls: ['./edit-todolist.page.scss'],
})
export class EditTodolistPage implements OnInit {
  todolist = {} as Todolist
  id:any;


  constructor(public afauth: AngularFireAuth, private router: Router, private actRoute: ActivatedRoute, private alert: AlertController, private firestore: AngularFirestore) { 
    this.id =this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getTodolistTaskById(this.id);
  }


  async getTodolistTaskById(id: string){
    let signedInuser = (await this.afauth.currentUser).uid;


    this.firestore.doc(`users/${signedInuser}/todolistlist/${id}`)
    .valueChanges()
    .subscribe(data => { 
      this.todolist.TodolistTitle = data['TodolistTitle']
      this.todolist.TodolistDesc = data['TodolistDesc']
      this.todolist.TodolistState = data['TodolistState']
 
     });   
   }
 
 
 
 
   async updateScheduleTask(todolist:Todolist){
     let successmsg6 = "Todolist Task has been successfully updated!";
     let signedInuser = (await this.afauth.currentUser).uid;
     try{
       await this.firestore.doc(`users/${signedInuser}/todolistlist/${this.id}`).update(todolist);
       this.PushAlert('Success!',successmsg6);
       this.router.navigate(["/todolist"]);
       return true;
     }catch(e){
       this.PushAlert('Error!',e)
       return false;
     }
   }
 
 
 
 
 
   
   async PushAlert(header: string, message:string){
     const alert = await this.alert.create({
       header,
       message,
       buttons: ['OK']
     })
 
     await alert.present()
   }

}
