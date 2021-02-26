import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { InputBase } from './form-elements/inputBase';
import { FileHandlerService } from './fileHandler.service';
import { TextboxInput } from './form-elements/textBox';

@Component({
    selector: 'lib-input',
    templateUrl: './dynamic-form-input.component.html',
    styleUrls: ['./dynamic-form-input.component.css'],
})
export class DynamicFormInputComponent {
    @Input() isNewModel: boolean = false;
    @Input() input: InputBase<any> = new TextboxInput({ key: 'default' });
    @Input() form: FormGroup = new FormGroup({ default: new FormControl() });

    get isValid() {
        if (this.input.hidden || this.input.hideOnCreate && this.isNewModel) {
            return true;
        }

        return this.form.controls[this.input.key].valid;
    }

    constructor(private fileHandlerService: FileHandlerService) { }

    debug(obj) {
        console.dir(obj);
        return obj;
    }

    public onFileChange(event): void {
        this.fileHandlerService.onFileChange(event, this.form);
    }

    deleteVideoChapter(key, i) {
        const array = this.form.get(key) as FormArray;
        array.removeAt(i);
    }

    addVideoChapter(key) {
        const fb = new FormBuilder();
        const array = this.form.get(key) as FormArray;
        array.push(fb.group({
            id: null,
            timestamp: ['', Validators.pattern(/^[0-9]{2}:(0|1|2|3|4|5)[0-9]$/)], // MM:SS
            title: ''
        }));
    }
}

