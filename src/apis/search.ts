import axios from '../helpers/axios';

export const searchHot = async () => {
  const res = await axios({
    url: '/search/hot'
  });

  return res?.result?.hots;
};

// 编辑推荐
export const personalized = async (limit = 10) => {
  const res = await axios({
    url: `/personalized?limit=${limit}`
  });

  return res;
};

// 最新音乐
export const searchNewSongs = async (limit = 10) => {
  const res = await axios({
    url: `/personalized/newsong?limit=${limit}`
  });

  return res;
};

export const playlistByCat = async () => {
  const res = await axios({
    method: 'GET',
    url: '/top/playlist',
    params: {
      cat: '华语'
    }
  });
  return res;
};

/**
 * 搜索建议
 */

export async function searchSuggest(keyword: string = ''): Promise<[]> {
  const res = await axios({
    url: `/search/suggest?keywords=${keyword}&type=mobile`
  });

  return res?.result?.allMatch;
}
