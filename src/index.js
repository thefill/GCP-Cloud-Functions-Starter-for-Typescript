"use strict";
exports.__esModule = true;
/**
 * Cloud function definition
 */
function helloWorldFunction(req, res) {
    res.send("Hello " + (req.body.name || 'World') + "!");
}
exports.helloWorldFunction = helloWorldFunction;
