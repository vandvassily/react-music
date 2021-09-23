import { useEffect, useState } from 'react';

import { personalized, playlistByCat, searchNewSongs } from '../../apis/search';
import RecommendList from '../../components/RecommendList';
import SongsList from '../../components/SongsList';
import Download from '../../components/Download';

const Recommend: React.FC<{}> = (props) => {
  const [recommendList, setRecommendList] = useState([]);
  const [newSongs, setNewSongs] = useState([]);

  // TODO: 请求统一封装
  useEffect(() => {
    personalized(6).then((res) => {
      console.log(res);
      setRecommendList(res.result);
    });

    searchNewSongs().then((res) => {
      console.log(res);
      setNewSongs(res.result);
    });

    playlistByCat().then((res) => {
      console.log(res);
    });
  }, []);
  
  return (
    <div className='hot-list'>
      <RecommendList recommendList={recommendList} />
      <SongsList title='最新音乐' list={newSongs} />
      <Download />
    </div>
  );
};

export default Recommend;
