import { useEffect, useState } from 'react';
import { playlistDetail } from '../../apis';
import { HotSongsList } from '../../components/SongsList';
import dayjs from 'dayjs';
import { Playlist } from '../../interface';
import './index.less';

const HotBillboardId = 3778678;

const HotBillboard = () => {
  const [playlist, setPlaylist] = useState<Playlist>({} as Playlist);

  useEffect(() => {
    playlistDetail(HotBillboardId).then((res) => {
      if (res.code === 200) {
        setPlaylist(res.playlist);
      }
    });
  }, []);

  return (
    <div className=''>
      <div>
        <div>云音乐</div>
        <div>热歌榜</div>
        <div>
          更新日期:
          {playlist.updateTime && dayjs(playlist.updateTime).format('MM月DD日')}
        </div>
      </div>
      {playlist.tracks && (
        <HotSongsList showIndex tracks={playlist.tracks.slice(0, 20)} />
      )}
      <div className='look-all'>查看完整榜单 &gt;</div>
    </div>
  );
};

export default HotBillboard;
