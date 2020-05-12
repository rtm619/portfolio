/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const LinkButtonFragment = graphql`
  fragment ContentfulLinkButtonFragment on ContentfulLinkButton {
    contentful_id
    title
    variant
    text
    link {
      title
      url
    }
  }
`;
