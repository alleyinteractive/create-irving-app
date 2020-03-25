const config = {
  name: 'create-irving-app',
  customizeServer: (app) => {
    console.log('middleware-ran');
    app.get(
      '/components',
      (req, res) => {
        res.json({
          "defaults": [
            {
              name: "header",
              "config": {},
              "children": [],
            }
          ],
          "page": [],
          "providers": [],
          "redirectTo": '',
          "redirectStatus": 0,
        });
      }
    );
    return app;
  },
};

module.exports = config;

module.exports = config;
