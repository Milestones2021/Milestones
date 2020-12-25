import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../users.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import {AlertController} from '@ionic/angular';

// import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  time: any;


  constructor(private userservice: UserService, private router: Router, private alert: AlertController, public afauth: AngularFireAuth, private firestore: AngularFirestore) {
    setInterval(() => {
      this.time = new Date();
   }, 1000);
 
   this.getCurrUser();

   }


  showDate(){
    let date = moment();
    let findate = moment(date).format('MM/DD/YYYY');
    return findate;
  }


  getCurrUser(){
    const curruser = this.userservice.email;
    return curruser;
  }


  SignOut(){

    this.afauth.signOut().then(() => {
    this.router.navigate(['/home']);
      
  });

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
