import { Request, Response } from 'express';
import getByIdUsers from '../services/users.service';

async function getById(req: Request, res: Response) {
  const user: any = await getByIdUsers(req, res);
  if (!user.err) {
    res.status(200).json(user.data);
  } else {
    res.status(500).json(user.data);
  }
}
