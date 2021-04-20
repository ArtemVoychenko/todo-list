import '../Films/film.css'
import {useWithData} from "../useWithData";

const PlanetsInner = ({data}) => (
  <div className="imageBtn">

    {data.map((item, id) => <p className="filmBtn" key={id}>{item.name}</p>)}

  </div>
);

export const Planets = () => {

  return useWithData(PlanetsInner, 'https://swapi.dev/api/planets/');
};

