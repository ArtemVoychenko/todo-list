import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";


export const Films = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("https://swapi.dev/api/films/")
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
console.log('data', data)
  return (
    <div>

      {data.map((item, index) => <NavLink activeStyle={{color: 'red'}} to={`/films/${item.episode_id}`} key={index}>{item.title}</NavLink>)}

    </div>

  );
};

