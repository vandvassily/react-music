import { useEffect, useState } from 'react';
import './index.less';

import { personalized, playlistByCat, searchHot } from '../../apis/search';
import RecommendList from '../../components/RecommendList';

type hotProps = {
  first: string;
};

const Search: React.FC<{}> = () => {
  const [hot, setHot] = useState([]);
  const [recommendList, setRecommendList] = useState([]);

  // TODO: 请求统一封装
  useEffect(() => {
    searchHot().then((res) => {
      setHot(res);
    });

    personalized(6).then((res) => {
      console.log(res);
      setRecommendList(res.result)
    });

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
