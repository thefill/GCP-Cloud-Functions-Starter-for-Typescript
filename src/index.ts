import { Request, Response } from "express";

/**
 * HTTP Cloud Function.
 */
exports.helloWorldFunction = function helloWorldFunction( req: Request, res:Response ) {
    res.send( `Hello ${req.body.name || 'World'}!` );
};
