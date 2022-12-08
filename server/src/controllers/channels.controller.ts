import { Request, Response } from 'express';
import { deleteChannel, getAllChannels, getByIdChannels, registerChannel } from '../services/channels.service';

async function getById(req: Request, res: Response) {
  await getByIdChannels(req)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

async function getAll(req: Request, res: Response) {
  await getAllChannels()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
}

async function deleteById(req: Request, res: Response) {
  await deleteChannel(req)
    .then((data) => {
      res.status(200).json({message: data.data});
    })
    .catch(() => {
      res.status(500).json({message: 'Resource not deleted'});
    });
}

async function create(req: Request, res: Response) {
  await registerChannel(req)
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

async function addUser(req: Request, res: Response) {

}

async function sendMessage(req: Request, res: Response) {

}

export {
  getById, getAll, deleteById, create, addUser, sendMessage
}
