import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

// import store from "./store/index";

const App: React.FC = () => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};

export default App;
