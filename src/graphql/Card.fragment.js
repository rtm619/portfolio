/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const CardFragment = graphql`
  fragment ContentfulCardFragment on ContentfulCard {
    contentful_id
    title
    shortDescription {
      shortDescription
    }
    image {
      file {
        url
      }
      title
    }
    link {
      ...ContentfulLinkButtonFragment
    }
  }
`;
