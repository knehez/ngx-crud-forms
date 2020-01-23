import { Injectable } from '@angular/core';
import { InputBase } from './form-elements/inputBase';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable()
export class InputControlService {
  constructor() { }

  toFormGroup(inputs: InputBase<any>[]) {
    const group: any = {};

    inputs.forEach(input => {
      if (!input.hidden) {
        group[input.key] = input.required
          ? new FormControl({ value: input.value || '', disabled: !input.editable }, Validators.required)
          : new FormControl({ value: input.value || '', disabled: !input.editable });
      }

      // show JSON data as string
      if (input.format === 'json') {
        (group[input.key] as FormControl).setValue(JSON.stringify(input.value));
      }

      // handle file upload elements
      if (input.type === 'file') {
        group[input.key + '_data'] = new FormControl({ value: '' });
      }
    });

    return new FormGroup(group);
  }
}
