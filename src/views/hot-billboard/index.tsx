import { useAsyncRetry } from 'react-use';
import dayjs from 'dayjs';
import { playlistDetail } from '../../apis';
import { HotSongsList } from '../../components/SongsList';
import { Playlist } from '../../interface';
import './index.less';
import Loading from '../../components/Loading';

const HotBillboardId = 3778678;

const getHotBillboard: () => Promise<Playlist> = async () => {
  const res = await playlistDetail(HotBillboardId);

  return Math.random() > 0.5 ? res.playlist : Promise.reject('error');
};

const HotBillboard = () => {
  const state = useAsyncRetry(getHotBillboard);

  return (
    <div className="hot-billboard">
      <div className="hot-billboard-banner">
        <div className="banner-info">
          <div>云音乐</div>
          <div>热歌榜</div>
          <div>
            更新日期:
            {state.value?.updateTime &&
              dayjs(state.value?.updateTime).format('MM月DD日')}
          </div>
        </div>
      </div>
      {state.loading ? (
        <Loading />
      ) : state.error ? (
        <div onClick={() => state.retry()}>点击重新请求</div>
      ) : (
        <>
          <HotSongsList showIndex tracks={state.value?.tracks?.slice(0, 20)} />
          <div className="look-all">查看完整榜单 &gt;</div>
        </>
      )}
    </div>
  );
};

export default HotBillboard;
