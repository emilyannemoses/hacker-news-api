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

  if(!responseData){
    return (
      <div>No results found</div>
    )
  }

    return (
       
    
        //JSx code here
        <ul>
        {responseData ? responseData.map(item => <li key={item.title}></li>) : 'Loading...'}

        </ul>
       
    )
}

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ListComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50')
//     .then(response => {
//         console.log(response.hits)
//         setData(response.data);
//     })
//     .catch(error => {
//         console.error(error);
//     });
//   }, []);

//   return (
//     <div>
//       {data ? data.hits.map(item => <p key={item.objectID}>{item.title}</p>) : 'Loading...'}
//     </div>
//   );
// };

export default ListComponent;