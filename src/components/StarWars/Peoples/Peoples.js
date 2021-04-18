import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import '../Films/film.css'

export const Peoples = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("https://swapi.dev/api/people/")
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
      {/*{data.map((item, index) => <NavLink activeStyle={{color: 'red'}} to={`/people/${item.gender}`} key={index}>{item.name}</NavLink>)}*/}

    </div>
  );
};
