import gql from "graphql-tag";

export const MY_CATEGORIES = gql`
  query MY_CATEGORIES {
    user {
      id
      username
      categories {
        id
        name
        desc
        imageUrl
      }
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CREATE_CATEGORY($name: String!, $desc: String!, $imageUrl: String!) {
    createUserCategory(name: $name, desc: $desc, imageUrl: $imageUrl) {
      id
      name
      desc
      imageUrl
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query {
    categories {
      id
      name
      desc
      imageUrl
      products {
        id
      }
    }
  }
`;
