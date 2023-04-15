//const { resolve } = require('path');
const path = require("path")
const { Component } = require("react")

exports.createPages = async ({ graphql,actions }) => {
  const { createPage } = actions
  const template = path.resolve(`src/pages/recipe.js`)

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
  query MyQuery {
    Drupal {
      nodeRecipes(first: 100) {
        edges {
          node {
            changed
            id
            cookingTime
            path
            status
            title
            recipeInstruction {
              format
              processed
              value
            }
          }
        }
      }
    }
  }`
  
  )
 
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //console.log(result.data.Drupal.nodeRecipes.edges)
  
  result.data.Drupal.nodeRecipes.edges.forEach(edges => {
    console.log(edges.node.recipeInstruction)
    console.log('___________________________________________________________________')
    createPage({
      path: `${edges.node.path}`,
      component: template,
      context: {
        title: edges.node.title,
        time: edges.node.cookingTime,
        instrcutions: edges.node.recipeInstruction,
        instrcutions2: edges.node.recipeInstruction.processed
      },
    })
  });
  
  /*result.nodeRecipes.edges.forEach(element => {/////////
    console.log(element)
  });*/

  /*result.data.nodeRecipes.edges.forEach(node => {
    console.log(data)
    const page_path = node.path
    createPage({
      path: `${page_path}`,
      component: template,
      context: {
          nid: node.id,
          data: node,
      },
  })
  });
*/








  /*exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
  }
  // Create blog pages dynamically
  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const template = path.resolve(`src/pages/recipe.js`)
    const result = await graphql(`
      query {
        allSamplePages {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `)
    result.data.allSamplePages.edges.forEach(edge => {
      createPage({
        path: `${edge.node.slug}`,
        component: template,
        context: {
          title: edge.node.title,
        },
      })
    })
  }



  Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  pages.forEach(({ node }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
      },
    })
  })
}*/

















/*exports.onCreateNode = ({node, getNode, actions }) => {
    const {createNodeField} = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node.title'

    createNodeField({
        node,
        name: `slugs`,
        value: slug,
    })
}
exports.createPages = ({actions, graphql}) =>{
    const {createPage } = actions
    return new Promise ((resolve, reject) =>{
        const pageTemplate = path.resolve(`src/pages/recipe.js`)

        resolve(
            graphql(`
            query MyQuery {
                Drupal {
                  nodeRecipes(first: 100) {
                    edges {
                      node {
                        changed
                        id
                        cookingTime
                        path
                        status
                        title
                      }
                    }
                  }
                }
            `
            ).then(result =>{
                if(result.errors){
                    reject(result.errors)
                }
                resolve.pages.forEach(({ node }, index) => {
                    const page_path = node.path
                    console.log(data);
                    createPage({
                        path: `${page_path}`,
                        component: pageTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                });
            })
        )
    })
}*/
}
