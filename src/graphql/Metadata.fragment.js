/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const MetadataFragment = graphql`
  fragment ContentfulMetadataFragment on ContentfulMetadata {
    title
    description
    keywords
  }
`;
