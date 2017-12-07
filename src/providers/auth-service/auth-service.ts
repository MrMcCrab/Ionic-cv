//Juuso Heinonen 1600400

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string){
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {
  
  // loginuser keeps track of the currently logged in user
  loginUser: User;


  // Code from old labwork, not being used
  // public login(credentials){
  //   if (credentials.email === null || credentials.password === null){
  //     return Observable.throw('Please insert credentials');
  //   }else{
  //     return Observable.create(observer => {
  //       let access = (credentials.password === "password" && credentials.email === "email");
  //       this.currentUser = new User('Simon', 'email@email.com');
  //       observer.next(access);
  //       observer.complete();
  //     });
  //   }
  // }

  // Code from old labwork, not being used
  // public register(credentials){
  //   if (credentials.email === null || credentials.password === null){
  //     return Observable.throw('Please insert credentials');
  //   }else{
  //     return Observable.create(observer => {
  //       observer.next();
  //       observer.complete();
  //     });
  //   }
  // }

  // Code from old labwork, not being used
  // public getUserInfo(): User {
  //   return this.currentUser;
  // }

  // Code from old labwork, not being used
  // public logout(){
  //   return Observable.create(observer => {
  //     this.currentUser = null;
  //     observer.next();
  //     observer.complete();
  //   });
  // }

  constructor() {
    console.log('Hello AuthServiceProvider Provider');
  }

}
