import logo from './logo.svg';
import './App.css';
import { Homepage } from './components/Homepage/Homepage';
import { Login } from './pages/Login';
import { MainRoutes } from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
  {/* <Login/> */}
  <MainRoutes />
  
    </div>
  );
}

export default App;
