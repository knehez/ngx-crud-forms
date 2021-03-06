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
      roles: [
        {
          id: 1,
          roleName: 'guest'
        },
        {
          id: 2,
          roleName: 'manager'
        }
      ],
      json: [1, 2, 3],
      file: null
    },
    {
      id: 2,
      firstName: 'Gipsz',
      lastName: 'Jakab',
      email: 'gipsz.jakab@example.com',
      gender: 'Female',
      json: [1, 2, 3, 4],
      roles: [
        {
          id: 2,
          roleName: 'manager'
        },
        {
          id: 3,
          roleName: 'admin'
        },
        {
          id: 4,
          roleName: 'asdasdasdasdasdasda'
        }
      ],
      file: {
        id: '1',
        name: 'asd.txt'
      },
      secretField: 'secret'
    }
  ];

  roles = [
    {
      id: 1,
      roleName: 'guest'
    },
    {
      id: 2,
      roleName: 'manager'
    },
    {
      id: 3,
      roleName: 'admin'
    },
    {
      id: 4,
      roleName: 'asdasdasdasdasdasda'
    }
  ];

  constructor(http: HttpClient) {
    super(http);
  }

  getAll() {
    return Promise.resolve([...this.users]);
  }

  getAllSync(objectName: string) {
    if (objectName === 'roles') {
      return Promise.resolve([...this.roles]);
    }

    return this.getAll();
  }

  getOne(id: number) {
    for (const user of this.users) {
      if (user.id === id) {
        return Promise.resolve(Object.assign({}, user));
      }
    }

    return Promise.reject(false);
  }

  save(obj) {
    console.log('SAVE', obj);
    const objToSave = Object.assign({}, obj);
    objToSave.id = this.users[this.users.length - 1].id + 1;
    this.users.push(objToSave);
    return Promise.resolve({ id: objToSave.id });
  }

  file(obj) {
    return Promise.resolve(true);
  }

  update(obj) {
    console.log('UPDATE', obj);
    const objToUpdate = Object.assign({}, obj);

    for (const i in this.users) {
      if (objToUpdate.id === this.users[i].id) {
        this.users[i] = objToUpdate;
        return Promise.resolve({ success: true, id: objToUpdate.id });
      }
    }

    Promise.reject(false);
  }

  delete(obj) {
    console.log('DELETE', obj);
    this.users.splice(this.users.indexOf(obj), 1);
    return Promise.resolve({ success: true });
  }
}
