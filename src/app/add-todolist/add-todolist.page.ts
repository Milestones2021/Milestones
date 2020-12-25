import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Todolist } from '../models/todolist.model';
import {AlertController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.page.html',
  styleUrls: ['./add-todolist.page.scss'],
})
export class AddTodolistPage implements OnInit {
  todolist = {} as Todolist

  constructor(public afauth: AngularFireAuth, private router: Router, private alert: AlertController, private firestore: AngularFirestore) { }



  async addToTodolist(todolist: Todolist){
    let successmsg4 = "Todolist Task Added Successfully!.";
    let signedInuser = (await this.afauth.currentUser).uid;
    try{
      const res = await this.firestore.collection(`users/${signedInuser}/todolistlist`).add(todolist);
      this.PushAlert('Success',successmsg4)
      this.router.navigate(['/todolist']);
      return true
    }catch(err){
      this.PushAlert('Error!', err.message);
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


  ngOnInit() {
  }

}
