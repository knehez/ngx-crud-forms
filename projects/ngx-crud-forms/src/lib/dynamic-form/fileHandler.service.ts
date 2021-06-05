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
          [event.target.id]: {
            name: fileList[0].name,
            data: e.currentTarget['result']
          }
        });
      };
      reader.readAsDataURL(fileList[0]);
    }
  }

  private async base64encode(file) {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        resolve({
          name: file.name,
          data: e.currentTarget['result']
        });
      };
      reader.readAsDataURL(file);
    });
  }

  public async onMultipleFileChange(event, formGroup: FormGroup) {
    const fileList: FileList = event.target.files;
    if (fileList.length === 0) {
      return;
    }

    const actualFiles = formGroup.get(event.target.id).value || [];
    const newFiles = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < fileList.length; i++) {
      newFiles.push(await this.base64encode(fileList[i]));
    }

    const newFormValue = actualFiles.concat(newFiles);
    formGroup.patchValue({ [event.target.id]: newFormValue });
  }
}
