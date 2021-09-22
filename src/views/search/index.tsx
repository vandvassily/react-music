import './index.less';
import { debounce } from 'lodash-es';
import { useState, useEffect } from 'react';
import { searchHot, searchSuggest } from '../../apis';

function request(keyword: any) {
  console.log(keyword)
  return searchSuggest(keyword);
}
const getResult = debounce(request, 300);

const Search: React.FC<{}> = () => {
  let suggestStatus = false;

  const [HotSearchs, setHotSearchs] = useState([]);

  useEffect(() => {
    searchHot().then((res) => {
      setHotSearchs(res);
    });
  }, []);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (suggestStatus) return;
    console.log(e.target.value);
    getResult(e.target.value)?.then((res) => {
      console.log(res);
    });
  };

  const onCompositionEnd: React.CompositionEventHandler<HTMLInputElement> = (e) => {
    suggestStatus = false;
    // console.log('onCompositionEnd: ' + (e.target as HTMLInputElement).value);
  };
  const onCompositionStart: React.CompositionEventHandler<HTMLInputElement> = (e) => {
    suggestStatus = true;
  };
  return (
    <div>
      <div className='search-input'>
        <div className='search-input-cover'>
          <i className='iconfont search-icon'>&#xe644;</i>
          <input
            type='search'
            name='search'
            placeholder='搜索歌曲、歌手、专辑'
            onCompositionEnd={onCompositionEnd}
            onCompositionStart={onCompositionStart}
            onChange={onChange}
            autoFocus
          />
        </div>
      </div>
      <div className='hot-search-container'>
        <div className='hot-search-title'>热门搜索</div>
        <div className='hot-search-list'>
          {HotSearchs.map((item: any) => {
            return (
              <div key={item.first} className='hot-search-item'>
                {item.first}
              </div>
            );
          })}
        </div>
      </div>
      <div className='history-search'></div>
    </div>
  );
};

export default Search;
