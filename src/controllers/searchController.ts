import { Request, Response } from "express";
import { toEditorSettings } from "typescript";
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const search = (req: Request, resp: Response) =>{

    let query: string = req.query.q as string;

    if(!query){
        resp.redirect('/');
        return;
    }

    resp.render('pages/page', {
        menu: createMenuObject(''),
        list: Pet.getFromName(query),
        query
    });
}