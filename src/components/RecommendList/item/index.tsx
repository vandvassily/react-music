import './index.less';

export type SonglistType = {
  id?: string | number;
  picUrl?: any;
  playCount: number;
  name: string;
};

const RecommendItem: React.FC<SonglistType> = (props) => {
  return (
    <div className='recommend-item'>
      <div className='recommend-item-poster'>
        <img src={props.picUrl} width='100%' height='100%' alt='music' />
      </div>
      <div className='play-count'>
        <i className='iconfont'>&#xe60a;</i>
        <span>{Math.floor(props.playCount / 10000)}万</span>
      </div>
      <div className='recommend-item-title'>{props.name}</div>
    </div>
  );
};

export default RecommendItem;
