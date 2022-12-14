import { api } from "./ServiceHelper"

export const getChannel = async (channelId) => {
  return await api.get(`/channel/${channelId}`)
    .then((res) => res)
    .catch((err) => err.response);
}

export const getUserChannels = async (channelsId) => {
  const channels = [];
  channelsId.forEach(chanId => {
    getChannel(chanId)
      .then((res) => {
        if (res.status === 200) {
          channels.push(res.data);
        }
      })
  });

  return channels;
}
