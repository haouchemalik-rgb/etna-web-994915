import { Request } from 'express';
import Channels from '../database/models/Channels';

async function getAllChannels() {
  const channels = await Channels.findAll();
  return channels;
}

async function getByIdChannels(id: any) {
  const channel = await Channels.findOne({
    where: {
      id: id
    }
  });
  return channel;
}

async function createChannels(body: any) {
  const object = await Channels.create(body);
  return object;
}

async function sendMessageChannel(id: any, body: any) {
  const channel = await Channels.findOne({
    where: {
      id: id
    }
  });

  channel.messages.push({'type': body.type, 'value': body.value, 'authorId': body.authorId});

  await Channels.update({
    "messages": channel.messages
  }, { where: { id } });

  return channel;
}


export {
  getAllChannels, getByIdChannels, createChannels, sendMessageChannel
}
