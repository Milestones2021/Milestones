import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import {AlertController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {
  todolist: any;
  constructor(private router: Router, public afauth: AngularFireAuth, private alert: AlertController, private firestore: AngularFirestore) { }


  ionViewWillEnter(){
    this.getTodolist();
  }
  



  SignOut(){
      this.afauth.signOut().then(() => {
      this.router.navigate(['/home']);
      
    });
  }
    


  async getTodolist(){
    
    try{
      let signedInuser = (await this.afauth.currentUser).uid;
      this.firestore
        .collection(`users/${signedInuser}/todolistlist`)
        .snapshotChanges()
        .subscribe( data => { this.todolist = data.map(e=> {

          return { 
            id: e.payload.doc.id,
            TodolistTitle: e.payload.doc.data()['TodolistTitle'],
            TodolistDesc: e.payload.doc.data()['TodolistDesc'],
            TodolistState: e.payload.doc.data()['TodolistState'],
          };

        });});

      }catch(e){

    }
  }



  

  async deleteTodolist(id:string){
    let signedInuser = (await this.afauth.currentUser).uid;
    let successmsg2 = "task deleted successfully.";
    await this.firestore.doc(`users/${signedInuser}/todolistlist/${id}`).delete();
    this.PushAlert('Attention', successmsg2 );
    
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
