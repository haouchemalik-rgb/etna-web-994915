import { Request, Response } from 'express'
import Seminary from '../src/database/models/seminary'
import { deleteSeminary, getByIdSeminary, updateSeminaryById, createSeminary } from '../service/seminaries.service'

export async function newSeminary(req: Request, res: Response) {
    try {
      const neo = await createSeminary(req);
        res.status(200).json(neo)
    } catch (err) {
        res.status(500).json({ 'Erreur de requète': err })

    }
}


export async function getById(req: Request, res: Response) {
    try {
        const UserbyId = await getByIdSeminary(req);
        res.status(200).json(UserbyId);
    } catch (err) {
        res.status(500).json({ 'Request error': err })
    }

}


export async function Allget(req: Request, res: Response) {
    try {
        const allUser: any = await Seminary.getAllSeminaries(req);
        res.status(200).json(allUser);
    } catch (err) {
        res.status(500).json({ 'erreur de requète': err })
    }
}

export async function deleteSeminaries(req: Request, res: Response) {
    try {
        const deleted: any = await deleteSeminary(req);
        res.status(200).json(deleted);

    } catch (err) {
        res.status(500).json({ 'erreur de requète': err })
    }
}

export async function patchSeminary(req: Request, res: Response) {
    try {
        const patched: any = updateSeminaryById(req);
        res.status(200).json(patched)
    } catch (err) {
        res.status(500).json({ 'Erreur de requète': err })
    }
}
