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
| Bootstrap or SemanticUI | Front End CSS library |
|     Axios      | Database assistant |
|  Express Router  | |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD


(https://app.diagrams.net/#G1erOI__HNB1h6-BGTG5HY3baUOB7uo1wi)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index


#### Component Hierarchy

``` structure

src
|__ assets/
      |__ fonts
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Nav.jsx
      |__ Articles.jsx
|__ services/
      |__ Auth.jsx
```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo will direct back to._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Article    |   class    |   y   |   n   | _The Articles will render cards using flexbox._      |
|  | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

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



<br>

***

## Post-MVP



***

## Code Showcase



## Code Issues & Resolutions

***
## Articles Referenced