import { Injectable } from '@angular/core';
import { Member } from './member';
import { Trainer } from './trainer';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  trainer:Trainer;
  member:Member;
   flag:Number;
  constructor(private route: ActivatedRoute,private router: Router) { }
//admin login
  authenticate(username, password) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('adminsession', username)
      return true;
    } else {
      return false;
    }
  }


  isTrainerLoggedIn() {
    
    let usert = sessionStorage.getItem('currentTrainer')
    console.log('trainer login flag'+!(usert === null))
    return !(usert === null)
  }


  isMemberLoggedIn() {
    let userm = sessionStorage.getItem('currentMember')
    console.log('member login flag'+!(userm === null))
    return !(userm === null)
  }

  isAdminLoggedIn() {
    let adm = sessionStorage.getItem('adminsession')
    console.log('admin login flag'+!(adm === null))
    return !(adm === null)
  }

  logOut() {
    let userme = sessionStorage.getItem('currentMember')
    let usertr = sessionStorage.getItem('currentTrainer')
    let admin = sessionStorage.getItem('adminsession')
    if(userme === null)
    {
      this.router.navigate[('loginm')]
    }
    else{
      sessionStorage.removeItem('userm');
      sessionStorage.removeItem('currentMember');
    }

    if(usertr === null)
    {
      this.router.navigate[('logint')]
    }
    else{
      sessionStorage.removeItem('usert');
      sessionStorage.removeItem('currentTrainer');
    }
    
    if(admin === null)        
    {
      this.router.navigate[('logina')]
    }
    else{
      sessionStorage.removeItem('admin');
      sessionStorage.removeItem('adminsession');
    }

  }
}
