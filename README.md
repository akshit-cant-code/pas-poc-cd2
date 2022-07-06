### Get Started Immediately

You **don’t** need to install or configure tools like webpack or Babel.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App

**You’ll need to have Node 14.0.0 or later version on your local development machine** (but it’s not required on the server). We recommend using the latest LTS version. You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
│── README.md
│── node_modules
│── package.json
│── .gitignore
│── public
│   ├── assets
│   │   ├── fonts
│   │   │   └── open-sans-*
│   │   └── images
│   │       └── *.(png|svg)
│── src
│   ├── components
│   │    ├── App
│   │    │    └── App.jsx
│   │    ├── Common
│   │    │   ├── FormControls
│   │    │   │   ├── AutoSuggest
│   │    │   │   │   ├── AutoSuggest.jsx
│   │    │   │   │   └── AutoSuggest.spec.jsx
│   │    │   │   ├── CheckBox
│   │    │   │   │   ├── CheckBox.jsx
│   │    │   │   │   └── CheckBox.spec.jsx
│   │    │   │   ├── RadioButtonGroup
│   │    │   │   │   ├── RadioButtonGroup.jsx
│   │    │   │   │   └── RadioButtonGroup.spec.jsx
│   │    │   │   ├── SelectBox
│   │    │   │   │   ├── SelectBox.jsx
│   │    │   │   │   └── SelectBox.spec.jsx
│   │    │   │   ├── TextInput
│   │    │   │   │   ├── TextInput.jsx
│   │    │   │   │   └── TextInput.spec.jsx
│   │    │   │   └── index.js
│   │    │   ├── LoadingIndicator
│   │    │   │   ├── LoadingIndicator.jsx
│   │    │   │   └── LoadingIndicator.spec.jsx
│   │    │   ├── Routes
│   │    │   │   ├── PublicRoute
│   │    │   │   │   ├── PublicRoute.jsx
│   │    │   │   │   └── PublicRoute.spec.jsx
│   │    │   │   ├── RouteHandler
│   │    │   │   │   ├── RouteHandler.jsx
│   │    │   │   │   └── RouteHandler.spec.jsx
│   │    │   │   └──index.js
│   │    │   ├── WelcomePage
│   │    ├── Home
│   │    │   ├── Home.jsx
│   │    │   └── Home.spec.jsx
│   │    ├── Wildcards
│   │    │   ├── InternalServerError
│   │    │   │   ├── InternalServerError.jsx
│   │    │   │   └── InternalServerError.spec.jsx
│   │    │   ├── NotFound
│   │    │   │   ├── NotFound.jsx
│   │    │   │   └── NotFound.spec.jsx
│   │    │   ├── Unauthorized
│   │    │   │   ├── Unauthorized.jsx
│   │    │   │   └── Unauthorized.spec.jsx
│   │    └── index.js
│   ├── config
│   │    └── environment
│   │        ├── common.js
│   │        ├── environment.dev.js
│   │        ├── environment.prod.js
│   │        ├── environment.qa.js
│   │        └── environment.stage.js
│   ├── constants
│   │   ├── app
│   │   ├── i18n
│   │   ├── route
│   │   ├── theme
│   │   └── index.js
│   ├── redux
│   │   ├── actions
│   │   │   ├── common
│   │   │   │   ├── action.js
│   │   │   │   │   ├── action.spec.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── type.js
│   │   │   │   ├── i18n
│   │   │   │   │   ├── action.js
│   │   │   │   │   ├── action.spec.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── type.js
│   │   │   ├── session
│   │   │   │   ├── action.js
│   │   │   │   ├── action.spec.js
│   │   │   │   ├── index.js
│   │   │   │   └── type.js
│   │   │   └── index.js
│   │   │── reducers
│   │   │   ├── common
│   │   │   │   ├── common.js
│   │   │   │   ├── common.spec.js
│   │   │   ├── i18n
│   │   │   │   ├── i18n.js
│   │   │   │   ├── i18n.spec.js
│   │   │   ├── session
│   │   │   │   ├── session.js
│   │   │   │   ├── session.spec.js
│   │   │   ├── index.js
│   │   │   └── initialState.js
│   │   ├── sagas
│   │   │   ├── session
│   │   │   │   ├── session.js
│   │   │   │   ├── session.spec.js
│   │   │   ├── index.js
│   │   │   └── initSagas.js
│   │   ├── selectors
│   │   │   └── index.js
│   │   └── store
│   │        └── configureStore
│   │            ├── index.js
│   │            └── index.spec.js
│   ├── routes
│   │   ├── app.js
│   │   └── index.js
│   ├── services
│   │   ├── browserHistory
│   │   │   ├── browserHistory.js
│   │   │   │── browserHistory.spec.js
│   │   ├── crypto
│   │   │   ├── crypto.js
│   │   │   ├── crypto.spec.js
│   │   └── index.js
│   ├── styles
│   │   ├── components
│   │   │   ├── _home.scss
│   │   │   └── _main_.scss
│   │   ├── extends
│   │   │   ├── _typography.scss
│   │   │   └── _main_.scss
│   │   ├── mixins
│   │   │   ├── _icons.scss
│   │   │   ├── _theme.scss
│   │   │   ├── _preload.scss
│   │   │   └── _main_.scss
│   │   ├── override
│   │   │   ├── _main_.scss
│   │   ├── themes
│   │   │   ├── _dark.module.scss
│   │   │   ├── _default.module.scss
│   │   │   └── _main_.scss
│   │   ├── utility
│   │   │   ├── _common.scss
│   │   │   ├── _font.scss
│   │   │   ├── _layout.scss
│   │   │   ├── _variables.scss
│   │   │   └── _main_.scss
│   ├── tests
│   │   ├── fileMock.js
│   │   ├── setupTests.js
│   │   └── styleMock.js
│   ├── utils
│   │   ├── common
│   │   │   ├── common.js
│   │   │   ├── common.spec.js
│   │   ├── helper
│   │   │   ├── arrayHelper
│   │   │   │   ├── arrayHelper.js
│   │   │   │   ├── arrayHelper.spec.js
│   │   │   ├── objectHelper
│   │   │   │   ├── objectHelper.js
│   │   │   │   ├── objectHelper.spec.js
│   │   │   ├── stringHelper
│   │   │   │   ├── stringHelper.js
│   │   │   │   ├── stringHelper.spec.js
│   │   │   ├── index.js
│   │   ├── transform
│   │   │   ├── transform.js
│   │   │   ├── transform.spec.js
│   │   └── index.js
│   ├── i18n.js
│   ├── index.html
│   └── index.jsx
│── translations
│   ├── app
│   │   └── en-US.json
│   └── home
│       └── en-US.jsons
│── webpack
│   └── config
│      ├── index.js
│      ├── webpack.common.js
│      ├── webpack.development.js
│      └── webpack.production.js
│── babelrc.js
│── .editorconfig
│── .eslintignore
│── .eslintrc.js
│── .gitignore
│── jest.config.js
│── package.json
└── webpack.config.js
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:

### `npm start` or `yarn start`

> `npm start` (environment) (port)

```sh
npm start dev 4200
```

Runs the app in development mode.<br>
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

```sh
npm test
```

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.

### `npm run build` or `yarn build`

> `npm run build` (environment)

```sh
npm run build production
```

Builds the app for production to the `dist` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.

### `npm run start:welcome` or `yarn start:welcome`

> `npm run start:welcome`

Single executable command that runs the app in development mode, generate test-coverage and run the quality gates.

## What’s Included?

Your environment will have everything you need to build a modern single-page React app:

- React, JSX, ES6 and Flow syntax support.
- Language extras beyond ES6 like the object spread operator.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- A fast interactive unit test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
- Hassle-free updates for the above tools with a single dependency.
- Key Features : -
  - Routing Framework
  - State Mgmt: Redux/Redux-saga
  - Code Analyser: Eslints
  - Testing: Jest Testing Framework (~150 built in test cases), Coverage Report (~80% +)
  - Development Environment: (babel, webpack, dev server, minification, fingerprinting)
  - Internationalisation: I18n built-in support
  - Browser support: > 1% (default)
  - Preprocessors: SASS/SCSS Framework
  - Styling: Material Design
  - Theming Framework (built-in)
  - Resusable Services
  - Resusable Utilities
  - Resusable Components (Form Controls, Spinners etc..)
  - Multi stage environment support

## Supporting CD CLI Tool

CD² (Community Driven Components Development) is a community maintained project and all contributors are volunteers. If you'd like to support the future development of CD CLI Tool then please consider donating to our [Open Collective]().

## Further Reading / Useful Links

- [react.js](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)
- [webpack](https://webpack.js.org/)
- [babel](https://babeljs.io/)
- [storybook](https://storybook.js.org/)
