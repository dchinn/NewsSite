import React from "react";

export default function Article({ article }) {
  return (
    <div className="artical-box">
      <img src={article.multimedia[0].url
    } alt="" />
      <div className= {`pill ${article.section}`}>{article.section}</div>
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
    </div>
  );
}

