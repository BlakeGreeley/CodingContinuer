const codeController = require("../controllers/code.controller");

module.exports = (app) => {
    app.post("/api/code", codeController.createNewCode);
}