import {useWithData} from '../useWithData';
import '../Films/film.css'

const StarshipsInner = ({data}) => (
  <div className="imageBtn">

    {data.map((item, id) => <p className="filmBtn" key={id}>{item.name}</p>)}

  </div>
);

export const Starships = () => {

  return useWithData(StarshipsInner, 'https://swapi.dev/api/starships/');
};

