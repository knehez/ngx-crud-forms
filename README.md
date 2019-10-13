# ngx-crud-forms
``ngx-crud-forms`` is an Angular module, which creates UI elements directly from your business objects.
The module performs client-side authorization tasks too.

Detailed documentation is coming soon.

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

## Contributors

### Installing for contributors
To develop the package, firstly you should install it in the following way:

```sh
npm install                               # install dependencies of the wrapper project
cd projects/ngx-crud-forms && npm install # install dependencies of the package
cd ../..
ng build ngx-crud-forms                   # build the package
cd dist/ngx-crud-forms
npm link                                  # create a local link to the built package
cd ../..
npm link ngx-crud-forms                   # link the package to the wrapper project
```

### Deployment for contributors
To deploy the package, do the following:
- In a terminal, run the following command: ``ng build ngx-crud-forms --watch``
- When the package is built, then open another terminal window and run: ``npm install && npm start``

The project is available on ``localhost:4200``, and recompiles itself when changes are made to the code.

### Running tests
To run the unit tests of the package, run the following command:

```sh
ng test ngx-crud-forms
```

### Versioning and building
To increment the version number, run:

```sh
cd projects/ngx-crud-forms
npm version [ major | minor | patch ]
```

To build the package, run: ``npm run build-package``

After that, check the generated .tgz file in ``dist/ngx-crud-forms``.

If you found it right, you can publish the package with: ``npm publish <name of the .tgz>``
