import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header';

import './index.less';

const Home: React.FC<RouteConfigComponentProps> = (props) => {
  const { route } = props;

  return (
    <div>
      <Header />
      <div className="navbar">
        <div className="navbar-fix">
          <NavLink
            className="navbar-item"
            activeClassName="navbar-item-selected"
            to="/recommend"
          >
            推荐音乐
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="navbar-item-selected"
            to="/hot-billboard"
          >
            热歌榜
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="navbar-item-selected"
            to="/search"
          >
            搜索
          </NavLink>
        </div>
      </div>
      {route && renderRoutes(route.routes)}
    </div>
  );
};

export default Home;
