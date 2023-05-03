import { graphql } from 'gatsby'
import React from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../componets/recipeLayout'
import LayoutHead from '../componets/layout'




export default function recipe({ pageContext })  {
  const url = `${pageContext.url}`
  return (
    
    <div>
      <LayoutHead></LayoutHead>
      <Layout recipeData= {pageContext}></Layout>
    
    </div>
              
  )
}





              





