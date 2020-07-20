# Read-And-butter


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Read&&Butter** 

Judgment free zone blog app where we don't place likes or comments on articles you posted. Simply put an open medium with no judgment. 

<br>

## MVP


- Allow users post articles 
- Users of the articles are able to edit and delete their articles  
- People are able to create a user account with passwords
- Authentication


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | React|
|   React Router   | Route |
| TailWind | Front End CSS library |
|     Axios      | Database assistant |
|     Bcrypt      | Encryption |
|     JWT      | Webtokens |


<br>

### Client (Front End)

#### Wireframes






- Desktop Landing

![Landing](https://i.imgur.com/m5FQ4eB.png)

- Mobile

![Mobile](https://i.imgur.com/fqwx5DU.png)

- Tablet Resource

![Tablet](https://i.imgur.com/QOjq49h.png)




#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ App.jsx    //Holds State
      |__ Nav.jsx
      |__ Articles.jsx
      |__Login.jsx
      |__SignUp.jsx
      |__PostMaker.jsx
      |__ Home.jsx
      |__ About.jsx
      |__ Edit.jsx
      |__ Delete.jsx
|__ services/
      |__ auth.js
      |__ apiHelper.js
      |__ apiconfig.js

```
#### Component tree
![tree](https://i.imgur.com/BQmEfnL.png)


#### Component Breakdown



|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App    | Class |   y   |   n   | _Where State Exists_               |
|    Articles    | Class |   n   |   n   | _The header will contain the navigation and logo will direct back to._               |
|    PostMasker    | functional |   n   |   n   | _Creates articles._               |
|    Header    | Class |   n   |   n   | _The header will contain the navigation and logo will direct back to._               |
|  Navigation  | class |   n   |   n   | _The navigation will provide a link to each of the pages._       |
| SignIn | Functional |   n   |   y   | _Allow users to log in._                 |
| SignUp | Functional |   n   |   y   | _Allow users create an account_                 |
| About | class |   n   |   y   | _About Read&& Butter_                 |
| Home | class |   n   |   y   | _Home Page_                 |
| Edit | class |   n   |   y   | _Edits articles_                 |
| Delete | class |   n   |   y   | _Deletes articles_                 |

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Login Form    |    L     |     3 hrs      |      hrs     |     hrs    |
| Create CRUD functionality |    H     |     6 hrs      |      hrs     |     hrs     |
| Create User Authentication    |    L     |     3 hrs      |      hrs     |     hrs    |
|  Components   |    L     |     7 hrs      |     hrs     |     hrs    |
| Create React App   |    H     |     .5 hrs      |      hrs     |     hrs    |
| CSS using tailwind   |    L     |     8 hrs      |      hrs     |     hrs    |
| Ruby backend scaffold   |    H     |     4 hrs      |      hrs     |     hrs    |
| Incorporate   |    H     |     3 hrs      |      hrs     |     hrs    |
| TOTAL               |          |     42hrs      |      hrs     |     hrs     |


<br>

### Server (Back End)

#### ERD Model
![ERD](https://i.imgur.com/rDkdUjb.png)


<br>

***

## Post-MVP
- Algo Talk - Section where people can blog about Algorithms and share thoughts.
- Holy Data - Section where people can blog about Data Structures and share thoughts.
- Latest articles side bar- Most recent articles will be posted via clickable links to the articles 

***

## Code Showcase



## Code Issues & Resolutions

## Change log
Removed Navigation bar due to implementation on the header.

## Articles Referenced

Tailwind card logic used 