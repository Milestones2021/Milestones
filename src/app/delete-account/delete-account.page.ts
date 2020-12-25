import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
})
export class DeleteAccountPage implements OnInit {

  constructor(public afauth: AngularFireAuth, private router: Router, private alert: AlertController, private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  async deleteuser(){
    let signedInuser = (await this.afauth.currentUser).uid;

    try{
      let goodbyemsg = "Your account and its data has been deleted.";
      await this.firestore.doc(`users/${signedInuser}`).delete();
      (await this.afauth.currentUser).delete();
      (await this.afauth.signOut().then(() => {
        this.router.navigate(['/home']);
        
      }));
      this.PushAlert('Success', goodbyemsg );
    }catch(e){
      this.PushAlert('Error', e );
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
