import {NavLink} from 'react-router-dom';
import '../StarWars/Films/film.css';

export const Nav = () => (
  <div className="nav">
    <NavLink className="filmBtn" exact activeStyle={{color: 'red'}} to='/'>Главная</NavLink>
    <NavLink className="filmBtn" activeStyle={{color: 'red'}} to='/films'> films</NavLink>
    <NavLink className="filmBtn" className="filmBtn" activeStyle={{color: 'red'}} to='/people'> people</NavLink>
    <NavLink className="filmBtn" activeStyle={{color: 'red'}} to='/planets'> planets</NavLink>
    <NavLink className="filmBtn" activeStyle={{color: 'red'}} to='/starships'> starships</NavLink>
    <hr/>
  </div>
);
