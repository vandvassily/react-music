import './index.less';
import { debounce } from 'lodash-es';
import { useState, useEffect, ChangeEvent, useMemo } from 'react';
import { searchHot, searchSuggest } from '../../apis';
import { getItem, setItem } from '../../utils';

const Search: React.FC<{}> = () => {
  const [query, setQuery] = useState('');
  const [suggests, setSuggests] = useState([]);
  const [hotSearches, setHotSearches] = useState([]);
  const [historyQuery, setHistoryQuery] = useState([]);

  useEffect(() => {
    searchHot().then((res) => {
      setHotSearches(res);
    });
  }, []);

  const handleQueryDebounce = useMemo(() => {
    return debounce(request, 500);
  }, []);

  function request(keyword: any) {
    if (!keyword) {
      setSuggests([]);
      return;
    }
    searchSuggest(keyword).then((res) => {
      setSuggests(res || []);
    });
  }

  useEffect(() => {
    handleQueryDebounce(query);
    // eslint-disable-next-line
  }, [query]);

  // 历史搜索
  useEffect(() => {
    if (suggests.length === 0) {
      const historyQuery = getItem('historyQuery') || [];
      setHistoryQuery(historyQuery);
    }
  }, [suggests]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setQuery(e.currentTarget.value);
  };

  const searchClick = (keyword: string) => {
    const historyQuery: Array<any> = getItem('historyQuery') || [];
    if (
      !historyQuery.some((value) => {
        return value.first === keyword;
      })
    ) {
      historyQuery.unshift({ first: keyword });
      setItem('historyQuery', historyQuery);
    }
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
      {suggests.length === 0 && (
        <div className="hot-search-container">
          <div className="hot-search-title">热门搜索</div>
          <div className="hot-search-list">
            {hotSearches.map((item: any) => {
              return (
                <div key={item.first} className="hot-search-item">
                  {item.first}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="history-search">
        {suggests.length === 0 &&
          !query &&
          historyQuery.map((item: any) => {
            return (
              <div key={item.first} className="history-search-item">
                <i className="iconfont history-search-icon">&#xe606;</i>
                <span className="history-search-keyword">{item.first}</span>
              </div>
            );
          })}
      </div>
      <div className="search-suggest-container">
        {query && <div className="inputed-keyword">搜索"{query}"</div>}
        <div className="search-suggest-list">
          {suggests.map((item: any) => {
            return (
              <div
                key={item.keyword}
                className="search-suggest-item"
                onClick={() => searchClick(item.keyword)}
              >
                <i className="iconfont suggest-search-icon">&#xe644;</i>
                <span className="suggest-search-keyword">{item.keyword}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
