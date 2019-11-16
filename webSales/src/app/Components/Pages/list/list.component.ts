import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../user';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private user: User[];
  constructor(private _userService : UserService) { }
    

  ngOnInit() {
    this.readUser();
  }

  readUser(){
    this._userService.getUser().subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
      
    )
  }



}
