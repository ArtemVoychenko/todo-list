import '../Films/film.css'
import {useWithData} from "../useWithData";

const PeoplesInner = ({data}) => (
  <div className="imageBtn">

    {data.map((item, id) => <p className="filmBtn" key={id}>{item.name}</p>)}

  </div>
);

export const Peoples = () => {

  return useWithData(PeoplesInner, 'https://swapi.dev/api/people/');
};
