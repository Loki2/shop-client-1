import gql from "graphql-tag";

export const ORDER = gql`
mutation ORDER($id: String!){
  custOrder(checkoutId: $id){
    id
    user{
        username
      }
      items{
        product{
          name
          description
          price
        }
        quantity
      }
      createdAt
    }
  }
}
`;


export const CHECKOUT_ADDRESS = gql`
mutation CHECKOUT_ADDRESS(
    $fullname: String! 
    $address: String! 
    $city: String! 
    $province: String! 
    $country: String! 
    $contact: String! 
    $postcode: Number
){
  createCheckout(
    fullname: $fullname 
    address: $address 
    city: $city 
    province: $province 
    country: $country 
    contact: $contact 
    postcode: $postcode
    ){
    id
    fullname
    address
    city
    province
    country
    contact
    postcode
  }
}
`;