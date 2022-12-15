import { api } from './ServiceHelper';

export const getAllseminary = async () => {
    return await api.get('/seminary')
      .then((res) => res)
      .catch((err) => err.response);
}