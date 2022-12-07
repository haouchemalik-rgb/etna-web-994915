import { Request } from 'express';
import Users from '../database/models/Users';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function getByIdUsers(req: Request) {
  const user = await Users.findAll({
    where: {
      id: req.params.id,
    },
  });
  return {
    data: user,
    err: false,
  };
}

async function getAllUsers() {
  const users: any = await Users.findAll()
  return {
    data: users,
    err: false,
  };
}

async function deleteUser(req: Request) {
  await Users.delete({
    where: {
      id: req.params.id,
    },
  });
  return {
    data: 'Resource deleted successfully',
    err: false,
  };
}

async function updateUser(req: Request) {
  let userNameExist: Boolean = false;
  let emailExist: Boolean = false;

  if (req.body.userName) {
    const userName = Users.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    userName? userNameExist = true : userNameExist = false;
  }
  
  if (req.body.email) {
    const email = Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    email? emailExist = true : emailExist = false;
  }
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 13);
  }
  if (!emailExist && !userNameExist) {
    await Users.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return {
      data: 'Resource updated',
      err: false,
    };
  } else if (emailExist) {
    return {
      data: 'This email is already linked to an account',
      err: true,
    }
  } else {
    return {
      data: 'This userName is already used',
      err: true,
    }
  }
}

async function registerUser(req: Request) {
  const userNameExist = Users.findOne({
    where: {
      userName: req.body.userName,
    },
  });
  const emailExists = Users.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!userNameExist && !emailExists) {
    req.body.password = await bcrypt.hash(req.body.password, 13);
    await Users.create(req.body);
    return {
      data: 'User created succesfully',
      err: false,
    }
  } else if (userNameExist) {
    return {
      data: 'This userName already exists',
      err: true,
    }
  } else{
    return {
      data: 'This email is already linked to an account',
      err: true,
    }
  }
}

async function loginUser(req: Request) {
  const userNameExist = Users.findOne({
    where: {
      userName: req.body.identifiant,
    },
  });
  const emailExists = Users.findOne({
    where: {
      email: req.body.identifiant,
    },
  });
  if (!emailExists && !userNameExist) {
    return {
      data: 'This account doesn\'t exist',
      err: true,
    }
  }
  const passValid = bcrypt.compareSync(req.body.password, emailExists? emailExists.password: userNameExist.password);
  if (passValid) {
    const token = jwt.sign({
      id: emailExists? emailExists.id : userNameExist.id,
    }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
    return {
      data: token,
      err: false,
    };
  }
  return {
    data: 'Wrong password',
    err: true,
  };
}

async function checkPassUser(req: Request) {
  const userExists = await Users.findOne({
    where: {
      id: req.params.id,
    },
  });
  const passValid = bcrypt.compareSync(req.body.password, userExists.password);
  if (userExists && passValid) {
    return {
      data: 'valid',
      err: false,
    };
  }
  return {
    data: 'invalid',
    err: true,
  };
}

export {
  getByIdUsers, getAllUsers,
  registerUser, deleteUser,
  updateUser, loginUser,
  checkPassUser,
} 
