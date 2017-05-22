# twitter-clone-front-end

**twitter-clone-front-end** is a project that aims to clone Twitter fron-end to improve CSS skills and
new technologies.

# Tools

* Webpack
* NPM
* SASS

![Final result](https://github.com/marabesi/twitter-clone-front-end/blob/master/final-result.png "Final result")


# Beginner Webpack Tutorial Part 1 - Introduction To Webpack :zap:

This is for the people like me whose first intro to webpack was a repository similar to:

* https://github.com/davezuko/react-redux-starter-kit
* https://github.com/webpack/react-starter

While these repositories are very well put together, they aren't necessarily the best learning tools.
In my case, I got pretty confused trying to understand what was going on, and scrapped together my
understanding from a lot of scattered resources.

I hope that this tutorial can make Webpack easy to learn.

## How to work with this project: 

First, we will need Node js in order to work on our project. Go to https://nodejs.org/en/download/ and download the Node for windows or Macintosh. Use the installer Download the Node.js source code or a pre-built installer for your platform.

After downloading the download https://github.com/Twizanex/twitter-clone-front-end and save it in your windows hardrive at:

# C:\Users\OWNER

The final tree for your file should look like this:

      C:\Users\OWNER\twitter-clone-front-end

Next go to your windows start button and locate where your Node.js command prompt file icon is and click on it to open a black screen so that we can start working on our project.

Once the Node.Js command prompt is open on the screen, you will see the first line on the black screen like this:

     C:\Users\OWNER>

Then if this is the default or starting point of file locations in your local developing computer, then you will need to type in this command inorder to get into your `twitter-clone-front-end` file. Use this command inrder to get into the file.

    cd twitter-clone-front-end
    
Once you are in the `twitter-clone-front-end` file, it will be easier to install a file called `node_modules` as our leasson continues.

If the above command is true or correct we should see this output in our Node.js command prompt black screen windows:

     C:\Users\OWNER\twitter-clone-front-end>
     
Since we are inside our project's file, we can now begin our lesson on how to use Webpack.     

## Requirements

At the very least you are expected to know the basics of node.js and npm.

## Contributing

I will gladly accept any and all contributions/corrections. If you have any questions,
feel free to leave them as issues. If I made mistakes, please point them out. Finally, if you feel
that I left anything out, or could have explained something better make sure to leave an issue or
make a pull request.

## Table of Contents

* [Why Webpack?](#why-webpack)
* [The Basics](#the-basics)
  * [Installation](#installation)
  * [Bundling](#bundling)
  * [Loaders](#loaders)
  * [Plugins](#plugins)
* [Your Config File](#your-config-file)
  * [A Minimal Example](#a-minimal-example)
  * [Introducing Plugins](#introducing-plugins)
* [A More Complete Example](#a-more-complete-example)
  * [Introducing Loaders](#introducing-loaders)
  * [Adding More Plugins](#adding-more-plugins)
  * [The Development Server](#the-development-server)
  * [Start Coding](#start-coding)
* [Conclusion](#conclusion)
* [Closing Thoughts](#closing-thoughts)

## Why Webpack?

Because every single react/redux tutorial assumes you know it :cry:

More realistically here are some reasons you would want to use webpack.

Lets you:
  * Bundle your js files into a single file
  * Use npm packages in your frontend code
  * Write ES6/ES7 JavaScript (with help from babel)
  * Minify/Optimize code
  * Turn LESS/SCSS into CSS
  * Use HMR (Hot Module Replacement)
  * Include any type of file into your JavaScript
  * A lot more advanced stuff, which I won't cover

##### Why do I want these features?

* Bundle JS files - Lets you write modular JavaScript, but you do not need to include a separate
`<script>` tag for each JS file. (Configurable in case you do need more than one js file)

* Use npm packages in your frontend code - npm is the biggest ecosystem of open source code on the
internet. Chances are you can save writing code by taking a look at npm, and including the packages
you want in your frontend.

* ES6/ES7 - Adds lots of features to JavaScript that makes it more powerful and easier to write.
[Look here for an intro](https://github.com/DrkSephy/es6-cheatsheet).

* Minify/Optimize Code - Reduces the size of file that you're distributing. Benefits include things
like faster page loads.

* Turn LESS/SCSS into CSS - Nicer way to write CSS.
[Here's an intro if you're unfamiliar](http://alistapart.com/article/why-sass).

* Use HMR - A boost to productivity. Every time you save your code, it gets injected into the page
without requiring a full page refresh. This is really handy if you need to maintain the state of the
page while you are editing your code.

* Include any type of file into your JavaScript - Reduces need for other build tools, and allows you
to programmatically modify/use those files.

## The Basics

### Installation

To use most of the features of webpack you only need a global installation:

    npm install -g webpack

However some features of webpack, such as optimization plugins, require you to have it installed
locally. In which case you'll need to:

    npm install --save-dev webpack

### The Command Line

To run webpack:

    webpack

If you want webpack to build every time you change a file:

    webpack --watch

If you want to use a config file with webpack with a custom name:

    webpack --config myconfig.js

### Bundling

[Example 1](https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example1)

![Official Dependency Tree](http://i.imgur.com/YU4xBPQ.png)

Webpack is formally referred to as a module bundler. If you want an in-depth and accessible explanation
on modules and module bundling definitely check out these two great articles:
[here](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.jw1txw6uh)
and [here](https://medium.com/@preethikasireddy/javascript-modules-part-2-module-bundling-5020383cf306#.lfnspler2).
We're gonna keep it simple. The way that it works is that you specify a single file as your entry point.
This file will be the root of your tree. Then every time you `require` a file from another file it's
added to the tree. When you run `webpack`, all these files/modules are bundled into a single file.


Given this picture you could have the directory:

```
twitter-clone-front-end
|- prebuild.sh
|- package.json
|- webpack.config.js
|- README.md
|- final-result.png
|- .travis.yml
|- .gitignore
|- src
|- assets
|- node_modules
```

and this could be the content of your files

```javascript
// webpack.config.js

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
	'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/js/jquery-3.2.1.js'),
        path.resolve(__dirname, 'src/sass/style.scss'),
        path.resolve(__dirname, 'src/js/app.js'),
        path.resolve(__dirname, 'src/index.jade'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{ 
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader?importLoaders=1',
            }),
        },{
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      }]
    },
    plugins: [
        new ExtractTextPlugin('app.bundle.css'),
        new HtmlWebpackPlugin({
            template: './src/index.jade',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/login.jade',
            filename: 'login.html'
        }),
        new CopyWebpackPlugin([
            { from: './assets/**/*', to: path.resolve(__dirname, 'dist/') }
        ]),
    ]
};

// package.json
{
  "name": "twitter-clone-front-end",
  "version": "1.0.0",
  "description": "twitter-clone-front-end is a project that aims to clone Twitter fron-end to improve CSS skills and new technologies.",
  "main": "index.html",
  "scripts": {
    "start": "webpack-dev-server --output-public-path=/ --progress --env development"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/marabesi/twitter-clone-front-end.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/marabesi/twitter-clone-front-end/issues"
  },
  "homepage": "https://github.com/marabesi/twitter-clone-front-end#readme",
  "devDependencies": {
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.2",
    "extract-text-webpack-plugin": "^2.1.0",
    "file-loader": "^0.11.1",
    "html-webpack-plugin": "^2.28.0",
    "jade": "^1.11.0",
    "jade-html-loader": "0.0.3",
    "jade-loader": "^0.8.0",
    "node-sass": "^4.5.2",
    "path": "^0.12.7",
    "sass-loader": "^6.0.3",
    "style-loader": "^0.18.0",
    "webpack": "^2.5.1",
    "webpack-dev-server": "^2.4.5"
  },
  "dependencies": {
    "express": "^4.15.3",
    "jade": "^1.11.0",
    "jade-loader": "^0.8.0"
  }
}

// prebuild.sh

#!/bin/bash

echo "BUMP HELLO WORLD set up $GH_REPO [via travis] for $GIT_NAME <${GIT_EMAIL}>"
export REPO_URL="https://$GH_TOKEN@github.com/$GH_REPO.git"
git config --global user.email "$GIT_EMAIL"
git config --global user.name "$GIT_NAME"
git branch -a
echo "STATUS"
git status
git remote rename origin old
echo "remotes pre pre-authorized remote url"
git remote -v
git remote add origin $REPO_URL
git config remote.origin.url $REPO_URL

echo "DEBUG, cd out"
test -d out && (
  cd out
  echo -n "user.email"
  git config user.email
  echo -n "user.name"
  git config user.name

) || echo "fresh build, no out directory"



```

```css
/* styles.css */
body {
  background-color: rgb(200, 56, 97);
}
```


The things that are bundled are only the things that you explicitly required across your files.

### Loaders

As you probably noticed, I did something strange in the above example. I `required` a css file in
a JavaScript file.

The really cool, and interesting thing about webpack is that you can `require` more than just
JavaScript files.

There is this thing in webpack called a loader. Using these loaders, you can
`require` anything from `.css` and `.png` to `.html` files.

For example in the diagram above I had

```javascript
// webpack.config.js

const path = require('path');

```
# Next we are going to need loaders and this is how to install the jade-loader. 

	npm install jade-loader --save

If I include [the style-loader](https://github.com/webpack/style-loader) and the [the css-loader](https://github.com/webpack/css-loader) in my webpack config, this is not only perfectly
valid, but also will actually apply the CSS to our project's page.

This is just a single example of the many loaders you can use with webpack.

### Plugins

Plugins, like the name suggests, add extra functionality to webpack. the plugin that we are going to use in this project is called  is
the `ExtractTextPlugin , HtmlWebpackPlugin, CopyWebpackPlugin `,  which lets you extract, make html page, and copy our files and JavaScript code. We'll cover how to use this later.

## The Config File

Webpack does not work out of the box so you need to tailor it to your needs. In order to do this you
need to create a file called

    webpack.config.js

as this is the name that webpack recognizes by default. If you choose to use a different name you
would have to use the `--config` flag to specify the file's name.

For the purpose of learning this project, `webpack.config.js` has been created for you. So you don't need to create one for now.


### Introducing Plugins

[Example 3](https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example3)

Imagine that you've used webpack to bundle all your files together, and now you've realized that all
together it's 900KB. This is a problem that can be ameliorated by minifying your bundle. To do this
you need to use a plugin I mentioned earlier called the
[UglifyJsPlugin](https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin).

Moreover you will need to have webpack installed locally to actually be able to use the plugin.

    npm install --save-dev webpack


Moreover you will need to have `extract-text-webpack-plugin,copy-webpack-plugin,html-webpack-plugin ` installed locally to actually be able to use the plugin.

    # for webpack 2
    npm install --save-dev extract-text-webpack-plugin
    
    # for webpack 1
    npm install --save-dev extract-text-webpack-plugin@1.0.1
    
    # copy-webpack-plugin 
    npm install --save-dev copy-webpack-plugin
    
    
    
Now you can require webpack and minify your code if you wish to but as I said ealier, for this project we will not need the minify plugin for us to test our project.

```javascript
// webpack.config.js

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
	'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/js/jquery-3.2.1.js'),
        path.resolve(__dirname, 'src/sass/style.scss'),
        path.resolve(__dirname, 'src/js/app.js'),
        path.resolve(__dirname, 'src/index.jade'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{ 
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader?importLoaders=1',
            }),
        },{
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader'
      }]
    },

  plugins: [
        new ExtractTextPlugin('app.bundle.css'),
        new HtmlWebpackPlugin({
            template: './src/index.jade',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/login.jade',
            filename: 'login.html'
        }),
        new CopyWebpackPlugin([
            { from: './assets/**/*', to: path.resolve(__dirname, 'dist/') }
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    })
  ]
}
```

#### Introducing Loaders

[Example](https://github.com/Twizanex/twitter-clone-front-end/edit/master/README.md)

Earlier in the tutorial I mentioned [loaders](#loaders). These will help us require non-js files in
our code. In this case, we will need the style loader and the css loader. First we need to install the loaders:

    npm install --save-dev style-loader css-loader
    
Moreover you will need to have jade loders in ordre for our plugin to combile properly `jade-loader ` installed locally to actually be able to use the plugin. for more reference about loaders read:
[jade Loaders](http://webpack.github.io/docs/using-loaders.html)

    npm install --save express jade
    npm install jade-loader --save


**Optional**

If you want to use SCSS instead of CSS you would need to run:

    npm install --save-dev sass-loader node-sass webpack

and instead your loader would be written as

```javascrip
// webpack.config.jst

{
  test: /\.scss$/,
  loaders: ["style", "css", "sass"]
}
```

The process is similar for LESS.

An important aspect to recognize is that there is an *order* to which these loaders need to be specified. In the above example, the `sass` loader is first applied to your `.scss` files, then the `css` loader, and finally the `style` loader. As you can see, the pattern is that these loaders are applied from right to left.


#### The Development Server

[Example]()

Now we want to actually see our website in the browser, which requires a web server to serve our
code. Conveniently, webpack comes with the `webpack-dev-server`, which you need to install both
locally and globally

    npm install -g webpack-dev-server
    npm install --save-dev webpack-dev-server

The dev server is an extremely useful resource for seeing what your website looks like in the browser, and more rapid development. By default you can visit it at `http://localhost:8080`. Unfortunately, features such as hot reloading don't work out of the box, and require some more configuration.


To run the dev server we have to run

    webpack-dev-server --config webpack.config.js


To make our lives a little easier we are now going to use `package.json` as a simple task runner so
that we don't need to keep typing out either command.

We add the `scripts` property to the config

```javascript
// package.json
{
  //...
  "scripts": {
    "start": "webpack-dev-server --output-public-path=/ --progress --env development"
  },
  }
  //...
}
```

We can run these commands with

```
npm run start
```

# To run our application `Twitter-clone-front-end` we will use this command


    webpack-dev-server --config webpack.config.js


# This is how our Node.js command prompt looks like

![Final Node.js command prompt result](https://github.com/Twizanex/twitter-clone-front-end/blob/master/webpack_node_j_command_prompt.png "Final Node.js command prompt result")


You can now view your beautiful website by running `npm run start`, and navigating to
`http://localhost:8080`.


Just in case you haven't already: do `npm run start`, and navigate to `http://localhost:8080`. Setting
up that dev server with hot reloading wasn't for show. Every single time you save while editing
any part of your project, the browser will reload to show your changes.

## Conclusion

I hope this is helpful.
 
