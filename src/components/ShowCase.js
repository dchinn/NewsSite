import React from "react";
import articles from "../data/articles.js"
import "../styles/kgaming.css"
import showcaseImage from "../images/31k059knbf821.jpg"



export default function ShowCase({article}) {
 

    console.log(article)

    const styles = {
        backgroundImage: `url(${article.multimedia[0].url})`
    }

    return (


        <section className= "featured_article" style={styles}>
            <div className= "featured" >
                <span className= {`pill ${article.type}`}>{article.type}</span>
                <h2>{article.title}</h2>
                <p>{article.abstract}
               
                </p>
                <a className= "Learn_more" href="#">Learn more</a>
            </div>
        </section>
        
        )
  }
