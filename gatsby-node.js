//const { resolve } = require('path');
const path = require('path');

exports.onCreateNode = ({node, getNode, actions }) => {
    const {createNodeField} = actions
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node'

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
                pages.forEach(({ node }, index) => {
                    const page_path = node.path
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
}