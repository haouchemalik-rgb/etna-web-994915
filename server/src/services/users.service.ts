import { Request } from 'express';
import Channels from '../database/models/Channels';
import Users from '../database/models/Users';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


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
  await Users.destroy({
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
    const userName = await Users.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    if (userName.id !== req.body.id) {
      userName? userNameExist = true : userNameExist = false;
    } else {
      userNameExist = false;
    }
  }
  
  if (req.body.email) {
    const email = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (email.id !== req.body.id) {
      email? emailExist = true : emailExist = false;
    } else {
      emailExist = false;
    }
  }
  if (req.body.password) {
    const user = await Users.findAll({
      where: {
        id: req.body.id,
      },
    });

    if (req.body.password !== user.password) {
      req.body.password = await bcrypt.hash(req.body.password, 13);
    }
  }
  if (!emailExist && !userNameExist) {
    console.log('okokok')
    await Users.update({
      email: req.body.email
    }, {
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
  const userNameExist = await Users.findOne({
    where: {
      userName: req.body.userName,
    },
  });
  const emailExists = await Users.findOne({
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
  const userNameExist = await Users.findOne({
    where: {
      userName: req.body.identifier,
    },
  });
  const emailExists = await Users.findOne({
    where: {
      email: req.body.identifier,
    },
  });
  if (!emailExists && !userNameExist) {
    return {
      data: 'This account doesn\'t exist',
      err: true,
    }
  }

  const passValid = bcrypt.compareSync(req.body.password, emailExists? emailExists.password : userNameExist.password);

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

async function addUserToChannel(userId: any, channelId: any) {
  const user = await Users.findOne({
    where: {
      id: userId
    }
  });

  if (channelId in user.channels) {
    return {err : true, data: 'already add to this channel'}
  } else {
    const channel = await Channels.findOne({
      where: {
        id: channelId
      }
    })

    if (channel) {
      user.channels.push(channelId);

      await Users.update({
        "channels": user.channels
      }, { where: { "id": userId } });
    } else {
      return {err : true, data: 'channel doesn\'t exist'}
    }
  }

  return user;
}

async function removeUserFromChannel(userId: any, channelId: any) {
  const user = await Users.findOne({
    where: {
      id: userId
    }
  });

  for (let i = 0; i < user.channels.length; i++) {
    if (user.channels[i] === channelId) {
      user.channels.splice(i, 1);
    }
  }

  await Users.update({
    "channels": user.channels
  }, { where: { "id": userId } });

  return user;
}

export {
  getByIdUsers, getAllUsers,
  registerUser, deleteUser,
  updateUser, loginUser,
  checkPassUser, addUserToChannel, removeUserFromChannel
} 
