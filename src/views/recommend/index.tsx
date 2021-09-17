import { useEffect, useState } from 'react';
import './index.less';

import { personalized, playlistByCat, searchHot, searchNewSongs } from '../../apis/search';
import RecommendList from '../../components/RecommendList';
import SongsList from '../../components/SongsList';
import Download from '../../components/Download';

type hotProps = {
  first: string;
};

const Search: React.FC<{}> = () => {
  const [hot, setHot] = useState([]);
  const [recommendList, setRecommendList] = useState([]);
  const [newSongs, setNewSongs] = useState([]);

  // TODO: 请求统一封装
  useEffect(() => {
    searchHot().then((res) => {
      setHot(res);
    });

    personalized(6).then((res) => {
      console.log(res);
      setRecommendList(res.result)
    });

    searchNewSongs().then(res => {
      console.log(res)
      setNewSongs(res.result)
    })

    playlistByCat().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className='hot-list'>
      {hot.map((item: hotProps, index) => {
        return <div key={item.first + index}>{item.first}</div>;
      })}
      <RecommendList recommendList={recommendList} />
      <SongsList title="最新音乐" list={newSongs} />
      <Download />
    </div>
  );
};

const Recommend: React.FC<{}> = (props) => {
  return (
    <div className='demo'>
      <Search />
    </div>
  );
};

export default Recommend;
