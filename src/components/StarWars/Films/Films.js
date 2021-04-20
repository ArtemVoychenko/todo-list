import {NavLink} from "react-router-dom";
import './film.css';
import {useWithData} from '../useWithData';


const FilmsInner = ({data}) => (
  <div className="film">

    {data.map((item, index) => <NavLink activeStyle={{color: 'red'}} to={`/films/${item.episode_id}`} key={index}>{item.title}</NavLink>)}

  </div>
);

export const Films = () => {

  return useWithData(FilmsInner, 'https://swapi.dev/api/films/');
};




