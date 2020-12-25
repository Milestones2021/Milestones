import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/schedule.model';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";


@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.page.html',
  styleUrls: ['./edit-schedule.page.scss'],
})
export class EditSchedulePage implements OnInit {
  
  schedule = {} as Schedule
  id:any;


  constructor(public afauth: AngularFireAuth, private router: Router, private actRoute: ActivatedRoute, private alert: AlertController, private firestore: AngularFirestore) { 
    this.id =this.actRoute.snapshot.paramMap.get("id");
    
  }

  ngOnInit() {
    this.getScheduleTaskById(this.id);
  }

  async getScheduleTaskById(id: string){
    let signedInuser = (await this.afauth.currentUser).uid;


   this.firestore.doc(`users/${signedInuser}/schedulelist/${id}`)
   .valueChanges()
   .subscribe(data => { 
     this.schedule.ScheduleTitle = data['ScheduleTitle']
     this.schedule.ScheduleDesc = data['ScheduleDesc']
     this.schedule.ScheduleStartTime = data['ScheduleStartTime']
     this.schedule.ScheduleEndTime = data['ScheduleEndTime']

    });   
  }




  async updateScheduleTask(schedule:Schedule){
    let successmsg3 = "Schedule Task has been successfully updated!";
    let signedInuser = (await this.afauth.currentUser).uid;
    try{
      await this.firestore.doc(`users/${signedInuser}/schedulelist/${this.id}`).update(schedule);
      this.PushAlert('Success!',successmsg3);
      this.router.navigate(["/schedule"]);
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


  // updateScheduleTask(schedule){}
}
