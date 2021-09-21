import axios from '../helpers/axios';

// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e8%8e%b7%e5%8f%96%e6%ad%8c%e5%8d%95%e8%af%a6%e6%83%85
// 获取歌单详情
export const playlistDetail = async (id: string | number) => {
  const res = await axios({
    url: `/playlist/detail?id=${id}`,
  });

  return res;
};

// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e6%ad%8c%e5%8d%95%e8%af%a6%e6%83%85%e5%8a%a8%e6%80%81
// 歌单详情动态
export const playlistDynamic = async (id: string | number) => {
  const res = await axios({
    url: `/playlist/detail/dynamic?id=${id}`,
  });

  return res;
};
