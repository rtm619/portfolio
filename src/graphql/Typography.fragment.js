/* eslint-disable import/prefer-default-export */
import { graphql } from 'gatsby';

export const TypographyFragment = graphql`
  fragment ContentfulTypographyFragment on ContentfulTypography {
    component
    variant
    body {
      body
    }
  }
`;
