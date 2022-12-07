import { Request, Response } from 'express';
import Users from '../database/models/Users';


async function getByIdUsers(req: Request, res: Response) {
  await Users.findAll({
    where: {
      id: req.params.id,
    },
  })
  .then((user: any) => {
    return {
      data: user,
      err: false,
    }
  })
  .catch(() => {
    return {
      data: 'Erreur de Requete',
      err: true,
    }
  });
}

export {
  getByIdUsers,
} 
