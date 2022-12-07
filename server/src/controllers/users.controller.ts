import { Request, Response } from 'express';
import { 
  getByIdUsers, getAllUsers,
  registerUser, deleteUser, updateUser,
 } from '../services/users.service';

async function getById(req: Request, res: Response) {
  await getByIdUsers(req)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

async function getAll(req: Request, res: Response) {
  await getAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

async function update(req: Request, res: Response) {
  await updateUser(req)
    .then((data) => {
      if (!data.err) {
        res.status(200).json({message: data.data});
      } else {
        res.status(400).json({message: data.data});
      }
    })
    .catch(() => {
      res.status(500).json({messsage: 'Resource not updated'});
    })
}

async function deleteById(req: Request, res: Response) {
  await deleteUser(req)
    .then((data) => {
      res.status(200).json({message: data.data});
    })
    .catch(() => {
      res.status(500).json({message: 'Resource not deleted'});
    });
}



async function register(req: Request, res: Response) {
  await registerUser(req)
    .then((data) => {
      if (!data.err) {
        res.status(201).json(data.data);
      } else {
        res.status(400).json(data.data);
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    })
}


export {
  getById, getAll,
  register, deleteById,
  update,
}
