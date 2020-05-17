/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const ImageFragment = graphql`
  fragment ContentfulImageFragment on ContentfulImage {
    name
    image {
      title
      file {
        url
      }
    }
  }
`;
