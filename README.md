# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deploy Config

**Github permissions for Workflow**:

- From your repository: settings, actions, general, scroll down to Workflow permissions >> enable Read and Write permissions

**Install Firebase CLI**

Firebase CLI can be installed globally or used as a standalone binary (your choice). Follow official guide: https://firebase.google.com/docs/cli

**Setup Deploy for Firebase Hosting**

Follow official guide, but pay attention to CLI questions. Point public folder to `build` and avoid overriding index.html!

https://firebase.google.com/docs/hosting/github-integration

**Setup Github Action**

Create `.github/workflows/cd-firebase.yml` with this content (the CLI will create live and preview configs, you can edit them also).

Copy your `firebaseConfig.ts` contents and add it as Secret in Repository Settings >> Secrets and variables >> Actions >> Tab Secrets. Name it `FIREBASE_CONFIG`.

This is an example of workflow to deploy for production using `firebaseConfig.ts` from Github Secrets. Pay attention to use your own `projectId` (according to previosly configured via CLI):

```
name: Deploy to Firebase Hosting
#"on": pull_request #use this for bebug
'on':
push:
    branches:
    - main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Write firebaseConfig
        env:
          MY_VAL: ${{ secrets.FIREBASE_CONFIG }}
        run: |
          import os
          data = open("src/config/firebaseConfig.ts", "w")
          for q in (os.getenv("MY_VAL")):
            data.write(q)
        shell: python
      - run: yarn install --frozen-lockfile && yarn build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: "${{ secrets.GITHUB_TOKEN }}"
          firebaseServiceAccount: "${{ secrets.FIREBASE_SERVICE_ACCOUNT_NEXT_FIREBASE_DEMO_1DCC4 }}"
          channelId: live
          projectId: next-firebase-demo-1dcc4
```

**Setup Tests with Playwright and Firebase Emulators**

To run tests locally:

- terminal 1: `NODE_ENV=test yarn start`
- terminal 2: `firebase emulators:start --import ./.firebase-mock`
- terminal 3: `npx playwright test`

Configs made for this repository are listed bellow:

Initialize firebase emulators (for new repositories only):

`firebase init emulators`

Select all services to be emulated and opt for the default settings. In this project were configured: auth and firestore emulators.

Use of emulators was configured for `test` environment in `src/hoos/useFirebase.ts`. To run the application locally using emulators:

`NODE_ENV=test yarn start`

To generate mock data run the emulators, open web UI, add your data, then with another terminal export it: `firebase emulators:export ./.firebase-mock`. You can run emulators with mock data by importing it: `firebase emulators:start --import ./.firebase-mock`

To generate tests using Playwright:

`npx playwright codegen localhost:3000`
