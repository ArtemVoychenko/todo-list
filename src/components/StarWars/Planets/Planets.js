import {useEffect, useState} from 'react';
import '../Films/film.css'

export const Planets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then(({results}) => {

        if (isMounted) setData(results);
      })
      .catch((e) => console.log(e));

    return () => {
      isMounted = false;
    };
  }, []);

  if (!data) return <div className="loader"></div>;

  return (
    <div className="imageBtn">

      {data.map((item, id) => <p className="filmBtn" key={id}>{item.name}</p>)}

    </div>
  );
};
