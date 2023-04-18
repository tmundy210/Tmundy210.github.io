import { graphql } from 'gatsby'
import React from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'




export default function recipe({ pageContext })  {
  const url = `${pageContext.url}`
  return (
    <div>
    <h2>{pageContext.title}</h2>
    <img src= {url} alt= {pageContext.title}/>
    <h2>{pageContext.prep} minutes</h2>
    <h2>{pageContext.servings} servings</h2>
    <h2>{pageContext.time}</h2>
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html:pageContext.instructions }}
    />
    
    </div>
              
  )
}





              





