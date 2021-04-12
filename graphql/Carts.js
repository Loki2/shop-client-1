import gql from "graphql-tag";

export const ADD_TO_CART = gql`
  mutation ADD_TO_CART($id: ID!) {
    addToCart(id: $id) {
      id
      product {
        id
        name
        description
        imageUrl
        price
      }
      quantity
    }
  }
`;

export const MY_CARTS = gql`
  query MY_CARTS {
    user {
      id
      username
      email
      carts {
        id
        product {
          name
          description
          imageUrl
          price
        }
        quantity
      }
    }
  }
`;

export const DELETE_CART = gql`
  mutation DELETE_CART($id: ID!) {
    deleteCart(id: $id) {
      id
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CREATE_ORDER($amount: Float!, $cardId: String, $token: String) {
    createOrder(amount: $amount, cardId: $cardId, token: $token) {
      id
      items {
        id
        product {
          name
          price
        }
        quantity
      }
    }
  }
`;

export const CUSTOM_ORDER = gql`
mutation CUSTOM_ORDER($amount: Float!, $checkoutId: String!){
    custOrder(amount: $amount, checkoutId: $checkoutId ){
      id
      items{
        id
        product{
          name
          description
          price
        }
        quantity
      }
    }
  }
`;