import { useEffect, useState } from 'react';
import { useAsync } from 'react-use';

import { personalized, searchNewSongs } from '../../apis/search';
import RecommendList from '../../components/RecommendList';
import SongsList from '../../components/SongsList';
import Download from '../../components/Download';

function getRecommend() {
  return personalized(6).then((res) => {
    return res.result;
  });
}

function getNewSongs() {
  return searchNewSongs().then((res) => {
    return res.result;
  });
}

const Recommend: React.FC<{}> = (props) => {
  const recommendList = useAsync(getRecommend);
  const newSongs = useAsync(getNewSongs);

  return (
    <div className="hot-list">
      {recommendList.loading ? (
        <div>loading...</div>
      ) : (
        <RecommendList recommendList={recommendList.value} />
      )}
      {newSongs.loading ? (
        <div>loading...</div>
      ) : (
        <SongsList title="最新音乐" list={newSongs.value} />
      )}
      <Download />
    </div>
  );
};

export default Recommend;
