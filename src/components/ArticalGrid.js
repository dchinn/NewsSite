import React from "react";

import Article from "./Article.js"

export default function ArticalGrid({articles}) {

  return (
    <div className="cool">
      <div className="inter-cool">
        
        {articles.filter(x=>!x.showcase).map((x, i) => 
           (<Article key={i} article={x}/>))
        }
        
      </div>
    </div>
  );
}
