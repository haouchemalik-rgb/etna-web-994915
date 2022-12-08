import { Request } from 'express';
import Channels from '../database/models/Channels';

async function getByIdChannels(req: Request) {
  const user = await Channels.findAll({
    where: {
      id: req.params.id,
    },
  });
  return {
    data: user,
    err: false,
  };
}

async function getAllChannels() {
  const users: any = await Channels.findAll()
  return {
    data: users,
    err: false,
  };
}

async function deleteChannel(req: Request) {
  await Channels.delete({
    where: {
      id: req.params.id,
    },
  });
  return {
    data: 'Resource deleted successfully',
    err: false,
  };
}

async function registerChannel(req: Request) {
  try {
    await Channels.create(req.body);
    return {
      data: 'User created succesfully',
      err: false,
    }
  } catch {
    return {
      data: 'Error on channel creation',
      err: true,
    }
  }
}

export {
  getByIdChannels, getAllChannels,
  deleteChannel, registerChannel
} 
