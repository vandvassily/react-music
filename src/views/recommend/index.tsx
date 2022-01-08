import { useAsync } from 'react-use';

import { personalized, searchNewSongs } from '../../apis/search';
import RecommendList from '../../components/RecommendList';
import SongsList from '../../components/SongsList';
import Download from '../../components/Download';
import Loading from '../../components/Loading';

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

const Recommend: React.FC = () => {
  const recommendList = useAsync(getRecommend);
  const newSongs = useAsync(getNewSongs);

  return (
    <div className="hot-list">
      {recommendList.loading ? (
        <Loading />
      ) : (
        <RecommendList recommendList={recommendList.value} />
      )}
      {newSongs.loading ? (
        <Loading />
      ) : (
        <SongsList title="最新音乐" list={newSongs.value} />
      )}
      <Download />
    </div>
  );
};

export default Recommend;
