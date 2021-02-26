import { Injectable } from '@angular/core';
import { InputBase } from './form-elements/inputBase';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

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
        (group[input.key] as FormControl).setValue(input.value || null);
      }

      if (input.controlType === 'videochapter') {
        const fb = new FormBuilder();
        group[input.key] = fb.array([]);

        const chapters = input.value || [];

        for (const chapter of chapters) {
          group[input.key].push(fb.group(chapter));
        }
      }
    });

    return new FormGroup(group);
  }
}
