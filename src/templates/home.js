import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import styles from './styles/home.twstyle';
import AnimatedCardsSection from '../components/AnimatedCardsSection/SectionContainer';
import Typography from '../components/Typography/Typography';
import MotionPathSection from '../components/MotionPathSection/Section';
import Metadata from '../components/Metadata/Metadata';

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
      case 'ContentfulTypography': return (
        <div id={`homePageContent_${index + 1}`} className="w-full overflow-hidden bg-black">
          <Typography variant={content.variant} component={content.component}>
            {content.body && content.body.body}
          </Typography>
        </div>
      );
      case 'ContentfulAnimatedCardsSection': return (
        <div id={`homePageContent_${index + 1}`} className="w-full overflow-hidden bg-black">
          <AnimatedCardsSection {...content} />
        </div>
      );
      case 'ContentfulMotionPathSection': return (
        <div id={`homePageContent_${index + 1}`} className="w-full overflow-hidden bg-black">
          <MotionPathSection {...content} />
        </div>
      );
      default: return null;
    }
  }

  render() {
    const { data, pageContext } = this.props;
    return (
      <>
        <Metadata {...data.contentfulPage.metadata} />
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
      metadata {
        ...ContentfulMetadataFragment
      }
      pageContent {
        componentType: __typename
        ... on ContentfulBanner {
          ...ContentfulBannerFragment
        }
        ... on ContentfulTypography {
          ...ContentfulTypographyFragment
        }
        ... on ContentfulAnimatedCardsSection {
          name
          variant
          contentful_id
          content {
            ... on ContentfulCard {
              ...ContentfulCardFragment
            }
          }
        }
        ... on ContentfulMotionPathSection {
          name
          triggerHook
          variant
          contentful_id
          content {
            contentful_id
            name
            variant
            startPath {
              internal {
                content
              }
            }
            endPath {
              internal {
                content
              }
            }
            content {
              componentType: __typename
              ... on ContentfulImage {
                ...ContentfulImageFragment
              }
              ... on ContentfulTypography {
                ...ContentfulTypographyFragment
              }
            }
          }
        }
      }
    }
  }  
`;

export default Home;
