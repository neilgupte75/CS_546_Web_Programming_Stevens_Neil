const animRoutes = require("./animals");
const postRoutes = require("./posts")
const likesRoutes = require("./likes")

const constructorMethod = app => {
  app.use("/posts", postRoutes);
  app.use("/animals", animRoutes);
  app.use("/likes",likesRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;