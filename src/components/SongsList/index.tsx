import ListTitle from '../ListTitle';
import classnames from 'classnames';
import './index.less';
import { Link, NavLink } from 'react-router-dom';

type Iprops = {
  title?: string;
  list?: SongItemProps[];
  showIndex?: boolean;
};

export type SongType = {
  id?: string | number;
  picUrl?: any;
  name: string;
  album: AlbumType;
  artists: ArtistType[];
};

export type SongItemProps = {
  id?: string | number;
  picUrl?: any;
  name: string;
  song?: SongType;
};

export interface ArtistType {
  id: number;
  name: string;
  picUrl?: string;
}

export interface AlbumType {
  id: number;
  name: string;
  picUrl: string;
}

export type HotSongsProps = {
  name?: string;
  tracks?: HotSongItem[];
  showIndex?: boolean;
};

export type HotSongItem = {
  id?: string | number;
  name?: string;
  al?: SongItemProps;
  ar?: ArtistType[];
};

const SongsList: React.FC<Iprops> = (props) => {
  return (
    <div className="songs-list">
      {props.title && <ListTitle title={props.title} />}
      {props.list?.map((item, index) => {
        return (
          <div key={item.id} className="song-item">
            {props.showIndex && <div className="song-id">{index + 1}</div>}
            <div className="song-item-left">
              <div className="song-name">{item.name}</div>
              <div className="song-info">
                <span className="song-singer">
                  {item.song?.artists[0].name}
                </span>
                <span>-</span>
                <span className="song-album">{item.song?.name}</span>
              </div>
            </div>
            <div className="song-item-right">
              <i className="iconfont">&#xe698;</i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const HotSongsList: React.FC<HotSongsProps> = (props) => {
  return (
    <div className="songs-list">
      {props.tracks?.map((item, index) => {
        return (
          <Link key={item.id} to={'/song/' + item.id}>
            <div className="song-item">
              {props.showIndex && (
                <div
                  className={classnames({
                    'song-id': true,
                    'index-red': index < 3,
                  })}
                >
                  {index + 1}
                </div>
              )}
              <div className="song-item-left">
                <div className="song-name">{item.name}</div>
                <div className="song-info">
                  <span className="song-singer">
                    {item.ar
                      ?.map((item) => {
                        return item.name;
                      })
                      .join('/')}
                  </span>
                  <span>-</span>
                  <span className="song-album">{item.name}</span>
                </div>
              </div>
              <div className="song-item-right">
                <i className="iconfont">&#xe698;</i>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SongsList;
