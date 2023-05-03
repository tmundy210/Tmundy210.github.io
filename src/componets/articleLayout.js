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

const artcleLayout = ({ articleData, children }) => {
    
    return (
      <div> 
        <main>
          <h1 className={heading}>{articleData.title}</h1>
          <img class = {image} src= {articleData.url} alt= {articleData.title} width = "300" height = "400"/>
          <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html:articleData.body }}
      />
          {children}
        </main>
      </div>
    )
  }
  
  export default artcleLayout