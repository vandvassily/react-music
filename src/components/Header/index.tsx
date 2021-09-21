// 顶部下载组件
import './index.less';

const Header: React.FC<{}> = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-fix">
        <div className="top-bar-title">云音乐</div>
        <div className="top-bar-btn">下载APP</div>
      </div>
    </div>
  );
};

export default Header;
