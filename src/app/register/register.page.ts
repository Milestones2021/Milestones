import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import {AlertController} from '@ionic/angular';
import { UserService } from '../users.service';
//import {auth} from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  

    RegEmail: string = "";
    RegPassword: string ="";
    RegConfirmPassword: string ="";


    constructor(public user: UserService, private router: Router, private alert: AlertController, private afAuth: AngularFireAuth, private firestore: AngularFirestore)  { }

  // ToLogin(){
  //   this.router.navigate(["/login"]);
  // }


  // BtnToHome(){
  //   this.router.navigate(["/home"]);
  // }


  

  async RegUser(){



    const {RegEmail, RegPassword, RegConfirmPassword} = this

    if(RegPassword !== RegConfirmPassword){
      //return console.log("Passwords do not Match");
      this.PushAlert('Error!','Passwords do not match!');
      return false;
    }

    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(RegEmail,RegPassword);
      

      
        

      if(res.user){
        this.user.setUser({
          email: res.user.email,
          uid: res.user.uid
        })



        this.firestore.doc(`users/${res.user.uid}`).set({
          RegEmail
        })


 
 
        this.PushAlert('Success','Registration Successful. Redirecting you to login')
        this.router.navigate(['/login'])
  }

      
      
      
      
      //const res2 = await this.firestore.collection('users').doc(res.user.uid).set({}); 
      
    }catch(error){
      //console.dir(error);
      this.PushAlert('Error',error.message);
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