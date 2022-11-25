import { Injectable } from '@angular/core';
import { InputBase } from './form-elements/inputBase';
import { UntypedFormControl, Validators, UntypedFormGroup } from '@angular/forms';

@Injectable()
export class InputControlService {
  constructor() { }

  toFormGroup(inputs: InputBase<any>[]) {
    const group: any = {};

    inputs.forEach(input => {
      if (!input.hidden) {
        group[input.key] = input.required
          ? new UntypedFormControl({ value: input.value || '', disabled: !input.editable }, Validators.required)
          : new UntypedFormControl({ value: input.value || '', disabled: !input.editable });
      }

      // show JSON data as string
      if (input.format === 'json') {
        (group[input.key] as UntypedFormControl).setValue(JSON.stringify(input.value));
      }

      // handle file upload elements
      if (input.type === 'file') {
        (group[input.key] as UntypedFormControl).setValue(input.value || null);
      }
    });

    return new UntypedFormGroup(group);
  }
}
