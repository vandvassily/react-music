import ListTitle from '../ListTitle';
import './index.less';

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
  song: SongType;
};

export interface ArtistType {
  id: number;
  name: string;
  picUrl: string;
}

export interface AlbumType {
  id: number;
  name: string;
  picUrl: string;
}

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

export default SongsList;
