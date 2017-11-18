"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function helloWorldFunction(req, res) {
    res.send(`Hello ${req.body.name || 'World'}!`);
}
exports.helloWorldFunction = helloWorldFunction;
//# sourceMappingURL=index.js.map