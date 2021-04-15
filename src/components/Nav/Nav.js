import {NavLink} from 'react-router-dom';

export const Nav = () => (
  <div>
    <NavLink exact activeStyle={{color: 'red'}} to='/'> на главную</NavLink>
    <NavLink activeStyle={{color: 'red'}} to='/films'> films</NavLink>
    <NavLink activeStyle={{color: 'red'}} to='/people'> people</NavLink>
    <NavLink activeStyle={{color: 'red'}} to='/planets'> planets</NavLink>
    <NavLink activeStyle={{color: 'red'}} to='/starships'> starships</NavLink>
    <hr/>
  </div>
);
