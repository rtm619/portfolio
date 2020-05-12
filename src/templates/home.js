import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import styles from './styles/home.twstyle';
import SectionContainer from '../components/Section/SectionContainer';

class Home extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    pageContext: PropTypes.shape({
      headerData: PropTypes.object.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }

  getPageContents = (content, index) => {
    switch (content.componentType) {
      case 'ContentfulBanner': return (
        <div id={`homePageContent_${index + 1}`} className={styles.bannerWrapper}>
          <Banner {...content} />
        </div>
      );
      case 'ContentfulSection': return (
        <div id={`homePageContent_${index + 1}`} className={styles.sectionWrapper}>
          <SectionContainer {...content} />
        </div>
      );
      default: return null;
    }
  }

  render() {
    const { data, pageContext } = this.props;
    return (
      <>
        <Header headerData={pageContext.headerData} />
        <h1 className="h-0 overflow-hidden">{data.contentfulPage.title}</h1>
        {data.contentfulPage.pageContent.map((content, index) => (
          <React.Fragment key={content.name}>
            {this.getPageContents(content, index)}
          </React.Fragment>
        ))}
        <div className="w-full h-screen flex items-center justify-center bg-black text-white font-SpartanBold text-center text-32">Something big is coming....</div>
        <div className="w-full h-screen flex items-center justify-center bg-black text-white font-SpartanBold text-center text-32">Placeholder</div>
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
          ...ContentfulBannerFragment
        }
        ... on ContentfulSection {
          name
          entryId: contentful_id
          variant
          sectionTitle: title{
            ...ContentfulTypographyFragment
          }
          content {
            ...ContentfulCardFragment
          }
        }
      }
    }
  }  
`;

export default Home;
