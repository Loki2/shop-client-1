import gql from "graphql-tag";

export const MY_BRANDS = gql`
  query MY_BRANDS {
    user {
      id
      brands {
        id
        name
        desc
        logo
      }
    }
  }
`;

export const CREATE_BRAND = gql`
  mutation CREATE_BRAND($name: String!, $desc: String!, $logo: String!) {
    createUserBrand(name: $name, desc: $desc, logo: $logo) {
      id
      name
      desc
      logo
    }
  }
`;

export const QUERY_BRANDS = gql`
  query {
    brands {
      id
      name
      desc
      logo
      products {
        id
      }
    }
  }
`;
