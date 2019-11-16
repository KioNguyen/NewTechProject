import { Component, OnInit } from '@angular/core';
import { User } from '../../../user';
import { UserService } from '../../../Services/user.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'navHeader.component.html',
  selector: 'navHeader'
})

export class navHeaderComponent implements OnInit{
  private

  constructor( private router: Router,  private userService: UserService){}

  ngOnInit(){

  }
  newUser(event: any){
    event.preventDefault();
    this.userService.setter(new User());
    this.router.navigate(['/register'])
  }
  login(event:any){
    event.preventDefault();
    this.router.navigate(['/login']);
  }

}
