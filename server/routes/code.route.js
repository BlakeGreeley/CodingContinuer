const codeController = require("../controllers/code.controller");

module.exports = (app) => {
    app.post("/api/code", codeController.createNewCode);
    app.get("/api/code", codeController.getAllCode);
    app.get("/api/code/:id", codeController.getOneCode);
    app.put("/api/code/:id", codeController.updateCode);
    app.delete("/api/code/:id", codeController.deleteCode);
}