import axios from '../helpers/axios';

// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e8%8e%b7%e5%8f%96%e6%ad%8c%e8%af%8d
// 获取歌词
export const getLyric = async (id: string | number) => {
  const res = await axios({
    url: `/lyric?id=${id}`,
  });

  return res;
};
