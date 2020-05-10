import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

class Home extends PureComponent {
	static propTypes = {
		data: PropTypes.object,
	}

	render() {
		const { data } = this.props;
	return (<h1 className="text-24 font-SpartanBold">{data.contentfulPage.title}</h1>);
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
