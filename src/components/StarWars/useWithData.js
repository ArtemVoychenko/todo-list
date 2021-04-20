import React, {useEffect, useState} from 'react';


export const useWithData = (Component, url, props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
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

  return <Component data={data} {...props} />;
};
