/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async function({ actions, graphql, reporter }) {
  const { createPage } = actions

  const productPageTemplate = path.resolve(
    `src/templates/productPageTemplate.js`
  )

  const result = await graphql(`
    query ProductsForPages {
      skus: allStripeSku {
        edges {
          node {
            id
            currency
            price
            product {
              name
              metadata {
                color
                width
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const productPages = result.data.skus.edges

  productPages.forEach(({ node }) => {
    const itemPath = node.product.name.replace(/ /g, "_")

    console.warn("item-PATH", itemPath)
    createPage({
      path: itemPath,
      component: productPageTemplate,
      context: { node },
    })
  })
}
