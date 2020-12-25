import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { Schedule } from '../models/schedule.model';
import {UserService} from '../users.service';
import { AngularFireAuth } from "@angular/fire/auth";
import {AlertController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  schedule: any;

  constructor(public afauth: AngularFireAuth, public user: UserService, private router: Router, public afAuth: AngularFireAuth, private alert: AlertController, private firestore: AngularFirestore) { }



  ionViewWillEnter(){
    this.getSchedule();
  }
  


  SignOut(){
      this.afAuth.signOut().then(() => {
      this.router.navigate(['/home']);
      
    });
  }




  async getSchedule(){
    let signedInuser = (await this.afauth.currentUser).uid;
     try{
       this.firestore
         .collection(`users/${signedInuser}/schedulelist`)
         .snapshotChanges()
         .subscribe( data => { this.schedule = data.map(e=> {

           return { 
             id: e.payload.doc.id,
             ScheduleTitle: e.payload.doc.data()['ScheduleTitle'],
             ScheduleDesc: e.payload.doc.data()['ScheduleDesc'],
             ScheduleStartTime: e.payload.doc.data()['ScheduleStartTime'],
             ScheduleEndTime: e.payload.doc.data()['ScheduleEndTime']
           };

         });});

       }catch(e){

     }
   }



  async deleteSchedule(id:string){
    let signedInuser = (await this.afauth.currentUser).uid;
    let successmsg2 = "task deleted successfully.";
    await this.firestore.doc(`users/${signedInuser}/schedulelist/${id}`).delete();
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
