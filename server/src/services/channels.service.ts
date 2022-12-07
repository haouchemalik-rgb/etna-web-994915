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

export {
  getByIdChannels, getAllChannels
} 
