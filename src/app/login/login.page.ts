import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {AlertController} from '@ionic/angular';

//import {auth} from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LogEmail: string = "";
  LogPassword: string ="";


  
  constructor(private router: Router, private alert: AlertController, public afAuth: AngularFireAuth) { }

  // ToRegister(){
  //   this.router.navigate(["/register"]);
  // }


  // BtnToHome(){
  //   this.router.navigate(["/home"]);
  // }


  async logUser(){
    const {LogEmail , LogPassword} = this

      try{
        const res = await this.afAuth.signInWithEmailAndPassword(LogEmail,LogPassword)

        this.router.navigate(['/dashboard'])
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
