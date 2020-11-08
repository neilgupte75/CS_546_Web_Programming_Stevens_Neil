const peopleRoutes = require("./people");


const constructorMethod = app => {
  app.use("/", peopleRoutes);
  //app.use("/users", userRoutes);
  //app.get("/about", (req, res) => {
    //res.sendFile(path.resolve("static/about.html"));
  

  app.use("*", (req, res) => {
    res.status(404).json({error: "invalid url please check url"});
  });
}


module.exports = constructorMethod;