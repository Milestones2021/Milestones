import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/schedule.model';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.page.html',
  styleUrls: ['./add-schedule.page.scss'],
})
export class AddSchedulePage implements OnInit {
schedule = {} as Schedule
  constructor( public afauth: AngularFireAuth, private router: Router, private alert: AlertController, private firestore: AngularFirestore) { }

  ngOnInit() {
  }





  async addToSchedule(schedule: Schedule){
      let successmsg = "Schedule Task added Successfully!.";
      try{

        let signedInuser = (await this.afauth.currentUser).uid;

        const res = await this.firestore.collection(`users/${signedInuser}/schedulelist`).add(schedule);
        this.PushAlert('Success!',successmsg)
        this.router.navigate(["/schedule"]);
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



}
