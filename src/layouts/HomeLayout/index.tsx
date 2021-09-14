import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { NavLink } from 'react-router-dom';

const Home: React.FC<RouteConfigComponentProps> = (props) => {
  const { route } = props;

  return (
    <div>
      <div>This is HomeLayout</div>
      <div className="nav-bar">
        <NavLink to="/about">about</NavLink>
        <NavLink to="/help">help</NavLink>
        <NavLink to="/recommend">recommend</NavLink>
      </div>
      {route && renderRoutes(route.routes)}
    </div>
  );
};

export default Home;
