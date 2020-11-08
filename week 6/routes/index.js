const aboutR = require("./about")
const eduR = require("./education")
const storyR = require("./story")


const constructorMethod = (app) => {
    app.use("/about" , aboutR);
    app.use("/education" , eduR);
    app.use("/story" , storyR);

    app.use("*" , (req, res) => {
        res.status(404).json({Error : "Resource NOT FOUND"})
    })
}


module.exports = constructorMethod;