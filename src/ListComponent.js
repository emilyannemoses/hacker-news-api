import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListComponent = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50'
      )
      .then((response) => {
        const responseData = response.hits;
        console.log(responseData);
        setData(responseData);

        //initialize visibility
        const initialVisibility = {};
        responseData.forEach((item) => {
          initialVisibility[item.title] = true;
        });
        setVisibility(initialVisibility);
      });
  }, []);

  if (!responseData) {
    return <div>No results found</div>;
  }

  return (
    <div>
      {data
        ? data.map((item) => <p key={item.id}>{item.name}</p>)
        : 'Loading...'}
      //JSx code here
      <ul>
        {responseData.map((item) => (
          <p key={item.title}></p>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
