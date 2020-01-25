import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
    providedIn: 'root'
  })
  export class FileHandlerService {

    public onFileChange(event, form: FormGroup): void {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
          const reader = new FileReader();
          reader.onload = (e) => {
            form.patchValue({
              [event.target.id] : fileList[0].name,
              [event.target.id + '_data'] : {name: fileList[0].name, data: e.currentTarget['result']}
            });
          };
          reader.readAsDataURL(fileList[0]);
        }
      }
  }
