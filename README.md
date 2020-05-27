# ngx-crud-forms
``ngx-crud-forms`` is an Angular module, which creates UI elements directly from your business objects.
The module performs client-side authorization tasks too.

<img src="https://raw.githubusercontent.com/knehez/ngx-crud-forms/master/docs/img/crud-table-screenshot.png" width="600" height="242" /><img src="https://raw.githubusercontent.com/knehez/ngx-crud-forms/master/docs/img/modal-form-screenshot.png" width="188" height="242" />

## Installing the library
To use ``ngx-crud-forms``, you should import CSS files from other modules to your project.

1) Run the following command: ``npm install --save bootstrap primeng primeicons @ng-select/ng-select``

2) In your `angular.json` copy the following lines to the `styles` property of your project:

    ```ts
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "node_modules/primeng/resources/themes/nova-light/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    "node_modules/primeicons/primeicons.css",
    "node_modules/@ng-select/ng-select/themes/default.theme.css"
    ```

3) Install ``ngx-crud-forms``: ``npm install --save ngx-crud-forms``

3) Import `CrudTableLibModule` in your `AppModule`:

    ```ts
    import { CrudTableLibModule } from 'ngx-crud-forms';

    @NgModule({
        ...
        imports: [
            BrowserModule,
            CrudTableLibModule
        ],
        ...
    })
    export class AppModule { ...
    ```

## Using the library

### FormField decorator
You can put the `FormField` decorator to your business object's fields to define information about its visualisation.

The `FormField` decorator has the following input properties. All of these are optional.

| Name | Type | Default value | Description |
|------|------|---------------|-------------|
| className | string | null | Type of the form element that should be shown. One of these values: <ul><li>`'TextboxInput'`</li><li>`'TextareaInput'`</li><li>`'DropdownInput'`</li><li>`'RadioInput'`</li><li>`'CheckBoxInput'`</li><li>`'CalendarInput'`</li><li>`'FileInput'`</li></ul> |
| defaultValue | string | null | Default value of the form element. |
| format | string | null | Standard format of string data, if applicable. Allowed value(s): `'json'`. |
| header | string | '' | Label of the form element. |
| required | boolean | false | Indicates, whether the form element's value is required or not. |
| order | number | 1 | Position of the form element on the generated form. |
| type | string | 'text' | Type of the `input` element, where applicable (e.g. email, password, number). |
| hidden | boolean | false | Indicates whether the form element should be hidden (e.g. for IDs). |
| hideOnCreate | boolean | false | Indicates whether the form element should be hidden when creating a new record. |
| editable | boolean | true | Indicates whether the form element can be modified. |
| linkedObject | string | null | Name of the linked object. |
| linkedData | object | null | Name and field of the linked object (e.g. `{entity: 'task', value: 'taskName'}`) |

#### Usage example

```ts
class User {
    @FormField({
        className: 'TextboxInput',
        header: 'Id',
        required: true,
        type: 'number',
        order: 1,
        hidden: true
    })
    id: number;
}  
```

### Permissions decorator
You can put the `Permissions` decorator to your business object to define authorization permissions.

Input object of the `Permissions` decorator defines Access Control Entries. The entries are allow operations on an object to different roles.

There are two built-in roles in the system: `'admin'` and `'*'`.
  - `'admin'` is the top-level role, it is the default role in case of any error (e.g. when no role is defined for an operation).
  - `'*'` represents that the given operation is allowed to any roles in the system.<br>
Beyond these, you can define roles with any names in your system.

The `Permissions` decorator waits an object as input parameter with the following fields: `create`, `read`, `update`, `delete`.<br>
The fields can contain the `'*'` string (so any role can do the operation) or a string array with the allowed roles for the operation.
If no role is defined for an operation, the library defines the `'admin'` role for it by default.

To use the values defined in the decorator on server-side, please consult [this example implementation](https://github.com/knehez/dynamicforms/blob/master/src/backend/routes.ts#L116).

#### Usage example
```ts
@Permissions({
    create: ['admin'],
    read: '*',
    update: ['admin', 'manager'],
    delete: ['admin']
})
export default class User { }  
```

### CRUD table
The Crud Table Component can be used in your Angular project to visualise your data.

You can put the `<lib-crud-table>` selector to your HTML code. It has the following input/output properties:

| Name | Input/Output | Type | Description |
|------|--------------|------|-------------|
| entity | Input | any | An instance of the class to visualize (e.g. `new User()`) |
| permissions | Input | string[] | Roles of the current user (e.g. `[ 'manager', 'viewer' ]`) |
| entityName | Input | string | Name of the entity. |
| itemsPerPage | Input | number | Number of items should shown in a page. |
| filter | Input | string | Value of the search field. |
| showAdd | Input | boolean | Indicates whether the 'Add' button should shown. |
| showEdit | Input | boolean | Indicates whether the 'Edit' button should shown. |
| showBack | Input | boolean | Indicates whether the 'Back' button should shown. |
| rowSelect | Output | Function | This function is called after a row is selected. |
| cellSelect | Output | Function | This function is called after a cell is selected. |
| backClicked | Output | Function |  This function is called after the Back button is clicked. |
| operationResult | Output | Function | This function is called after syncronization of data is ended. It gets a object with the following fields: `success` (boolean) - indicates if the operation was successful, `title` (string) - title of the operation result, `message` (string) - message of the operation result. |

#### Usage example
```html
<!-- userEntity is one instance of the User class [e.g. new User()] -->
<lib-crud-table
    [entityName]="'users'"
    [entity]="userEntity"
    [permissions]="[ 'manager', 'viewer' ]"
    [itemsPerPage]="5"
    (cellSelect)="userCellSelected($event)"
    (operationResult)="handleResult($event)"
    (backClicked)="goBack()">
</lib-crud-table>
```

## License
The module licensed under the MIT License.

## Contributors' Guide
You can find notes for contributors [here](https://github.com/knehez/ngx-crud-forms/tree/master/docs/contributors-guide.md).
