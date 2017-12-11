export default (app) => {
  app.get('/predict', (req, res) => {
    res.json({test: 'api working !'});
  });
};
