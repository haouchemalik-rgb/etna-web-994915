import {Request, Response} from 'express'
import Seminary from '../src/database/models/seminary'



async function getByIdSeminary(req: Request, res: Response) {
   
     await Seminary.findAll({
        where: {
            id: res.params.id,
    }
    }).then((seminary) => {
        return {
            data: seminary,
            err: false,
        }
    }).cath(() => {
         return {
            err: true, 
            data: 'erreur de requète'
         }
    })
   }
  