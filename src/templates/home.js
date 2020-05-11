import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';

class Home extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.shape({
      headerData: PropTypes.object.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }

  getPageContents = (content) => {
    switch (content.componentType) {
      case 'ContentfulBanner': return (<Banner {...content} />);
      default: return null;
    }
  }

  render() {
    const { data, pageContext } = this.props;
    console.log(process.env.GATSBY_CONTENTFUL_SPACE_ID);
    return (
      <>
        <Header headerData={pageContext.headerData} />
        <h1 className="h-0 overflow-hidden">{data.contentfulPage.title}</h1>
        {data.contentfulPage.pageContent.map((content) => (
          <React.Fragment key={content.name}>
            {this.getPageContents(content)}
          </React.Fragment>
        ))}
      </>
    );
  }
}

export const query = graphql`
query Home($url: String!) {
    contentfulPage(url: {eq: $url}) {
      name
      contentful_id
      title
      type
      url
      pageContent {
        componentType: __typename
        ... on ContentfulBanner {
          name
          title {
            body: title
          }
          shortDescription {
            body: shortDescription
          }
          variant
          contentful_id
          desktopImage {
            file {
              url
            }
            title
          }
          mobileImage {
            file {
              url
            }
            title
          }
        }
        ... on ContentfulSection {
          name
          contentful_id
          variant
        }
      }
    }
  }  
`;

export default Home;
