# Project Setup as on FEB 2021

#### Create React Application

##### `npx create-react-app my-app --template typescript`

##### or

##### `yarn create react-app my-app --template typescript`

#### Add SCSS to your applicaiton

##### `npm i --save-dev node-sass`

Try running application 

##### `npm start`, 

if there is some error like " Couldn't find a declaration file for module 'react "

##### `npm install @types/react`

That should solve your issue, while I was setting up this project that was common setup issue.


#### Setup eslint

I prefer installing eslint this way, this approach will take care of creating the eslint config file, downloading all the eslint dependencies. If you prefer not to install eslint globally, feel free to figure out other solutions online.

##### `npm install -g eslint`
##### `eslint --init`

You will be asked some series of questions and I ended up getting this eslint config file

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

#### Set up Pre-Commit Hook
husky is a tool that allows to set up Git Hooks easily. We could set up a pre-commit hook with husky that will make sure the ESLint and Prettier scripts are run before the code is committed to your repository.

##### `npm install --save-dev husky`
```sh
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  }
  ```