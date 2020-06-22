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
import PageProgress from '../components/PageProgress/PageProgress';
import SocialMediaSection from '../components/SocialMediaSection/SocialMediaSection';

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
        <div id={`homePageContent_${index + 1}`} className={styles.genericSectionWrapper}>
          <Typography variant={content.variant} component={content.component}>
            {content.body && content.body.body}
          </Typography>
        </div>
      );
      case 'ContentfulAnimatedCardsSection': return (
        <div id={`homePageContent_${index + 1}`} className={styles.genericSectionWrapper}>
          <AnimatedCardsSection {...content} />
        </div>
      );
      case 'ContentfulMotionPathSection': return (
        <div id={`homePageContent_${index + 1}`} className={styles.genericSectionWrapper}>
          <MotionPathSection {...content} />
        </div>
      );
      case 'ContentfulSocialMediaSection': return (
        <div id={`homePageContent_${index + 1}`} className={styles.genericSectionWrapper}>
          <SocialMediaSection {...content} />
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
        <PageProgress />
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
        ... on ContentfulSocialMediaSection {
          name
          contentful_id
          socialCards {
            ...ContentfulCardFragment
          }
          contactTitle
          contactLink {
            ...ContentfulLinkButtonFragment
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
