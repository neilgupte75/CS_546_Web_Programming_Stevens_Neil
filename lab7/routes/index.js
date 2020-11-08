const animRoutes = require("./animals");

const constructorMethod = app => {
 // app.use("/posts", postRoutes);
  app.use("/animals", animRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;