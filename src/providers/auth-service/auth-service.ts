import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
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
  currentUser: User;

  public login(credentials){
    if (credentials.email === null || credentials.password === null){
      return Observable.throw('Please insert credentials');
    }else{
      return Observable.create(observer => {
        let access = (credentials.password === "password" && credentials.email === "email");
        this.currentUser = new User('Simon', 'email@email.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials){
    if (credentials.email === null || credentials.password === null){
      return Observable.throw('Please insert credentials');
    }else{
      return Observable.create(observer => {
        observer.next();
        observer.complete();
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout(){
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next();
      observer.complete();
    });
  }

  constructor(public http: HttpModule) {
    console.log('Hello AuthServiceProvider Provider');
  }

}
