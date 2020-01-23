import { Injectable } from '@angular/core';
import { GeneralRestService } from 'ngx-crud-forms';
import { HttpClient } from '@angular/common/http';

/**
 * UserService extends the GeneralRestService,
 * so the developer can define custom syncronization behavior
 * (e.g. call custom endpoints, or store entities only in memory like in this example).
 */
@Injectable()
export class UserService extends GeneralRestService {

  users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      json: [1, 2, 3]
    },
    {
      id: 2,
      firstName: 'Gipsz',
      lastName: 'Jakab',
      email: 'gipsz.jakab@example.com',
      gender: 'Female',
      json: [1, 2, 3, 4]
    }
  ];

  constructor(http: HttpClient) {
    super(http);
  }

  getAll() {
    return Promise.resolve(this.users);
  }

  getAllSync() {
    return this.getAll();
  }

  save(obj) {
    console.log(obj);

    obj.id = this.users[this.users.length - 1].id + 1;
    this.users.push(obj);
    return Promise.resolve({ id: obj.id });
  }

  file(obj) {
    return Promise.resolve(true);
  }

  update(obj) {
    console.log(obj);

    for (const i in this.users) {
      if (obj.id === this.users[i].id) {
        this.users[i] = obj;
        return Promise.resolve({ success: true, id: obj.id });
      }
    }

    Promise.reject(false);
  }

  delete(obj) {
    this.users.splice(this.users.indexOf(obj), 1);
    return Promise.resolve({ success: true });
  }
}
