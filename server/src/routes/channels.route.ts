import { Router } from 'express';
import { getAll, getById, create, sendMessage } from '../controllers/channels.controller';

const express = require('express');

const ChannelRouter: Router = express.Router();

ChannelRouter.get('/', getAll);
ChannelRouter.get('/:id', getById);
ChannelRouter.post('/', create);
ChannelRouter.post('/:id/send_message', sendMessage);

export default ChannelRouter;

