import RecmmendItem, { SonglistType } from './item';
import './index.less';

type Iprops = {
  recommendList: SonglistType[];
};

const RecommendList: React.FC<Iprops> = (props) => {
  return (
    <div className='recommend-list'>
      <h1 className='recommend-list-title'>编辑推荐</h1>
      <div className='recommend-list-container'>
        {props.recommendList.map((item) => {
          return <RecmmendItem key={item.id} picUrl={item.picUrl} playCount={item.playCount} name={item.name} />;
        })}
      </div>
    </div>
  );
};

// function RecommendList(props) {
//   const enterDetail = (id) => {
//     props.history.push(`/recommend/${id}`);
//   };
//   return (
//     <ListWrapper>
//       <h1 className='title'>推荐歌单</h1>
//       <List>
//         {props.recommendList.map((item) => {
//           return (
//             <ListItem key={item.id} onClick={() => enterDetail(item.id)}>
//               <div className='img_wrapper'>
//                 <div className='decorate'></div>
//                 <LazyLoad placeholder={<img width='100%' height='100%' src={require('./music.png')} alt='music' />}>
//                   <img src={item.picUrl + '?param=300x300'} width='100%' height='100%' alt='music' />
//                 </LazyLoad>
//                 <div className='play_count'>
//                   <i className='iconfont play'>&#xe885;</i>
//                   <span className='count'>{Math.floor(item.playCount / 10000)}万</span>
//                 </div>
//               </div>
//               <div className='desc'>{item.name}</div>
//             </ListItem>
//           );
//         })}
//       </List>
//     </ListWrapper>
//   );
// }

export default RecommendList;
