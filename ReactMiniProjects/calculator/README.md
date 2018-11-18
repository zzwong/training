# OS X Mojave Calculator Clone in React

## Simulates OSX calculator functionality

Live Demo: [https://react-calculadora.glitch.me/](https://react-calculadora.glitch.me/)

A simple macOS Mojave calculator clone built with React. Uses [mathjs](https://github.com/josdejong/mathjs) package for evaluating expressions

### TODO:

- displayed number too big, should decrease font size automagically
- ~~toggle sign~~
- ~~Update the percent/module button to not be orange~~
- ~~Hitting '=' (eval) after evaluating should perform the last operation~~
  - ex. '2 + 2 = = =' should yield 8
- on error: have some interaction design animation like calculator shake (for ex. entering multiple '.')

Special thanks to @MyNameIsURL and his [calculator](https://github.com/MyNameIsURL/react-calculator-app) project that I used for reference (mainly flexbox CSS). You can view his excellent tutorial [here](https://youtu.be/KzYUuTiHdiY)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
