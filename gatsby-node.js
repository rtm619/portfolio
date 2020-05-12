const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const homeTemplate = path.resolve('src/templates/home.js');
  return graphql(`
      query {
        contentfulHeader {
          contentful_id
          name
          menuItems {
            contentful_id
            name
            title
            link {
              title
              url
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              name
              contentful_id
              title
              type
              url
            }
          }
        }
      }
    `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    const headerData = result.data.contentfulHeader;
    result.data.allContentfulPage.edges.forEach(({ node }) => {
      if (node) {
        switch (node.type) {
          case 'Home':
            createPage({
              path: node.url,
              component: homeTemplate,
              context: {
                url: node.url,
                headerData,
              },
            });
            break;
          default: break;
        }
      }
    });
  });
};
