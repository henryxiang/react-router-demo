#!/bin/bash

BASE=`dirname $0`/..

cd $BASE

### install react and react-router
npm install --save react react-dom react-router

### install webpack and babel
npm install --save-dev \
    webpack webpack-dev-server \
    babel-core babel-loader \
    babel-preset-es2015 babel-preset-react

### create configuration files for babel and webpack
touch .babelrc webpack.config.js

### set up project src directory and files
mkdir src
cd src
touch index.html App.js main.js

