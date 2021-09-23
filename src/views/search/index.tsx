import './index.less';
import { debounce } from 'lodash-es';
import { useState, useEffect, ChangeEvent, useMemo } from 'react';
import { searchHot, searchSuggest } from '../../apis';

const Search: React.FC<{}> = () => {
  const [query, setQuery] = useState('');
  const [suggests, setSuggests] = useState([]);
  const [hotSearchs, setHotSearchs] = useState([]);

  useEffect(() => {
    searchHot().then((res) => {
      setHotSearchs(res);
    });
  }, []);

  const handleQueryDebounce = useMemo(() => {
    return debounce(request, 500)
  }, []);

  function request(keyword: any) {
    if (!keyword) {
      setSuggests([]);
      return;
    };
    searchSuggest(keyword).then(res => {
      setSuggests(res || [])
    });
  }

  useEffect(() => {
    handleQueryDebounce(query);
    // eslint-disable-next-line
  }, [query]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setQuery(e.currentTarget.value);
  };

  return (
    <div>
      <div className='search-input'>
        <div className='search-input-cover'>
          <i className='iconfont search-icon'>&#xe644;</i>
          <input type='search' name='search' placeholder='搜索歌曲、歌手、专辑' onChange={handleChange} autoFocus />
        </div>
      </div>
      <div className='hot-search-container'>
        <div className='hot-search-title'>热门搜索</div>
        <div className='hot-search-list'>
          {hotSearchs.map((item: any) => {
            return (
              <div key={item.first} className='hot-search-item'>
                {item.first}
              </div>
            );
          })}
        </div>
      </div>
      <div className='history-search'></div>
      <div className='search-suggest-container'>
        {query && <div className='inputed-keyword'>搜索"{query}"</div>}
        <div className='search-suggest-list'>
          {suggests.map((item: any) => {
            return (
              <div key={item.keyword} className='search-suggest-item'>
                <i className='iconfont suggest-search-icon'>&#xe644;</i>
                <span className='suggest-search-keyword'>{item.keyword}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
