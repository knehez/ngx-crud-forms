export interface ILinkedData {
    key: string;
    value: string;
}

export class InputBase<T> {
    value: T;
    defaultValue: T;
    key: string;
    header: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    style: { [klass: string]: any; };
    hidden: boolean;
    hideOnCreate: boolean;
    editable: boolean;
    format: 'json' | string;
    dateFormat: string;
    linkedObject: string;
    cols: number;
    rows: number;
    linkedData: {};
    constructor(options: {
        value?: T,
        defaultValue?: T;
        key?: string,
        header?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        type?: string,
        style?: { [klass: string]: any; };
        hidden?: boolean,
        hideOnCreate?: boolean,
        editable?: boolean,
        format?: 'json' | string;
        dateFormat?: string;
        cols?: number;
        rows?: number;
        linkedObject?: string,
        linkedData?: ILinkedData;
    } = {}) {
        this.value = options.value;
        this.defaultValue = options.defaultValue;
        this.key = options.key || '';
        this.header = options.header || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.type = options.type || 'text';
        this.style = options.style || {};
        this.hidden = options.hidden || false;
        this.hideOnCreate = options.hideOnCreate || false;
        this.editable = options.editable !== false;
        this.format = options.format || null;
        this.dateFormat = options.dateFormat || '';
        this.cols = options.cols === undefined ? 20 : options.cols;
        this.rows = options.rows === undefined ? 3 : options.rows;
        this.linkedObject = options.linkedObject || null;
        this.linkedData = options.linkedData || null;
    }
}
