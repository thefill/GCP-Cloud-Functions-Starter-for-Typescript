import { Request, Response } from "express";

/**
 * Cloud function definition
 */
function helloWorldFunction(req: Request, res: Response) {
    res.send(`Hello ${req.body.name || 'World'}!`);
}

// Cloud Function export
export { helloWorldFunction };
