const express = require("express")
const indexRouter = express.Router();
const getIndex = require("../controllers/indexController.js");
const formManager = require("../controllers/newController.js");
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", getIndex(messages));
indexRouter.get("/new", formManager.buildForm);
indexRouter.post("/new", formManager.createMessage(messages));
indexRouter.get('/open', formManager.open)

module.exports = indexRouter;