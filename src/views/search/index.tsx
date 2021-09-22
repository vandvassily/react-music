import './index.less';
import { debounce } from 'lodash-es';
import { useState, useEffect, ChangeEvent, useMemo } from 'react';
import { searchHot, searchSuggest } from '../../apis';

function request(keyword: any) {
  if (!keyword) return Promise.resolve([]);
  return searchSuggest(keyword);
}

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
    return debounce(request, 500);
  }, []);

  useEffect(() => {
    handleQueryDebounce(query)?.then(res => {
      setSuggests(res || [])
    });
  }, [query]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(e.currentTarget.value)
    setQuery(e.currentTarget.value);
  };

  return (
    <div>
      <div className="search-input">
        <div className="search-input-cover">
          <i className="iconfont search-icon">&#xe644;</i>
          <input
            type="search"
            name="search"
            placeholder="搜索歌曲、歌手、专辑"
            onChange={handleChange}
            autoFocus
          />
        </div>
      </div>
      <div className="hot-search-container">
        <div className="hot-search-title">热门搜索</div>
        <div className="hot-search-list">
          {hotSearchs.map((item: any) => {
            return (
              <div key={item.first} className="hot-search-item">
                {item.first}
              </div>
            );
          })}
        </div>
      </div>
      <div className="history-search"></div>
      <div className="search-suggest-container">
        <div>搜索建议</div>
        <div className="search-suggest-list">
          {suggests.map((item: any) => {
            return <div className="search-suggest-item">{item.keyword}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
