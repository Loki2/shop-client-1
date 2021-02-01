import gql from "graphql-tag";

/**
 * Export global User
 */
export const QUERY_USER = gql`
  query QUERY_USER {
    user {
      id
      username
      email
      products {
        id
        name
        description
        price
        stockqty
        imageUrl
      }
      carts {
        id
        product {
          name
          description
          imageUrl
          price
        }
        qualtity
      }
      orders {
        id
        items {
          product {
            name
            description
            price
            imageUrl
          }
          qualtity
        }
      }
      cards {
        id
        cardInfo {
          id
          expiration_month
          expiration_year
          brand
          last_digits
        }
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation SIGN_UP($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const LOG_IN = gql`
  mutation LOG_IN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        username
        email
        products {
          id
          name
          description
          imageUrl
          price
        }
        carts {
          id
          product {
            name
            description
            price
            imageUrl
          }
          qualtity
        }
        orders {
          id
          items {
            product {
              name
              description
              price
              imageUrl
            }
            qualtity
          }
        }
        cards {
          id
          cardInfo {
            id
            expiration_month
            expiration_year
            brand
            last_digits
          }
        }
      }
      jwt
    }
  }
`;

export const REQUEST_RESET_PASSWORD = gql`
  mutation REQUEST_RESET_PASSWORD($email: String!) {
    requestResetPassword(email: $email) {
      message
    }
  }
`;
