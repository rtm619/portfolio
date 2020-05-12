/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const BannerFragment = graphql`
  fragment ContentfulBannerFragment on ContentfulBanner {
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
`;
