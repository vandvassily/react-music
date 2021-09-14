import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { NavLink } from 'react-router-dom';

import './index.less';

const Home: React.FC<RouteConfigComponentProps> = (props) => {
  const { route } = props;

  return (
    <div>
      <div>This is HomeLayout</div>
      <div className="navbar">
        <NavLink
          className="navbar-item"
          activeClassName="navbar-item-selected"
          to="/recommend"
        >
          推荐页面
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="navbar-item-selected"
          to="/about"
        >
          关于页面
        </NavLink>
        <NavLink
          className="navbar-item"
          activeClassName="navbar-item-selected"
          to="/help"
        >
          帮助页面
        </NavLink>
      </div>
      {route && renderRoutes(route.routes)}
    </div>
  );
};

export default Home;
