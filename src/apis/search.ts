import axios from '../helpers/axios';

export const searchHot = async () => {
  const res = await axios({
    url: '/search/hot',
  });

  console.log(res);
  return res?.result?.hots;
};

export const personalized = async () => {
  const res = await axios({
    url: '/personalized',
  });

  return res;
};

export const playlistByCat = async () => {
  const res = await axios({
    method: 'GET',
    url: '/top/playlist',
    params: {
      cat: '华语',
    },
  });
  return res;
};
