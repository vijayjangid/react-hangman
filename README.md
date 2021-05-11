 #  ![hangman-game](https://user-images.githubusercontent.com/11829883/117690634-b012b380-b1d8-11eb-8db1-268afd1e6dee.png) Hangman (for programmers)
 #### Using ReactJS (hooks and context api), CSS3, SVG and neumorphic design
 <img width="860" alt="Screenshot 2021-05-11 at 9 39 47 AM" src="https://user-images.githubusercontent.com/11829883/117757013-dec27580-b23c-11eb-96e0-ea29b9e89a97.png">
<img width="860" alt="Screenshot 2021-05-11 at 9 39 32 AM" src="https://user-images.githubusercontent.com/11829883/117757004-da965800-b23c-11eb-9911-d53b2b972c20.png">

originally forked from [vetrivelcsamy's repo](https://github.com/vetrivelcsamy/reactjs-hangman "vetrivelcsamy")
 Logo made by [smalllikeart](https://www.flaticon.com/authors/smalllikeart "smalllikeart")
 
 ### Features
 - Dark/Light mode
 - Two Words source
     - Programming Language
     - Database

- Keyboard support
- Neumorphic design (experimental)
- SVG manipulation for Hangman graphic

### Folder structure
```
src
├── App.js
├── components
│   ├── footer
│   │   ├── index.js
│   │   └── style.css
│   ├── guessword
│   │   ├── index.js
│   │   └── style.css
│   ├── header
│   │   ├── index.js
│   │   └── style.css
│   ├── index.js        <--- exports all the components from here
│   ├── keyboard
│   │   ├── index.js
│   │   └── style.css
│   ├── keyboard-button
│   │   ├── index.js
│   │   └── style.css
│   ├── result
│   │   ├── index.js
│   │   └── style.css
│   ├── stage
│   │   ├── index.js
│   │   └── style.css
│   └── theme-toggle
│       ├── index.js
│       └── style.css
├── constants
│   └── index.js
├── containers
│   ├── hangman.js     <--- main container that use context and also hosts other components
│   └── style.css
├── hooks
│   ├── index.js
│   ├── use-theme-hook.js       <--- react hook for exposing theme (dark mode) context
│   └── use-word-source-hook.js <--- react hook for exposing word source & guess word context
├── index.css
├── index.js
└── state
    ├── theme-context.js        <--- Theme context (to manage dark mode)
    └── wordsource-context.js.  <--- Wordsource & guessword
```

 ### Dependencies

  - Node: [http://nodejs.org/](http://nodejs.org/)
  - ReactJS: [https://reactjs.org](https://reactjs.org)

If you'd like to contribute, help me close issues.

### Initial Set Up

1. Clone the repository
2. `npm install`
3. `npm start` app start on localhost
