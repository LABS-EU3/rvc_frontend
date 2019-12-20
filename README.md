# ForkBook Frontend
## Recipe Version Control
 This is the Frontend code for the ForkBook application, you can find the latest deployed project at https://forkbook.co

### frontend can be found at https://zen-shaw-f09c20.netlify.com/register
 
## Team
|                                       [James Eneh](https://github.com/erozonachi)                                        |                                       [Carnun Marcus-Page](https://github.com/CarnunMP)                                        |                                       [Chinedu Nwume](https://github.com/chineducn)                                        |                                       [Samuel Mpere Annor](https://github.com/mpereannor)                                        |                                       [Kiyani Bamba](https://github.com/KiyaniBamba)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://avatars1.githubusercontent.com/u/35371532?s=460&v=4" width = "200" />](https://github.com/erozonachi)                       |                      [<img src="https://avatars0.githubusercontent.com/u/8897392?s=460&v=4" width = "200" />](https://github.com/CarnunMP)                       |                      [<img src="https://avatars1.githubusercontent.com/u/38956160?s=460&v=4" width = "200" />](https://github.com/chineducn)                       |                      [<img src="https://avatars1.githubusercontent.com/u/43270150?s=460&v=4" width = "200" />](https://github.com/mpereannor)                       |                      [<img src="https://avatars1.githubusercontent.com/u/38816592?s=460&v=4" width = "200" />](https://github.com/KiyaniBamba)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/erozonachi)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/CarnunMP)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/chineducn)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mpereannor)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/KiyaniBamba)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/eneh) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/carnun-marcus-page-672008177/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/chinedu-nwume-aa788431/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/mpereannor) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kiyanibamba/) |
|                                       [__Patrick Rodrigues__](https://github.com/RodPaDev)                                        |                                       [__Temitope Akinsoto__](https://github.com/temitopeakinsoto)                                        |                                                                               |
|                      [<img src="https://avatars2.githubusercontent.com/u/47316946?s=460&v=4" width = "200" />](https://github.com/RodPaDev)                       |                      [<img src="https://avatars3.githubusercontent.com/u/49410283?s=460&v=4" width = "200" />](https://github.com/temitopeakinsoto)                       |                                             |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RodPaDev)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/temitopeakinsoto)             |                       |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/rodpadev) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/temitopeakinsoto) | 
## Project Overview
[Trello Board](https://trello.com/b/V74GJ53f/labs) <br>
[Product Canvas](https://www.notion.so/EU3-Recipe-Version-Control-78e62a961eee4f059e1f02c7dcb6d73b) <br>
[UX Design files](https://www.figma.com/file/rJzG4mFCWol5kJ0suycSfS/Forkbook?node-id=59%3A4) <br>

Eating and by extension, cooking should be a fun activity. If cooking isn’t fun why eat?
The aim of this project is to make cooking fun, seamless, and most importantly personal.

### Basic Features
- User should be able to sign up and login
- User should be able to easily create a recipe
- User should be able to view recipes
- User should be able to save a (reference) recipe to their cookbook
- User should be able to view their cookbook
- User should be able to create a new version of a recipe

### Advanced Features

- User can search for specific ingredients and/or categories
- User should be able to search for their desired recipe
- User can exclude certain ingredients from search
- User can make their recipe private or public
- User can enter in a different unit and the application will convert the unit
## Tech Stack
### Front end built using:
- _REACT JS (Axios) (Funtional)_
- _REDUX (for state manangement)_
- _Styled-Components_
### Additional Features:
- @material-ui/core
- axios
- formik
- less
- styled-components
- yup
#### Front end deployed to `Netlify`
## APIs
We use [Cloudinary](https://cloudinary.com/) for images/videos content delivery
## Environment Variables
For the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    REACT_APP_API_HOST = link to your API host
    REACT_APP_CLIENT_ID = your Slack app's client ID, can be found in you app's settings --> basic information
    REACT_APP_CLIENT_SECRET = your Slack app's client secret, can be found in you app's settings --> basic information


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

For development, you will only need Node.js installed on your environment.

    $ node --version
    v10.16.3

    $ npm --version
    6.10.3

### Installing

    $ https://github.com/LABS-EU3/rvc_frontend
    $ cd forkbook
    $ npm install

### Starting Development Server

    $ npm start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

### Running the tests

    $ npm test

Launches the test runner in the interactive watch mode.

### Deployment / Build For Production

    $ npm run build

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### Linting fix

    $ npm lint:fix

Fixes linting automatically.

### Coverage reporting

    $ npm coverage

Reports coverage with disabled test-watching.

### Eject hidden modules

    $ npm eject

Ejects hidden modules into `package.json`.

## Structure and Naming

```
  src
  |
  ├── actions
  |   ├── recipe-actions.js
  |   └── user-actions.js
  |
  ├── components
  |   ├── recipes
  |   |   ├── recipe.js
  |   |   ├── recipe-styles.js
  |   |   └── recipe.test.js
  |   |
  |   └── users
  |       ├── user.js
  |       ├── user-styles.js
  |       └── user.test.js
  |
  ├── reducers
  |   ├── reducer.js
  |   ├── reducer.js
      ├── recipe-reducer.js
      └── user-reducer.js

```

### Setup formatting on Editor

On VsCode:

- Go to `Settings` > `Text Editor` > `Formatting`
- Check `Format on Save`

Example:
![Format on save](https://res.cloudinary.com/elbon/image/upload/v1566300863/Screenshot_2019-08-20_at_12.31.41_PM.png)

## Code Styling Conventions
- Tab Size: 2
- Use the single quote `'` 
- Always export objects even if only one function is being exported 
- Always name your files accordingly
- Only **one** index.js can exist and must be top level
- `Async/Await` instead of `.then()` etc...
- All component files should have the .jsx extension e.g login.jsx, signup.jsx.
- Use relative units and values for example { fonts-size: 2rem; } instead of hard-coded pixels { fonts-size: 20px } etc
- Use flexbox or percentages for layout instead of rems/ems/px


## Code Guidelines
- TDD is preferable but Test as soon as possible once you finish something
- **Never work on the same file!**

### Prettier Setup for VS Code 
- Install VS-Code extension below;

  - [x] Name: Prettier - Code formatter
  - [x] Id: esbenp.prettier-vscode
  - [x] Description: VS Code plugin for prettier/prettier
  - [x] Version: 1.9.0
  - [x] Publisher: Esben Petersen
  - [x] [VS Marketplace Link](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)



## Workflow

- **Create a new `feature-branch` from `develop` branch that describes your work.**

  ```bash
    git checkout -b feature-branch
  ```

Example:
![Create a New Branch](https://res.cloudinary.com/elbon/image/upload/v1566291009/branch-naming.png)

- **Adding a New Feature**

  - Create Component named `index.js` related folder.

    ```js
    // src/Home/index.js
    const Home = () => <h1>Welcome to ForkBook</h1>;

    export default Home;
    ```

  - Define Route

    ```js
    // src/routes/AppRouter.js
    import Home from '../components/Home';

    ...
    <Route exact path="/" component={Home} />;
    ```

  - Create Action

    ```js
    // src/actions/home.js
    export const GET_HOME = 'GET_HOME';

    export const getHome = user => {
      return { type: GET_HOME, payload: user };
    };
    ```

  - Create Reducer

    ```js
    // src/reducers/homeReducer.js
    import { GET_HOME } from '../actions/recipe.js';

    const recipesReducer = (state = initialState, action) => {
      switch (action.type) {
        case GET_HOME:
          return { ...state, home: action.payload };
        default:
          return state;
      }
    };

    export default recipesReducer;
    ```

  - Add Reducer to root reducer

    ```js
    // src/reducers/index.js
    import recipesReducer from '../recipesReducer.js';

    const rootReducer = combineReducers({
      recipe: recipesReducer,
    });

    export default rootReducer;
    ```

  - Create Test Suite for Component

    ```js
    // src/Components/Home/__tests__/home.test.js
    import React from 'react';
    import * as rtl from '@testing-library/react';

    import '@testing-library/jest-dom/extend-expect';

    import Recipe from '../index';

    afterEach(rtl.cleanup);
    describe('Recipe Component', () => {
      it('Should render recipe component', () => {
        const { container } = rtl.render(<Home />);
        expect(container).toBeTruthy();
      });
    });
    ```

  - Create Test Suite for Reducer

    ```js
    // src/reducers/__tests__/home.test.js
    import { cleanup } from '@testing-library/react';
    import userReducer from '../userReducer';
    import { FETCH_START } from '../../actions/user';

    const initialState = {
      loading: false,
      user: null,
      error: '',
    };

    afterEach(cleanup);
    describe('User Reducer', () => {
      it('Should return initial State', () => {
        expect(userReducer(undefined, {})).toEqual(initialState);
      });

      it('Should Toggle Loading state', () => {
        expect(userReducer(initialState, { type: FETCH_START })).toEqual({
          ...initialState,
          loading: true,
        });
      });
    });
    ```

  - Create Test Suite for Action

    ```js
    // actions/__tests__/user.test.js
    import configureMockStore from 'redux-mock-store';
    import thunk from 'redux-thunk';
    import nock from 'nock';
    import { setUser } from '../user';

    const mockStore = configureMockStore([thunk]);

    describe('Home Action Creator', () => {
      let store;
      beforeEach(() => {
        store = mockStore({});
      });
      afterEach(() => {
        nock.cleanAll();
      });

      it('Should return FETCH_SUCCESS Action with payload', () => {
        nock('https://home.com/api')
          .post('/user')
          .reply(200, {
            user: 'Sample User',
          });
        const expectedActions = [
          {
            type: 'SET_USER_START',
          },
          {
            type: 'SET_USER_ERROR',
            payload: 'Sample User',
          },
        ];
        store = mockStore({});
        return store.dispatch(setUser()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
    ```

- **Creating SVG Components**

  - Get raw SVG

    ```html
    <svg width="21" height="5" viewBox="0 0 21 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill="#7D8597"/>
      <circle cx="10.5" cy="2.5" r="2.5" fill="#7D8597"/>
      <circle cx="18.5" cy="2.5" r="2.5" fill="#7D8597"/>
    </svg>
    ```
  
  - Remove any unnecessary attributes  
    Here I've removed all fill, width and height attributes. We'll be setting those later with CSS  

    ```html
    <svg viewBox="0 0 21 5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" />
      <circle cx="10.5" cy="2.5" r="2.5" />
      <circle cx="18.5" cy="2.5" r="2.5" />
    </svg>
    ```

  - Create component  
    Wrap all paths in a 'g' tag and spread props in so that styles import properly. Use the SVG component in `styling/atoms/SVG.jsx`  
    ```js
    import React from 'react';
    import SVG from '../SVG';
    function Ellipses(props) {
      return (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 5" {...props}>
          <g>
            <circle cx="2.5" cy="2.5" r="2.5" />
            <circle cx="10.5" cy="2.5" r="2.5" />
            <circle cx="18.5" cy="2.5" r="2.5" />
          </g>
        </SVG>
      );
    }
    ```

  - Component Usage  
    Colors, mitter limits and stroke can be set in props.  
    
    Props:  
      `fillColor="<fill color here>"`  
      `strokeColor="<stroke color here>"`  
      `strokeWidth="<stroke width here>"`  
      `mitter="<mitter limit here>"`  

    Here's an example with the Logo SVG:  
    ```js
      <Logo fillColor="#4265ED" />
    ```

# Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change

If you need to work on a file outside your ticket, let know everyone and create a seperate branch for it! Make sure you follow the guidelines below.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests
We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.
Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

- **Create Pull Request**

  - The PR title should concisely explain the change or addition.
    Example:
    ![Create a new PR](https://res.cloudinary.com/elbon/image/upload/v1566290222/PR%20Title.png)

  - The PR description should clearly state what the PR is about in detail.

- **Request a Review** from at least one team member.
  Example:
  ![Request team member to review PR](https://res.cloudinary.com/elbon/image/upload/v1566290612/Description%20and%20reviewer.png)

- **Resolve Requested Changes**
  Example:
  ![Resolve Changes](https://res.cloudinary.com/elbon/image/upload/v1566295161/resolve-conversation.png)

* **All CI status checks should be green**

* **Review approval should have been submitted before merging**


## Documentation
See [Backend Documentation](https://github.com/LABS-EU3/rvc_backend/blob/develop/README.md) for details on the backend of our project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

### Attribution
These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
