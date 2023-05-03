import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../componets/layout'
import Seo from '../componets/seo'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  grid2,
  RecipegridItem,
  image
} from '../componets/recipeLayout.module.css'
//const rLinks = 

const ArticlePage = ({}) => {
  //var pageInfo = data
  const data = useStaticQuery(graphql`
    query  {
      allSitePage(skip: 10, limit: 8) {
        edges {
          node {
            path
            pageContext
          }
        }
      }
    }
  `)
    return (
      <Layout pageTitle="Articles">
      <ul>
        {
            data.allSitePage.edges.map(node => (
              <li key={node.node.path}> 
              <div class={grid2}>
                <img src={node.node.pageContext.url} alt={node.node.pageContext.title}width="200" height="200" class={RecipegridItem}></img>
                <Link to={node.node.path} class={RecipegridItem}>
                  {node.node.pageContext.title}
              </Link>
             </div>
                </li>
            
          ))
        }
      </ul>
      </Layout>
    )
  }
  
  export const Head = () => <Seo title= "Articles"/>
  
  // Step 3: Export your component
  export default ArticlePage