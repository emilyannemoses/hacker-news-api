// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ListComponent = (props) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios.get('http://hn.algolia.com/api/v1/items/').then((response) => {
//       const responseData = response.data;
//       console.log(responseData);
//       setData(responseData);

//       //initialize visibility
//       const initialVisibility = {};
//       responseData.forEach((item) => {
//         initialVisibility[item.id] = true;
//       });
//       setVisibility(initialVisibility);
//     });
//   }, []);

//   return (
//     <div>
//       {data
//         ? data.map((item) => <p key={item.id}>{item.name}</p>)
//         : 'Loading...'}
//       //JSx code here
//       <ul></ul>
//     </div>
//   );
// };

// export { ListComponent };
