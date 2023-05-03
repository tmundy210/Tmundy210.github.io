import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  grid3,
  gridItem,
  image
} from './recipeLayout.module.css'

const recipeLayout = ({ recipeData, children }) => {
    
  return (
    <div> 
      <main>
        <h1 className={heading}>{recipeData.title}</h1>
        <img class = {image} src= {recipeData.url} alt= {recipeData.title}/>
        <div class={grid3}>
            <div class={gridItem}>Prep Time:<br></br>{recipeData.prep} Minutes</div>
            <div class={gridItem}>Number of Servings:<br></br> {recipeData.servings}</div>
            <div class={gridItem}>Cooking Time: <br></br>{recipeData.time}</div>
        </div>
        <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html:recipeData.instructions }}
    />
        {children}
      </main>
    </div>
  )
}

export default recipeLayout