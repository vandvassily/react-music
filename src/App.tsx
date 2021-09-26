import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

// import store from "./store/index";

const App: React.FC<{}> = (props) => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
};

export default App;
