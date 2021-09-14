import { useEffect, useState } from 'react';
import './index.less';

import { personalized, playlistByCat, searchHot } from '../../apis/search';

type hotProps = {
  first: string;
};

const Search: React.FC<{}> = () => {
  const [hot, setHot] = useState([]);

  // TODO: 请求统一封装
  useEffect(() => {
    searchHot().then((res) => {
      setHot(res);
    });

    personalized().then((res) => {
      console.log(res);
    });
    playlistByCat().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="hot-list">
      {hot.map((item: hotProps, index) => {
        return <div key={item.first + index}>{item.first}</div>;
      })}
    </div>
  );
};

const Recommend: React.FC<{}> = (props) => {
  return (
    <div className="demo">
      <Search />
    </div>
  );
};

export default Recommend;
