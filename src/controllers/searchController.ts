import { Request, Response } from "express";

export const search = (req: Request, resp: Response) =>{
    resp.render('pages/');
}