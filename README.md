# Angular18Tuotorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



# Angular Life Cycle Hooks

## ngOnInit:
Get's called on once in the whole life cycle event of a component. It get's called once the all input values has been intialized, but not rendered on the UI screen. (After Intiailizing the Input Value but before it renderes on the screen. )


## ngOnChanges 
In Angular, the ngOnChanges lifecycle hook is called whenever any data-bound input property of a component or directive changes. This hook is part of Angular's component lifecycle and provides a way to react to changes in input properties that are passed from a parent component to a child component.

When does ngOnChanges get called?
 1- When the input properties change:
 2- After the component is initialized:

 When is ngOnChanges NOT called?
 1-   Direct modification of component properties:
 2-   Changes within a child component