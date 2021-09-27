import { useEffect, useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { getLyric } from '../../apis';
import './index.less';

interface RouteParams {
  id: string;
}

interface LyricResult {
  lrc?: Lrc;
}

interface Lrc {
  lyric?: string;
  version?: number;
}

const Song: React.FC = () => {
  let { id } = useParams<RouteParams>();

  const [lyric, setLyric] = useState([]);

  useEffect(() => {
    getLyric(id).then((res) => {
      const lyricArray = res.lrc.lyric.split('\n');
      console.log(lyricArray)
      setLyric(lyricArray);
    });
  }, [id]);

  return (
    <div className="m-song">
      <div className="m-song-bg"></div>
      <div className="lyric">
        {lyric.map((item) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Song;
