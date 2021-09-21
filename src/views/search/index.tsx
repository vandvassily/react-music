import React from 'react';

const Search: React.FC<{}> = () => {
  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
  };

  const onChange = (e: any) => {
    console.log(e.target.value);
  };

  const onResult = (e: any) => {
      console.log(e)
  }
  return (
    <div>
      <div>
        <i className="iconfont">&#xe644;</i>
        <input
          type="search"
          name="search"
          placeholder="搜索歌曲、歌手、专辑"
          onKeyDown={onKeyDown}
          onCompositionEnd={onResult}
          onChange={onChange}
        />
      </div>
      <div>热门搜索</div>
      <div className="hot-search-list">
        <div className="hot-search-item"></div>
      </div>
      <div className="history-search"></div>
    </div>
  );
};

export default Search;
