import { Component, OnInit } from '@angular/core';
import User from './user';
import { GeneralRestService } from 'ngx-crud-forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [ { provide: GeneralRestService, useClass: UserService } ]
})
export class DemoComponent implements OnInit {

  entity: object;
  entityName: string;
  users: User[];
  permissions: string[];

  constructor() { }

  ngOnInit() {
    this.entity = new User(); // the decorated model class
    this.entityName = 'user'; // endpoint to call, and shown name of the model
    this.permissions = [ 'manager', 'viewer' ]; // permissions of the user, e.g. it can come from localStorage or cookies
  }

}
