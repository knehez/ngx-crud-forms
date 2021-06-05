import { InputBase } from './inputBase';

export class MultipleFileInput extends InputBase<string> {
  controlType = 'multipleFile';

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
