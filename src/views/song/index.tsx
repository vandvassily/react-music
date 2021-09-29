import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLyric } from '../../apis';
import { lyricLine, parseLyric } from '../../utils';
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

  const [lyric, setLyric] = useState<lyricLine[]>([]);

  useEffect(() => {
    getLyric(id).then((res) => {
      const lyricArray = parseLyric(res.lrc.lyric);
      setLyric(lyricArray);
    });
  }, [id]);

  return (
    <div className="m-song">
      <div className="m-song-bg"></div>
      <div className="lyric">
        {lyric.map((item) => {
          return <div key={item.time}>{item.txt}</div>;
        })}
      </div>
    </div>
  );
};

export default Song;
