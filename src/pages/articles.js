import { graphql } from 'gatsby'
import React from 'react'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../componets/articleLayout'
import LayoutHead from '../componets/layout'




export default function article({ pageContext })  {
  const url = `${pageContext.url}`
  return (
    
    <div>
      <LayoutHead></LayoutHead>
      <Layout articleData= {pageContext}></Layout>
    
    </div>
              
  )
}