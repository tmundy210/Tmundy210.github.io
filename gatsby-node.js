//const { resolve } = require('path');
const path = require("path")
const { Component } = require("react")

exports.createPages = async ({ graphql,actions }) => {
  const { createPage } = actions
  const template = path.resolve(`src/pages/recipe.js`)
  const articleTemplate = path.resolve(`src/pages/articles.js`)
  const recipeTOC = path.resolve(`src/pages/recipeContents.js`)
  
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
            numberOfServings
            preparationTime
            recipeInstruction {
              format
              processed
              value
            }
            mediaImage {
              mediaImage {
                height
                url
                width
              }
            }
          }
        }
      }
      nodeArticles(first: 10) {
        edges {
          node {
            body {
              processed
              format
              value
            }
            path
            title
            mediaImage {
              mediaImage {
                url
              }
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

  console.log(result.data.Drupal.nodeRecipes.edges)
  
  result.data.Drupal.nodeRecipes.edges.forEach(edges => {
    //arr.push(edges.node.path)
    console.log('___________________________________________________________________')
    createPage({
      path: `${edges.node.path}`,
      component: template,
      context: {
        title: edges.node.title,
        time: edges.node.cookingTime,
        instructions: edges.node.recipeInstruction.processed,
        servings: edges.node.numberOfServings,
        prep: edges.node.preparationTime,
        id: edges.node.id,
        url: edges.node.mediaImage.mediaImage.url + "",
        edge: edges
      },
    })
  })
  result.data.Drupal.nodeArticles.edges.forEach(edges => {
    //arr.push(edges.node.path)
    createPage({
      path: `${edges.node.path}`,
      component: articleTemplate,
      context: {
        title: edges.node.title,
        body: edges.node.body.processed,
        url: edges.node.mediaImage.mediaImage.url + "",
        edge: edges
      },
    })
  })
  createPage({
    path: `/recipeContents`,
    component: recipeTOC,
    context: {
      edges:result.data.Drupal.nodeRecipes.edges
    },
  });

 




 /* createPage({
    path: '/recipeContents',
    component: recipeTOC,
    context: {
      toc: arr[1]
    },
  })
*/



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
