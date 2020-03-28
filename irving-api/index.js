const article = require('./templates/article');
const homepage = require('./templates/homepage');

/**
 * Get site defaults.
 */
const getDefaults = (req, res) => {
  const { context = '' } = req.query;

  return [
    {
      name: "header",
      config: {},
      children: [],
    },
    {
      name: "body",
      config: {
        "title": "default",
      },
      children: [],
    },
    {
      name: "footer",
      config: {},
      children: [],
    },
  ];
};

/**
 * Get the results for page.
 */
const getPage = (req, res) => {
  const { path = '/', } = req.query;

  // Routing.
  switch(path) {
    case '/':
      return homepage();
    case '/about-us/':
      return article();
  }

  return [
    {
      name: "body",
      config: {
        title: "default",
      },
      children: [],
    },
  ];
};

const customizeServer = (app) => {
  app.get(
    '/irving-api/v1/*',
    (req, res) => {
      console.log('middleware');
      res.json({
        defaults: getDefaults(req, res),
        page: getPage(req, res),
        providers: [],
        redirectTo: '',
        redirectStatus: 0,
      });
    }
  );
  return app;
};

module.exports = customizeServer;
