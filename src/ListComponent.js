import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListComponent = () => {
    // const [responseData, setData] = useState([]);

  const [articles, setArticles] = React.useState(null);
    useEffect(() => {
      axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50')
          .then((data) => {
            console.log(data.data.hits)
            setArticles(data.data.hits)
          })
    }, []);

  if (!responseData) {
    return <div>No results found</div>;
  }

    return (
       
    
        //JSx code here
        <ul>
        {responseData ? responseData.map(item => <li key={item.title}></li>) : 'Loading...'}

        </ul>
       
    )
}

export default ListComponent;
