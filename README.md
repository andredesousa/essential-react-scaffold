# Essential React Scaffold

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) version 4 and [Node.js](https://nodejs.org/en/about/releases) version 12.
It has a complete development environment configured, including build, test, and deploy scripts as examples.

## Table of Contents

- [Project structure](#project-structure)
- [Available scripts](#available-scripts)
- [Development mode](#development-mode)
- [Linting and formatting code](#linting-and-formatting-code)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Debugging](#debugging)
- [Security, performance and best practices](#security-performance-and-best-practices)
- [Commit messages convention](#commit-messages-convention)
- [Build and deployment](#build-and-deployment)
- [Learn more](#learn-more)

## Project structure

When working in a large team with many developers that are responsible for the same codebase, having a common understanding of how the application should be structured is vital.
Based on best practices from the community, [React Folder Structure](https://create-react-app.dev/docs/folder-structure), other github React projects and developer experience, your project should look like this:

```html
├── ci
├── e2e
|  ├── page-objects
|  ├── specs
|  |  └── app.spec.ts
|  ├── environment.js
|  ├── jest-puppeteer.config.js
|  ├── jest-puppeteer.config.override.js
|  ├── jest.config.js
|  └── tsconfig.json
├── public
├── src
|  ├── app
|  |  ├── App.scss
|  |  ├── App.spec.tsx
|  |  └── App.tsx
|  ├── assets
|  ├── index.scss
|  ├── index.tsx
|  ├── react-app-env.d.ts
|  ├── reportWebVitals.ts
|  └── setupTests.ts
├── .commitlintrc.json
├── .eslintrc.json
├── .lintstagedrc.json
├── .prettierrc.json
├── .stylelintrc.json
├── CHANGELOG.md
├── package-lock.json
├── package.json
├── README.md
├── styleguide.config.js
└── tsconfig.json
```

All of the app's code goes in a folder named `src`. The end-to-end tests are in the `e2e` folder.
You need to **put any TS and SCSS files inside `src/app`**, otherwise Webpack won't see them.
Only files inside `public` can be used from `public/index.html`.
The assets for the project are placed in the `assets` folder under `src`.
You can create more top-level directories.
They will not be included in the production build so you can use them for things like documentation.

## Available scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.
There are commands to start the application, code linting and formatting, to run unit tests, to run e2e tests via [Puppeteer](https://pptr.dev/), to generate project documentation and changelog, npm audit and [Lighthouse](https://github.com/GoogleChrome/lighthouse), to build, release and deploy the application to [Docker Swarm](https://docs.docker.com/engine/swarm/), and others.
All the commands should be executed in a console inside the root directory.

## Development mode

Use `npm run start` to run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## Linting and formatting code

Use `npm run lint` to analyze your code. It includes, `ESLint`, `Prettier` and `stylelint`.
Many problems can be automatically fixed with `npm run lint:fix`.

Depending on your editor, you may want to add an editor extension to lint and format your code while we type or on-save.
To ensure all files committed to git don't have any TypeScript, linting, or formatting errors, there is a tool called [lint-staged](https://www.npmjs.com/package/lint-staged) that can be used.
When lint-staged is used in combination with [husky](https://www.npmjs.com/package/husky), the linting commands specified with lint-staged can be executed to staged files on pre-commit.

## Running unit tests

Use `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Use `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.
You can see the HTML coverage report opening the [index.html](coverage/lcov-report/index.html) file in your web browser.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Running end-to-end tests

Use `npm run e2e` to execute the end-to-end tests via [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/).
Use `npm run e2e:watch` to keep executing your tests while watching for file changes in the background.
You can see the HTML report opening the [index.html](reports/e2e/index.html) file in your web browser.

## Debugging

You can debug the client-side code, adding breakpoints, inspect variables and see the call stack of the client-side application.
You can use the IDE for debugging unit and end-to-end tests.
These functionalities are provided natively or based on plugins.
You can debug tests in chrome inspector with `debugger` keyword if you run `npm run test:debug` or `npm run e2e:debug`.
When you are using the debug scripts, you need to open the `chrome://inspect` page.

## Security, performance and best practices

The `npm audit` command submits a description of the dependencies configured in your package to your default registry and asks for a report of known vulnerabilities
You can also have npm automatically fix the vulnerabilities by running `npm audit fix`.

This project has the [Lighthouse](https://github.com/GoogleChrome/lighthouse) configured.
Lighthouse is an open-source, automated tool for improving the quality of web pages.
It has audits for performance, accessibility, progressive web apps, SEO and more.

Web performance is possibly one of the most important parts to take into account for a modern web application.
This project has [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) to help visualize where code in the final bundle comes from.
You can see the bundle statistics running the analyzer with the `npm run analyze` command.

## Commit messages convention

In order to have a consistent git history every commit must follow a specific template. Here's the template:

```bash
<type>(<ITEM ID>?): <subject>
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to your CI configuration files and scripts (example scopes: Travis, Circle, Jenkins, SauceLabs)
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: A commit that reverts a previous one
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

### ITEM ID

The related **issue** or **user story** or even **defect**.

- For **user stories**, you can use `US-` as prefix. Example: `feat(US-4321): ...`
- For **no related issues** or **defects** you should leave it blank. Example: `feat: ...`

### Subject

The subject contains a succinct description of the change.

## Build and deployment

Use `npm run build` to build the project.
The build artifacts will be stored in the `build` directory.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

In `ci` folder you can find scripts for your [Jenkins](https://www.jenkins.io/) CI pipeline, a Dockerfile, [Nginx](https://www.nginx.com/) configuration and an example for deploying your application with [Ansible](https://www.ansible.com/) to [Docker Swarm](https://docs.docker.com/engine/swarm/).

## Learn more

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
