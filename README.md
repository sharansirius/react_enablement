# Project Setup as on FEB 2021
- [Create React Application](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------create-react-application----------------------)
- [Add SCSS to your applicaiton](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------add-scss-to-your-applicaiton----------------------)
- [Setup eslint](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------setup-eslint----------------------)
- [Set up Pre-Commit Hook](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------set-up-pre-commit-hook----------------------)
- [Adding Redux](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------adding-redux----------------------)
- [Okie, what is that Thunk thing](https://github.com/sharansirius/react_enablement/tree/level-3-2#----------------------okie-what-is-that-thunk-thing----------------------)




### --------------------  Create React Application  -------------------- 

##### `npx create-react-app my-app --template typescript`

##### or

##### `yarn create react-app my-app --template typescript`

### --------------------  Add SCSS to your applicaiton  -------------------- 

##### `npm i --save-dev node-sass`

##### or

##### `yarn add node-sass -D (or) yarn add node-sass --dev`

Rename the App.css file to App.scss and change the path where ever it is being imported

Try running application 

##### `npm start`

if there is some error like " Couldn't find a declaration file for module 'react "

##### `npm install @types/react`

That should solve your issue, while I was setting up this project that was common setup issue.


###  --------------------  Setup eslint  -------------------- 

I recommend and prefer installing eslint this way, this approach will take care of creating the eslint config file, downloading all the eslint dependencies. If you prefer not to install eslint globally, feel free to figure out other solutions online.

##### `npm install -g eslint`
##### `eslint --init`

You will be asked some series of questions and ended up getting eslint config file something like below. You can skip reading this section if you know what option you have to choose

#### How would you like to use ESLint?

#### To check syntax only => 
it helps you correct your syntax and make sure it conform to standard.
##### To check syntax and find problems => 
to help you check for syntax correctness and also help to find any problems in your code base
##### To check syntax, find problems, and enforce code style_ => 
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

#### What format do you want your config file to be in?

##### Javascript => 
whether you want your eslint config file to be in .js file
##### YAML => 
whether you want your eslint config file to be in .yaml file
##### JSON => 
whether you want your eslint config file to be in .json file you can choose any option in this section

after you have chosen your preferred configuration file type it will then prompt you to install all necessary dependencies. after all neccessary dependencies has been successfully installed it will now generate a config file with ".eslintrc"."js/json/yaml".

```sh
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
  }
};
```

Please add below piece of code to scripts section

```sh
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix ."
  }
```

Try running application once again to make sure it is all running without any errors

##### `npm start`

### --------------------  Set up Pre-Commit Hook  -------------------- 
husky is a tool that allows to set up Git Hooks easily. We could set up a pre-commit hook with husky that will make sure the ESLint and Prettier scripts are run before the code is committed to your repository.

##### `npm install --save-dev husky`
```sh
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  }
  ```

###  --------------------  Adding Redux  -------------------- 


##### `npm install redux react-redux redux-thunk`

We also have to install their types as development dependencies to help TypeScript understand the libraries.

##### `npm install -D @types/redux @types/react-redux @types/redux-thunk`


###  --------------------  Okie, what is that Thunk thing  -------------------- 
With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store. Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.



##### `npm i @testing-library/react react-test-renderer jest-dom --save-dev`