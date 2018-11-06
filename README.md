# Creating a Fragmented Form with validation in React with Material-UI

## Introduction

In this demo I'm creating a react app, using create-react-app, building a checkout form with validation and deploying to GitHub Pages.

### Inital setup

Using `create-react-app` I created a new project `fragmented-form`.

then added the Material-UI dependencies:

```js
yarn add @material-ui/core @material-ui/icons

```

I then removed `create-react-app`'s css and the starter boilerplate.

Using Material-UI example [here](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/page-layout-examples/checkout)

Added basic components with styling, though this lacked validation.

#### TO DO add the validation

### Deploying to GitHub Pages

Using the excellent tutorial provided [here](https://github.com/gitname/react-gh-pages) by gitname, this is fairly easy.

Using `create-react-app` once the project is setup

`yarn add gh-pages --save-dev`

Add the following the your `package.json`

```
//...
"homepage": "http://{YOUR_GITHUB_USERNAME}.github.io/{YOUR_REPO_NAME}/"
```

In the existing `scripts` property, add a `predeploy` property and a `deploy` property, each having the values shown below:

```
"scripts": {
	//...
	"predeploy": "yarn run build",
	"deploy": "gh-pages -d build"
}
```

Following this when you are ready use

```js
yarn deploy
```

to build and update you GitHub page version. 
Note: This makes a new branch gh-pages in which the built code is located 