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

  videoChapters = [
    {
      id: 1,
      timestamp: '00:05',
      title: 'First chapter'
    },
    {
      id: 2,
      timestamp: '05:00',
      title: 'Second chapter'
    }
  ];

  users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      json: [1, 2, 3],
      videoChapters: [
        {
          id: 1,
          timestamp: '00:05',
          title: 'First chapter'
        },
        {
          id: 2,
          timestamp: '05:00',
          title: 'Second chapter'
        }
      ],
      file: null
    },
    {
      id: 2,
      firstName: 'Gipsz',
      lastName: 'Jakab',
      email: 'gipsz.jakab@example.com',
      gender: 'Female',
      json: [1, 2, 3, 4],
      file: {
        id: '1',
        name: 'asd.txt'
      },
      secretField: 'secret'
    }
  ];

  constructor(http: HttpClient) {
    super(http);
  }

  getAll() {
    console.log('GET ALL', [...this.users]);
    return Promise.resolve([...this.users]);
  }

  getAllSync(objectName: string) {
    if (objectName === 'videoChapters') {
      return Promise.resolve([...this.videoChapters]);
    }

    return this.getAll();
  }

  getOne(id: number) {
    for (const user of this.users) {
      if (user.id === id) {
        console.log('GET ONE', user);
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
