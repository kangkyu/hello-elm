# hello-elm

### Tutorial

```sh
mkdir hello-elm
cd hello-elm
elm-package install
```

```
elm-package install evancz/elm-html
elm-make Hello.elm --output index.html
```

### Brunch Setup

```sh
npm init
npm install -g brunch --save-dev
npm install elm-brunch --save-dev
```

move `Hello.elm` and `index.html` to position given by the Brunch skeleton

```js
/* brunch-config.js */
module.exports = {
  config: {
    paths: {
      watched: ["app", "src"]
    },
    server: {
      port: 3000
    },
    files: {
      javascripts: {
        joinTo: "app.js"
      },
      stylesheets: {
        joinTo: "app.css"
      }
    },
    plugins: {
      elmBrunch: {
        mainModules: ["src/Bingo.elm"],
        outputFolder: "public/"
      }
    }
  }
};
```

### How to run
```sh
git clone https://github.com/kangkyu/hello-elm.git
brunch watch --server
```

Open URL and start!
