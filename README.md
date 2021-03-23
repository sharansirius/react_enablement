# Project Setup as on MAR 2021

- [Create React Application](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------create-react-application----------------------)
- [Add SCSS to your applicaiton](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------add-scss-to-your-applicaiton----------------------)
- [Setup ESlint, Jest and Prettier](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------setup-eslint-jest-and-prettier----------------------)
- [Set up Pre-Commit Hook](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------set-up-pre-commit-hook----------------------)
- [Adding Redux](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------adding-redux----------------------)
- [Installing useful dev modules](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------installing-useful-dev-modules----------------------)
- [Adding Thunk](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------adding-thunk----------------------)
- [Possible Errors That I Came Across](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------possible-errors-that-i-came-across----------------------)
- [Annexure 1](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------annexure-1----------------------)

### -------------------- Create React Application --------------------

##### `npx create-react-app my-app --template typescript`

##### (or)

##### `yarn create react-app my-app --template typescript`

### -------------------- Add SCSS to your applicaiton --------------------

##### `npm i --save-dev node-sass`

##### (or)

##### `yarn add node-sass -D`

Rename the App.css file to App.scss and change the path where ever it is being imported

Try running application

##### `npm start`

### -------------------- Setup ESlint Jest and Prettier --------------------

There are two ways to Install eslint

- Using direct commands (airbnb - a popular style guide, pelase read annexure 1 for more info)
- Installing the eslint globally

#### Using direct commands - Approach 1

Note, ESLint is installed with create-react-app, so you don’t need to explicitly install it. We will install the packages for Airbnb config. This command will work with yarn or npm.

```sh
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript eslint-plugin-jest
```

```sh
npx install-peerdeps --dev eslint-config-airbnb
```

- create .eslintrc.js

```sh
  module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      'linebreak-style': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ]
    }
  };
```

- Please add below piece of code to scripts section is package.json

```sh
  "scripts": {
    "format": "prettier --write src/**/*.ts{,x}",
    "lint": "tsc --noEmit && eslint src/**/*.ts{,x}",
    "lint:fix": "eslint --fix ."
  }
```

#### Installing the eslint globally - Approach 2

If you want you want to follow any other design system and if you are okie to install ESlint in your system globally, you can run the following commands and it will take care of creating the eslint config file, downloading all the eslint dependencies.

##### `npm install -g eslint`

##### (or)

##### `yarn global add eslint`

##### `eslint --init`

You will be asked some series of questions, please find more details about it in the annexure 1. After the whole process is done you will see .eslintrc"js/json/yaml" getting generated. You might have different set of items in extends section of the file, based on what options that you are chosing during the questionare. But make sure rest of the sections match with above set of rules.

#### Installing the Prettier

##### `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`

##### (or)

##### `npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev`

#### Installing Jest

##### `npm i @testing-library/react react-test-renderer jest-dom --save-dev`

##### (or)

##### `yarn add -D @testing-library/react react-test-renderer jest-dom`

- Please add below piece of code to scripts section is package.json

```sh
  "scripts": {
    "format": "prettier --write src/**/*.ts{,x}",
    "lint": "tsc --noEmit && eslint src/**/*.ts{,x}",
    "lint:fix": "eslint --fix ."
  }
```

Try running application once again to make sure it is all running without any errors

##### `npm start`

### -------------------- Set up Pre-Commit Hook --------------------

Husky is a tool that allows to set up Git Hooks easily. We could set up a pre-commit hook with husky that will make sure the ESLint and Prettier scripts are run before the code is committed to your repository.

##### `npm install --save-dev husky`

```sh
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  }
```

### -------------------- Adding Redux --------------------

##### `npm install redux react-redux`

##### (or)

##### `yarn add redux react-redux`

We should install their types as development dependencies to help TypeScript understand the libraries.

##### `npm install -D @types/redux @types/react-redux`

### -------------------- Adding Thunk --------------------

##### `npm install redux-thunk `

##### (or)

##### `yarn add redux-thunk `

###### Okie, what is Thunk

With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store. Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

##### `npm install @types/redux-thunk --dev`

##### (or)

##### `yarn add @types/redux-thunk -D`

### -------------------- Installing useful DEV modules --------------------

##### `npm install redux-devtools-extension redux-logger --dev`

##### (or)

##### `yarn add -D redux-devtools-extension redux-logger`

The above two tools will help in logging the store and action objects when ever they are manipulated.

```sh

  import { createStore, applyMiddleware } from 'redux'
  import { composeWithDevTools } from 'redux-devtools-extension'
  import logger from 'redux-logger'
  import thunk from 'redux-thunk'

  import rootReducer from './rootReducer'

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  )

  export default store;

```

### -------------------- Possible Errors That I Came Across --------------------

- If you come across some error like " Couldn't find a declaration file for module 'react "

##### `npm install @types/react`

##### (or)

##### `yarn add @types/react`

That should solve your issue, while I was setting up this project that was common setup issue.

- In .eslintrc.json/js, what ever style approach you are taking, make sure that is put on the top in the extends array for example

```sh
  module.exports = {
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
    ]
```

```sh
  module.exports = {
    extends: [
      'standard',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
    ]
```

### -------------------- Annexure 1 --------------------

#### Series of questions asked while setting up the eslint with approach 2 where we are using eslint installed globally.

#### How would you like to use ESLint?

#### To check syntax only =>

it helps you correct your syntax and make sure it conform to standard.

##### To check syntax and find problems =>

to help you check for syntax correctness and also help to find any problems in your code base

##### To check syntax, find problems, and enforce code style\_ =>

to help you check for syntax, find problem and enforce style, enforcing style means to conforms to a particular coding standard such as Airbnb, Google and other Standard coding style. But I always go for the last option the one with syntax, find problems and enforce code style

#### What type of modules does your project use?

##### Javascript module (import/export) =>

if your project has babel installed then you definitely need to choose this option. If you are working on a project such as React, Vue, Angular e.t.c they all use babel so you need choose this option.

##### CommonJS (require/exports) =>

this option is meant for commonJS that has nothing to do with babel, maybe your nodejs project and any other javascript project

#### Which framework does your project use?

##### React =>

if you are using react in/for your project then this option is for you

##### Vue =>

if you are using Vue in/for your project then this option is for you

##### None of these =>

if you are using neither React or Vue in your project choose this option

#### Where does your code run?

##### Browser =>

if your project runs on browser e.g React, Angular, Vue e.t.c then go for this option

##### Node =>

if your project is a node based then gladly choose this option

#### How would you like to define a style for your project?

##### Use a popular style guide =>

- This allows you to choose from set of popular style such as Airbnb,Standard and Google style guide, it is advisable to choose this option in order for you to follow popular and most used style guide and i will be choosen this option in this post.
- Answer questions about your style: This is for custom style guide
- Inspect your JavaScript file(s).: custom style guide

Comparision between popular style guides in the market
![Image](https://miro.medium.com/max/4800/1*K51eiJl-y9IfnWFK4IcHCQ.png)

#### What format do you want your config file to be in?

##### Javascript =>

whether you want your eslint config file to be in .js file

##### YAML =>

whether you want your eslint config file to be in .yaml file

##### JSON =>

whether you want your eslint config file to be in .json file you can choose any option in this section

after you have chosen your preferred configuration file type it will then prompt you to install all necessary dependencies. after all neccessary dependencies has been successfully installed it will now generate a config file with ".eslintrc"."js/json/yaml".

References:

1. https://brygrill.medium.com/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97
2. https://betterprogramming.pub/comparing-the-top-three-style-guides-and-setting-them-up-with-eslint-98ea0d2fc5b7
