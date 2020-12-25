import { user } from './models/user.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable()
    export class UserService{
        private user: user;

        email: string;



         constructor(private afauth: AngularFireAuth,){

            this.afauth.authState.subscribe(user => {
                if(user) this.email = user.email;
              })

         }


         setUser(user:user){
             this.user= user;
         }



         getUID(){
             return this.user.uid
         }


 }