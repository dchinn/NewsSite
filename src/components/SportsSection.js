import React, {useState, useEffect} from 'react';
import ShowCase from "./ShowCase";
import ArticleGrid from "./ArticalGrid";
import {getTopStories} from "../data/nyt-article";

export default function SportsSection () {

    const [articles, setArticle] = useState([]);

    useEffect(()=>  {
        (
        async () => {
            
            const articles=await getTopStories("sports");
            setArticle(articles);
        }

        )() 
    
    }, [])

    if(articles.length===0) {
        return (
            <></>
        )
    }
    
    
    return (
        <>
        
        <div>Sports Section</div>
        
        <ShowCase article={articles[0]} />

        <ArticleGrid articles={articles} />
      
        
        </>
        
    )
}