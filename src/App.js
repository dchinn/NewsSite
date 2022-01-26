import React from "react"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import ArticleGrid from "./components/ArticalGrid.js"
import ShowCase from "./components/ShowCase.js"
import articles from "./data/articles.js"

import ArtSection from "./components/ArtSection"
import SportsSection from "./components/SportsSection"
import TechSection from "./components/TechSection"
import FoodSection from "./components/FoodSection"
import ScienceSection from "./components/ScienceSection"

import "./styles/cool.css"
import "./styles/footer.css"
import "./styles/index.css"
import "./styles/kgaming.css"
import "./styles/substance.css"

import { Routes, Route } from "react-router-dom"

export default function App() {

    return(
        <div className="">
            <Header />
            
  
            <Routes>
                <Route path="/article-section/sports" element={<SportsSection/>} />
                <Route path="/article-section/tech" element={<TechSection/>} />
                <Route path="/article-section/art" element={<ArtSection/>} />
                <Route path="/article-section/food" element={<FoodSection/>} />
                <Route path="/article-section/science" element={<ScienceSection/>} />
                <Route path="/" element={<SportsSection/>} />
               
            </Routes>



            <Footer />
        </div>
    )

}
