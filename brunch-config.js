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
        mainModules: ["src/Hello.elm"],
        outputFolder: "public/"
      }
    }
  }
};
