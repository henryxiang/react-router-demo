## React-router Demo

### Setting-up Dev Environment

```bash
npm install --save react react-dom react-router
```

```bash
npm install --save-dev \
    webpack webpack-dev-server \
    babel-core babel-loader \
    babel-preset-es2015 babel-preset-react 
```

```bash
touch .babelrc webpack.config.js
```

```bash
mkdir src && cd src && touch index.html App.js main.js
```

* index.html - main app template
* App.js - main app component


### React-Router Basics

```javascript
import { Router, Route, Link, hashHistory } from 'react-router'
...
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}>
          <Route path="/about" compnent="{About}" />
          <Route path="/contact" component="{Contact}" />
        </Route>
      </Router>
    )
  }
...
```