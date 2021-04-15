import {useEffect, useState} from 'react';

export const Starships = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("https://swapi.dev/api/starships/")
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
    <div>

      {data.map((item, id) => <p key={id}>{item.name}</p>)}

    </div>
  );
};
