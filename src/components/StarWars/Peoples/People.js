import {useEffect, useState} from 'react';


export const People = (props) => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    const id = props.match.params.id;
    setLoading(true)
    fetch(`https://swapi.dev/api/people/${id}/` )
      .then((res) => {
        res.json()
          .then((results) => {
            setData(results);
          })
          .catch((e) => console.log(e));
      })
      .finally(() => setLoading(false))
  }, []);

  if (isLoading) return <div className="loader"></div>;

  return (
    <div>
      {data.name}
    </div>
  );
};
