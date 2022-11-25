import { Request, Response } from "express";

export const home = (req: Request, resp: Response) =>{
    resp.render('pages/');
}

export const dogs = (req: Request, resp: Response) =>{
    resp.render('pages/');
}

export const cats = (req: Request, resp: Response) =>{
    resp.render('pages/');
}

export const fishes = (req: Request, resp: Response) =>{
    resp.render('pages/');
}