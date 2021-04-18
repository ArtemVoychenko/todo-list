import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {RoutesWrapper} from "./components/roates/RoutesWrapper";
import {Nav} from  './components/Nav/Nav'


 const App = () => (
  <div className='wrapper'>

    <BrowserRouter>
      <Nav />
      <RoutesWrapper />
    </BrowserRouter>

  </div>
);

export default App;
