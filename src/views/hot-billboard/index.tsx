import { useEffect, useState } from 'react';
import { playlistDetail } from '../../apis';
import { HotSongsList } from '../../components/SongsList';
import './index.less';

const HotBillboardId = 3778678;

const HotBillboard: React.FC<{}> = (props) => {
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    playlistDetail(HotBillboardId).then((res) => {
      console.log(res);
      setSongsList(res.playlist.tracks.slice(0, 20));
    });
  }, []);

  return (
    <div className="">
      <div>云音乐热歌榜</div>
      <HotSongsList showIndex tracks={songsList} />
      <div className="look-all">查看完整榜单 &gt;</div>
    </div>
  );
};

export default HotBillboard;
