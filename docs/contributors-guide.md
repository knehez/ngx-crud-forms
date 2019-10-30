# Contributors' Guide
Notes for contributors of the ngx-crud-forms package.

## Installing of the project
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

## Deployment of the project
To deploy the package, do the following:
- In a terminal, run the following command: ``ng build ngx-crud-forms --watch``
- When the package is built, then open another terminal window and run: ``npm install && npm start``

The project is available on ``localhost:4200``, and recompiles itself when changes are made to the code.

## Running tests
To run the unit tests of the package, run the following command:

```sh
ng test ngx-crud-forms
```

### Versioning and building the package
To increment the version number, run:

```sh
cd projects/ngx-crud-forms
npm version [ major | minor | patch ]
```

To build the package, run: ``npm run build-package``

After that, check the generated .tgz file in the ``dist/ngx-crud-forms`` directory.

If it seems right, you can publish the package with: ``npm publish <name of the .tgz>``
