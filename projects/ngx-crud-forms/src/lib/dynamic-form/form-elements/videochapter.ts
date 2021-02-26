import { InputBase } from './inputBase';

export class VideoChapterInput extends InputBase<string> {
    controlType = 'videochapter';
    options: { key: string, value: string }[] = [];
    multipleSelect;

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
        this.multipleSelect = options['multipleSelect'] || false;
    }
}
