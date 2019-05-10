/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const cheatsheeTemplate = path.resolve(`src/templates/cheatsheetTemplate.tsx`)

  // sort: { order: DESC, fields: [frontmatter___date] }
  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: cheatsheeTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}