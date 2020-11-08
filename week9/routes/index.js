const primeRoutes = require("./prime");


const constructorMethod = app => {
  app.use("/", primeRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({error: "invalid url please check url"});
  });
}


module.exports = constructorMethod;