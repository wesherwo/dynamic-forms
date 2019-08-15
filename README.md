# dynamic-forms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Getting Started
Download or clone the repository https://github.com/wesherwo/angular-jump-project.git

Run `npm install` to install required dependancies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `node server` for the database server and connecting users.

## Database inputs

As an example there can be a database running with the form data.
The test DB that was used was made with the following mySql instructions.

create database if not exists clicksource;
use clicksource;
create table forms( id int not null auto_increment, form text, primary key(id));
insert into forms(form) values('[{"type":"Textbox","options":{"key": "username","label": "Username","order": 1}},{"type":"Textbox","options":{"key": "password","label": "Password","order": 2,"inLine":true}},{"type":"Textbox","options":{"key": "firstname","label": "First name","order": 3}},{"type":"Textbox","options":{"key": "lastname","label": "Last name","order": 4,"inLine":true}}]');
insert into forms(form) values('[{"type":"Textbox","options":{"key": "username","label": "Username","order": 1}},{"type":"Textbox","options":{"key": "password","label": "Password","order": 2,"inLine":true}}]');
create table users( id int not null auto_increment, username varchar(255), password varchar(255), firstname varchar(255), lastname varchar(255), primary key(id));
create table managers( id int not null auto_increment, username varchar(255), password varchar(255), firstname varchar(255), lastname varchar(255), primary key(id));

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
