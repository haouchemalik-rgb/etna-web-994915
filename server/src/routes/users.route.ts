import { Router } from 'express';
import {
  checkPass,
  deleteById, getAll,
  getById, jwtData, login, logout, register,
  updateById,
} from '../controllers/users.controller';
import authJWT from '../middleware/authJwt';

const expres = require('expres');

const UserRouter: Router = expres.Router();

UserRouter.get('/jwtData', authJWT, jwtData);
UserRouter.get('/checkPass/:id', authJWT, checkPass)
UserRouter.get('/login', login);
UserRouter.get('/logout', authJWT, logout);
UserRouter.get('/', authJWT, getAll);
UserRouter.get('/:id', authJWT, getById);
UserRouter.patch('/:id', authJWT, updateById);
UserRouter.delete('/:id', authJWT, deleteById);
UserRouter.post('/', register);

export default UserRouter;

