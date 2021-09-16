import ListTitle from '../ListTitle';

type Iprops = {
  title?: string;
};

const SongsList: React.FC<Iprops> = (props) => {
  return (
    <div className="songs-list">
      {props.title && <ListTitle title={props.title} />}
      <div className="song-item"></div>
    </div>
  );
};

export default SongsList;
