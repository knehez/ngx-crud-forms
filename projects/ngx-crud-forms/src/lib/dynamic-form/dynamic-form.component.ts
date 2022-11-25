import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { InputBase } from './form-elements/inputBase';
import { InputControlService } from './inputControl.service';

@Component({
    selector: 'lib-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [InputControlService],
})
export class DynamicFormComponent implements OnInit {

    @Input() isNewModel: boolean = false;
    @Input() inputs: InputBase<any>[] = [];
    @Output() saved = new EventEmitter<boolean>();
    form: UntypedFormGroup;

    constructor(private qcs: InputControlService) { }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.inputs);
    }

    getPayload(): any {

        const payload = Object.assign({}, this.form.value);

        if (!this.form.valid) {
            return null;
        }

        this.inputs.forEach(element => {
            // add hidden, non modified data, because these were hidden on the form
            if (element.hidden) {
                payload[element.key] = element.value;
            }

            // parse JSON data
            if (element.format === 'json' && typeof payload[element.key] === 'string') {
                try {
                    payload[element.key] = JSON.parse(payload[element.key]);
                } catch (err) {
                    payload[element.key] = element.value;
                }
            }
        });

        return payload;
    }
}
