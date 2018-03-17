# ase2-typescript-01

Contains source code snippets of the TypeScript slides.
The files numbers in the src folder correspond with the chapter numbers
of the slides.

<br/>

**Content**

* 01-Variables
* 02-Types
* 03-Template Strings
* 04-Objects
* 05-Functions
* 06-this
* 07-Arrays und Iterables
* 08-Higher order functions
* 09-Closure (Funktionsabschluss)
* 10-Classes
* 11-Decorators
* 12-Destructing (Zerlegen)

<br/>

## Install Typescript

**Prerequisites:**

* node.js
* npm

<br/>

**Installation**

For npm-users:

    npm install -g typescript

<br/>

## Transpile and run from console

Clone the git-Repo

    git clone https://github.engineering.zhaw.ch/bacn/ase2-typescript-01
    cd ase2-typescript-01

At the command line, run the TypeScript transpiler:


    tsc 00-run.ts

The result will be a file **00-run.js** which contains the transpiled JavaScript. Because of the
import statement of the files from the **src folder**, all typescript file will get
transpiled.

Now we are ready to run the transpiled JavaScript file with **node**:

    node 00-run.js

<br/>

## Transpile and run with WebStorm

Install Webstorm from here

https://confluence.jetbrains.com/display/WI/WebStorm+EAP 

## Enable the TypeScript Service

Open the Properties window and filter for TypeScript

![./assets/webstrom-typescript-service-properties.png](./assets/webstrom-typescript-service-properties.png)

## Open the TypeScript Tool Window and Compile (Transpile to js)

In the WebStrom menu choose View->Tool windows->TypeScript

![./assets/webstrom-typescript-tool-window.png](./assets/webstrom-typescript-tool-window.png)

Press the compile button in the TypeScript tool window. You can recognize that all *ts files get an arrow.

## Run the TypeScript files with Webstorm

* Open Webstrom and press Open [File Open]
* Navigate to the folder with the typescript files
* In the Webstrom project view open the file **00-run.ts**


### Create a run configuration
* Klick in the Menu on Run->Run...
* In the dialog press [Edit Run Configurations]
* In the Edit Run Configuration dialog press **[+]** and select **node.js**
* In the **name field** enter a title
* In the JavaScript field choose the file  **00-run.js**

![./assets/run-config-node.png](./assets/run-config-node.png)


### Run the compiled JavaScript file
* Click [Apply] and [Run]
* The console shows the output of the different code snippets

<br/>


