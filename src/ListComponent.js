import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl ='https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50'

export default function ListComponent(){

  const [articles, setArticles] = useState(null);
  
    useEffect(() => {
      axios.get(baseUrl)
          .then((response) => {
            setArticles(response.data.hits)
          })
    }, []);

    useEffect(()=>{
      console.log(articles)
    },[articles])

  if (!articles) {
    return <div>No results found</div>;
  }

    return (
       
    
        //JSx code here
        <ul>
        {articles.map((article, index) => {
          return <li>{article.title}</li>
        })}

        </ul>
       
    )
}

