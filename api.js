import bodyParser from 'body-parser';

export default (app, server) => {
  //common middlewares
  app.use(bodyParser.json());

  //module routes
  require('./api/classification/routes.js')(app);
};
