// create progromatic blog page

const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  return new Promise ((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({node}) => {
        const { createPage } = actions;
        createPage({
          path: `/writings${node.frontmatter.slug}`,
          component: path.resolve("./src/components/BlogLayout.js"),
          context: {
            slug: node.frontmatter.slug,
          }
        });
      })
      resolve();
    })
  });
};
